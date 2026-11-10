import { useEffect, useRef } from 'react';

const SIZE = 28, GAP = 4, STEP = SIZE + GAP;

/* ── SERPENT ── */
const SNAKE_LENGTH = 14;     // nombre d'anneaux
const SNAKE_SPEED = 90;      // ms entre deux déplacements
const BRIGHT = 0.2;          // seuil à partir duquel une case verte est « appétissante »
const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function roundedSquare(ctx, x, y, s, r = 3) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + s - r, y); ctx.quadraticCurveTo(x + s, y, x + s, y + r);
  ctx.lineTo(x + s, y + s - r); ctx.quadraticCurveTo(x + s, y + s, x + s - r, y + s);
  ctx.lineTo(x + r, y + s); ctx.quadraticCurveTo(x, y + s, x, y + s - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.fill();
}

/* ── ANIMATED GRID ── */
export default function GridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, cols, rows, cells, frame;
    let snake, dir, lastMove = 0;

    const cellAt = (c, r) => cells[r * cols + c];
    const wrap = (v, max) => (v + max) % max;

    function initGrid() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Math.ceil(W / STEP) + 1;
      rows = Math.ceil(H / STEP) + 1;
      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({
            x: c * STEP, y: r * STEP, s: SIZE,
            alpha: Math.random() * 0.25 + 0.03,
            target: Math.random() * 0.25 + 0.03,
            speed: Math.random() * 0.008 + 0.002,
          });
        }
      }
      // le serpent part du centre de l'écran, vers la droite
      const c0 = Math.floor(cols / 2), r0 = Math.floor(rows / 2);
      dir = 0;
      snake = Array.from({ length: SNAKE_LENGTH }, (_, i) => ({ c: wrap(c0 - i, cols), r: r0 }));
    }

    // case verte lumineuse la plus proche de la tête
    function findFood(head) {
      let best = null, bestDist = Infinity;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (cellAt(c, r).alpha < BRIGHT) continue;
          const d = Math.abs(c - head.c) + Math.abs(r - head.r);
          if (d > 0 && d < bestDist) { bestDist = d; best = { c, r }; }
        }
      }
      return best;
    }

    function moveSnake() {
      const head = snake[0];
      const food = findFood(head);
      const occupied = new Set(snake.slice(0, -1).map(p => p.c + ',' + p.r));

      // directions possibles : pas de demi-tour, pas sur son propre corps
      const options = DIRS.map((d, i) => i).filter(i => {
        if (i === (dir + 2) % 4) return false;
        const [dc, dr] = DIRS[i];
        return !occupied.has(wrap(head.c + dc, cols) + ',' + wrap(head.r + dr, rows));
      });
      if (options.length === 0) options.push(dir);

      let next = dir;
      if (food && Math.random() > 0.15) {
        // se rapprocher de la case verte visée
        next = options.reduce((best, i) => {
          const [dc, dr] = DIRS[i];
          const d = Math.abs(head.c + dc - food.c) + Math.abs(head.r + dr - food.r);
          const [bc, br] = DIRS[best];
          const bd = Math.abs(head.c + bc - food.c) + Math.abs(head.r + br - food.r);
          return d < bd ? i : best;
        }, options[0]);
      } else if (!options.includes(dir) || Math.random() < 0.25) {
        // flâner : virage au hasard
        next = options[Math.floor(Math.random() * options.length)];
      }
      dir = next;

      const [dc, dr] = DIRS[dir];
      const newHead = { c: wrap(head.c + dc, cols), r: wrap(head.r + dr, rows) };
      snake.unshift(newHead);
      snake.pop();

      // il « mange » la case verte : elle s'éteint
      const eaten = cellAt(newHead.c, newHead.r);
      if (eaten.alpha >= BRIGHT) { eaten.alpha = 0.02; eaten.target = Math.random() * 0.08 + 0.02; }
    }

    function animGrid(time) {
      if (time - lastMove > SNAKE_SPEED) { moveSnake(); lastMove = time; }

      ctx.clearRect(0, 0, W, H);
      cells.forEach(cell => {
        if (Math.random() < 0.001) cell.target = Math.random() < 0.15 ? Math.random() * 0.55 + 0.2 : Math.random() * 0.08 + 0.02;
        cell.alpha += (cell.target - cell.alpha) * cell.speed;
        ctx.fillStyle = `rgba(74,222,128,${cell.alpha})`;
        roundedSquare(ctx, cell.x, cell.y, cell.s);
      });

      // corps du serpent : de la tête brillante vers une queue qui s'estompe
      for (let i = snake.length - 1; i >= 0; i--) {
        const { c, r } = snake[i];
        const fade = 1 - i / snake.length;
        ctx.fillStyle = `rgba(134,239,172,${0.25 + fade * 0.7})`;
        if (i === 0) { ctx.shadowColor = '#4ade80'; ctx.shadowBlur = 18; }
        roundedSquare(ctx, c * STEP, r * STEP, SIZE, 5);
        ctx.shadowBlur = 0;
      }

      frame = requestAnimationFrame(animGrid);
    }

    window.addEventListener('resize', initGrid);
    initGrid();
    frame = requestAnimationFrame(animGrid);

    return () => {
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas id="grid-canvas" ref={canvasRef} />;
}
