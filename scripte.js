// ============================================
// DJAFAROU ABDOU - Portfolio JavaScript
// Version Professionnelle et Élégante
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // PAGE LOADER
  // ============================================
  const pageLoader = document.querySelector('.page-loader');
  
  window.addEventListener('load', function() {
    if (pageLoader) {
      setTimeout(() => {
        pageLoader.classList.add('hidden');
        setTimeout(() => pageLoader.style.display = 'none', 300);
      }, 500);
    }
  });
  
  
  // ============================================
  // NAVIGATION
  // ============================================
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close menu on link click
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (menuToggle) menuToggle.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Active section
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.add('active');
      } else {
        document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);
  
  
  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offset = 100;
        const targetPosition = target.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // ============================================
  // SCROLL ANIMATIONS (only for progress bars and counters)
  // ============================================
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Progress bars
        if (entry.target.classList.contains('progress-item')) {
          const progressBar = entry.target.querySelector('.progress-bar');
          const targetWidth = progressBar.getAttribute('data-progress');
          if (progressBar && !progressBar.style.width) {
            setTimeout(() => {
              progressBar.style.width = targetWidth + '%';
            }, 200);
          }
        }
        
        // Counters
        if (entry.target.classList.contains('stat-item')) {
          const counter = entry.target.querySelector('h4');
          if (counter && !counter.dataset.counted) {
            animateCounter(counter);
          }
        }
      }
    });
  }, observerOptions);
  
  // Only observe progress bars and stat items
  document.querySelectorAll('.progress-item').forEach(el => observer.observe(el));
  document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));
  
  
  // ============================================
  // TYPING EFFECT
  // ============================================
  const typingElement = document.querySelector('.typing-text');
  
  if (typingElement) {
    const texts = [
      'Développeur Full Stack',
      'Passionné par l\'IA',
      'Créateur de Solutions'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let speed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
      }
      
      setTimeout(type, speed);
    }
    
    type();
  }
  
  
  // ============================================
  // COUNTER ANIMATION
  // ============================================
  function animateCounter(element) {
    const targetText = element.textContent;
    const targetValue = parseInt(targetText.replace(/\D/g, ''));
    
    if (isNaN(targetValue) || element.dataset.counted) return;
    element.dataset.counted = 'true';
    
    let currentValue = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    const suffix = targetText.includes('+') ? '+' : '';
    
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        element.textContent = targetValue + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(currentValue) + suffix;
      }
    }, 16);
  }
  
  
  // ============================================
  // PROGRESS BARS
  // ============================================
  const progressItems = document.querySelectorAll('.progress-item');
  
  progressItems.forEach(item => {
    const progressBar = item.querySelector('.progress-bar');
    const progressValue = item.querySelector('.progress-header span:last-child').textContent;
    progressBar.setAttribute('data-progress', progressValue.replace('%', ''));
  });
  
  
  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const message = this.querySelector('textarea[name="message"]').value;
      
      if (!name || !email || !message) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
      }
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showNotification('Message envoyé avec succès!', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function showNotification(message, type = 'info') {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const colors = {
      success: '#3B82F6',
      error: '#EF4444',
      info: '#3B82F6'
    };
    
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 30px;
      padding: 16px 24px;
      background: ${colors[type] || colors.info};
      color: white;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      animation: slideIn 0.3s ease;
      font-weight: 500;
      font-size: 0.95rem;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  
  // ============================================
  // BACK TO TOP
  // ============================================
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', 'Retour en haut');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  `;
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
  
});


// ============================================
// ANIMATIONS CSS
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);