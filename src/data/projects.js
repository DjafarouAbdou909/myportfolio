export const projects = [
{
    name: { fr: "African Crop Yield Intelligence", en: "African Crop Yield Intelligence" },
    tags: ["Python", "LightGBM", "GeoPandas", "Streamlit", "CRISP-DM"],
    color: "#2a2614",
    accent: "#facc15",
    badge: { type: "live", fr: "🟢 En ligne", en: "🟢 Live" },
    desc: {
      fr: "Prédiction des rendements agricoles en Afrique sur la base ouverte GROW-Africa (145 000 rendements régionaux, 45 pays). Pipeline CRISP-DM complet : climat de chaque saison de culture (NASA POWER, pluie satellite IMERG, évapotranspiration FAO-56), sols SoilGrids et relief Copernicus DEM. Modèles LightGBM évalués sur des régions et des années jamais vues : erreur réduite de 17 à 22 % face aux moyennes historiques, intervalles de prédiction conformes et interprétation par valeurs de Shapley. Application Streamlit en ligne, code et documentation sur GitHub.",
      en: "Crop yield prediction across Africa on the open GROW-Africa database (145,000 regional yields, 45 countries). End-to-end CRISP-DM pipeline: climate of each crop season (NASA POWER, IMERG satellite rainfall, FAO-56 evapotranspiration), SoilGrids soils and Copernicus DEM terrain. LightGBM models evaluated on unseen regions and future years: 17 to 22% lower error than historical averages, conformal prediction intervals and Shapley value interpretation. Live Streamlit app, code and documentation on GitHub."
    },
    link: "https://african-crop-yield-intelligence.streamlit.app/"
  },
{
    name: { fr: "AGRI-BOT", en: "AGRI-BOT" },
    tags: ["Django", "Celery", "Groq", "Gemini", "WhatsApp API"],
    color: "#1a3a1a",
    accent: "#84cc16",
    badge: { type: "silver", fr: "🥈 2ème Place Hackathon", en: "🥈 2nd Place Hackathon" },
    desc: {
      fr: "Assistant agricole intelligent sur WhatsApp pour les agriculteurs ivoiriens : texte, voix, photo et alertes météo, sans application à installer. Diagnostic de maladies par photo (Gemini Vision), réponses vocales pour les agriculteurs ne sachant pas lire, mémoire de conversation, et alertes météo proactives. Architecture Django + Celery + Redis avec Groq (Llama 3.3 70B) pour le texte et Gemini 2.5 Flash pour le multimodal. 2ème place au hackathon, projet retenu pour incubation, testé en conditions réelles avec retour d'agronome.",
      en: "Smart agricultural assistant on WhatsApp for Ivorian farmers: text, voice, photo and weather alerts, no app install needed. Photo-based disease diagnosis (Gemini Vision), voice replies for farmers who can't read, conversation memory, and proactive weather alerts. Django + Celery + Redis architecture with Groq (Llama 3.3 70B) for text and Gemini 2.5 Flash for multimodal input. 2nd place at a hackathon, selected for incubation, tested in real conditions with agronomist feedback."
    },
    link: "https://wa.me/22505769807?text=Bonjour%2C%20je%20teste%20AGRI-BOT%20%F0%9F%8C%B1"
  },
{
    name: { fr: "OpportuniCI", en: "OpportuniCI" },
    tags: ["Django", "PostgreSQL", "Claude API", "HTMX", "Tailwind"],
    color: "#1a2a1a",
    accent: "#4ade80",
    img: "https://lh3.googleusercontent.com/d/1YjRAFd7P3bo8cx8vKBjOBSplHQ70R_yh",
    badge: { type: "live", fr: "🟢 En ligne", en: "🟢 Live" },
    desc: {
      fr: "Assistant carrière IA pour les jeunes africains (18-30 ans), lancé en Côte d'Ivoire. Transforme un CV en plan de carrière concret : score d'employabilité, matching d'opportunités explicable par IA (Claude API), et analyseur d'écarts de compétences avec feuille de route 30/60/90 jours. Backend Django + HTMX, déployé sur Render.",
      en: "AI-powered career assistant for African youth (18-30), launched in Côte d'Ivoire. Turns a CV into a concrete career plan: employability score, explainable AI opportunity matching (Claude API), and career gap analyzer with a 30/60/90-day roadmap. Django + HTMX backend, deployed on Render."
    },
    link: "https://opportunici.onrender.com"
  },

  {
    name: { fr: "Détection d'Intrusion Réseau", en: "Network Intrusion Detection" },
    tags: ["Python", "LightGBM", "Scikit-learn", "Pandas"],
    color: "#1a3a2a",
    accent: "#4ade80",
    img: "https://lh3.googleusercontent.com/d/14k7jupORydKR5Ga6M38s_8A6p6nOuKSU",
    badge: { type: "gold", fr: "🥇 1ère Place", en: "🥇 1st Place" },
    desc: {
      fr: "Compétition ML sur Sekcoder : classification de flux réseau en 10 catégories (trafic normal ou famille d'attaque) sur le dataset UNSW-NB15 (180 371 flux, 42 features). Pipeline complet : feature engineering avancé, oversampling ciblé des classes minoritaires, LightGBM avec optimisation de seuils. Macro F1 = 0.6486 1ère place publique.",
      en: "ML competition on Sekcoder: multi-class network traffic classification into 10 categories (normal or attack family) on the UNSW-NB15 dataset (180,371 flows, 42 features). Full pipeline: advanced feature engineering, targeted minority class oversampling, LightGBM with threshold optimization. Macro F1 = 0.6486 1st place on the public leaderboard."
    },
    link: "https://github.com/DjafarouAbdou909/network-intrusion-detection"
  },
  {
    name: { fr: "ProfilHub CV QR Code", en: "ProfilHub QR Code CV" },
    tags: ["Django", "PostgreSQL", "PythonAnywhere", "HTML/CSS"],
    color: "#1a2a3a",
    accent: "#60a5fa",
    img: "https://lh3.googleusercontent.com/d/1X-zx9CIKxTNwCxm8o0palICKf4-K_gj_",
    badge: { type: "live", fr: "🟢 En ligne", en: "🟢 Live" },
    desc: {
      fr: "Application web complète permettant de créer et partager un CV numérique via QR code. Déployée sur PythonAnywhere avec 85 utilisateurs actifs. Backend Django + PostgreSQL, génération dynamique de QR codes, interface intuitive pour éditer son profil professionnel.",
      en: "Full-stack web application to create and share a digital CV via QR code. Deployed on PythonAnywhere with 85 active users. Django + PostgreSQL backend, dynamic QR code generation, intuitive UI to edit one's professional profile."
    },
    link: "https://cvqrcodec1.pythonanywhere.com/"
  },
  {
    name: { fr: "Vulnérabilité Marché du Travail CI", en: "Youth Labour Market Côte d'Ivoire" },
    tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    color: "#1a3a3a",
    accent: "#2dd4bf",
    img: "https://lh3.googleusercontent.com/d/1X609pOnrsExlblo9LSRmBkNs537hXAed",
    badge: { type: "finalist", fr: "🏅 Finaliste", en: "🏅 Finalist" },
    desc: {
      fr: "Hackathon World Data Lab. Analyse de la vulnérabilité des jeunes (15–35 ans) sur le marché du travail ivoirien via données OIT 2015-2025. EDA complète, identification de 3 insights clés (paradoxe de l'éducation, écart de genre, piège de l'informalité), modélisation de 3 scénarios politiques à horizon 2035. Finaliste.",
      en: "World Data Lab Hackathon. Analysis of youth (15–35 years) labour market vulnerability in Côte d'Ivoire using ILO data 2015-2025. Full EDA, identification of 3 key insights (education paradox, gender gap, informality trap), modelling 3 policy scenarios to 2035. Finalist."
    },
    link: "https://github.com/DjafarouAbdou909/hackathon-wdl-cote-divoire"
  },
  {
    name: { fr: "Prédiction Performance Académique", en: "Student Performance Prediction" },
    tags: ["Python", "Scikit-learn", "Statsmodels", "Seaborn"],
    color: "#3a2a1a",
    accent: "#f59e0b",
    img: "https://lh3.googleusercontent.com/d/1jBRALknlAArOvU7oPujP02B0mTQinqNz",
    desc: {
      fr: "Modèle de régression linéaire pour prédire le score final d'un étudiant à partir de ses heures d'étude hebdomadaires. L'analyse de corrélation (Pearson r = 0.81) a justifié de simplifier le modèle à une seule variable. Entraîné sur un split 70/30, il atteint une MAE ≈ 7.16 points très performant pour une régression simple.",
      en: "Linear regression model to predict a student's final score from weekly study hours. Correlation analysis (Pearson r = 0.81) justified simplifying to a single-variable model. Trained on a 70/30 split, it reaches MAE ≈ 7.16 strong for a simple regression."
    },
    link: "https://github.com/DjafarouAbdou909/Student_Performance"
  },
  {
    name: { fr: "Analyse Churn Télécom", en: "Telecom Churn Analysis" },
    tags: ["Python", "Pandas", "SciPy", "Seaborn"],
    color: "#3a1a1a",
    accent: "#f87171",
    img: "https://lh3.googleusercontent.com/d/1CNAf99Oqgbu1FPADWtq7o99rX2OydF2z",
    desc: {
      fr: "Analyse exploratoire du dataset Telco Customer Churn pour comprendre pourquoi les clients quittent la plateforme. Tests du chi-carré pour valider les associations statistiques, segmentation des profils à risque, et analyse de l'impact des facteurs contractuels et financiers. 3 facteurs clés identifiés pour améliorer la rétention.",
      en: "Exploratory analysis of the Telco Customer Churn dataset to understand why customers leave. Chi-square tests to validate statistical associations, at-risk profile segmentation, and analysis of contractual and financial factor impact. 3 key churn drivers identified to guide retention strategies."
    },
    link: "https://github.com/DjafarouAbdou909/FUTURE_DS_02"
  },
  {
    name: { fr: "Entonnoir E-commerce", en: "E-commerce Conversion Funnel" },
    tags: ["Python", "Pandas", "Matplotlib", "Missingno"],
    color: "#2a3a1a",
    accent: "#86efac",
    img: "https://lh3.googleusercontent.com/d/1F9WXJdS3pb_k7Ilt09fHhXQ5Sbkk1dAL",
    desc: {
      fr: "Analyse du parcours utilisateur sur une plateforme e-commerce pour identifier les points de friction. Résultat clé : seulement 2.2% des vues aboutissent au panier, mais 77.8% des paniers se convertissent en achat. La friction est au début du tunnel. Segmentation en 3 profils utilisateurs : visiteur, intéressé, acheteur.",
      en: "Analysis of the user journey on an e-commerce platform to identify friction points. Key result: only 2.2% of views lead to cart, but 77.8% of carts convert to purchase. Friction is at the top of the funnel. Users segmented into 3 profiles: visitor, interested, buyer."
    },
    link: "https://github.com/DjafarouAbdou909/FUTURE_DS_03"
  },
  {
    name: { fr: "Analyse Ventes en Ligne", en: "Online Retail Sales Analysis" },
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    color: "#2a1a3a",
    accent: "#a78bfa",
    img: "https://lh3.googleusercontent.com/d/1LdMSvNSU_C4HzXTd884Or80YqABdnxoz",
    desc: {
      fr: "Analyse transactionnelle d'un dataset retail en ligne (colonnes : InvoiceNo, StockCode, CustomerID, Country). Identification des 20 produits générant le plus de revenus, distribution géographique du CA, analyse des tendances temporelles (saisonnalité mensuelle et hebdomadaire), et recommandations business actionables.",
      en: "Transactional analysis of an online retail dataset (InvoiceNo, StockCode, CustomerID, Country). Identification of the top 20 revenue-generating products, geographic revenue distribution, time-series trend analysis (monthly and weekly seasonality), and actionable business recommendations."
    },
    link: "https://github.com/DjafarouAbdou909/FUTURE_DS_01"
  },
  {
    name: { fr: "Mode de Vie & GPA Étudiant", en: "Student Lifestyle & GPA Analysis" },
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    color: "#1a2a2a",
    accent: "#67e8f9",
    img: "https://lh3.googleusercontent.com/d/1eg5JH2cJlDW3-lpGzu6HDt-X6pR5293L",
    desc: {
      fr: "EDA sur 2 000 étudiants pour étudier l'impact de la répartition du temps (étude, sommeil, activités physiques/sociales) sur le GPA et le niveau de stress. Validation de la contrainte d'intégrité temporelle (somme = 24h), GPA moyen observé de 3.12, et création d'une variable catégorielle de groupes d'heures d'étude.",
      en: "EDA on 2,000 students to study how time allocation (study, sleep, physical/social activities) impacts GPA and stress level. Temporal integrity validation (daily total = 24h), observed mean GPA of 3.12, and feature engineering of study hours group categories."
    },
    link: "https://github.com/DjafarouAbdou909/Student_Lifestyle_Project"
  },
  {
    name: { fr: "Prédiction Prix Immobiliers", en: "House Prices Prediction" },
    tags: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    color: "#3a1a2a",
    accent: "#f472b6",
    img: "https://lh3.googleusercontent.com/d/1ifsAnKFtYeBOIujJ4FUq8PI3SqrDYjG0",
    desc: {
      fr: "Régression sur le dataset Kaggle House Prices : EDA approfondie pour identifier les variables influençant le prix de vente (surface, quartier, année de construction), nettoyage des données, feature engineering, et modélisation prédictive. Préparé pour les assessments techniques du Orange Digital Center.",
      en: "Regression on the Kaggle House Prices dataset: in-depth EDA to identify sale price drivers (area, neighbourhood, year built), data cleaning, feature engineering, and predictive modelling. Prepared for Orange Digital Center technical assessments."
    },
    link: "https://github.com/DjafarouAbdou909/data-analysis-portfolio/tree/main/house-prices-regression"
  },
  {
    name: { fr: "Survie sur le Titanic", en: "Titanic Survival Classification" },
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    color: "#1a1a3a",
    accent: "#818cf8",
    img: "https://drive.google.com/thumbnail?id=1cGZ9vRABJyqac5YVLBo5ArWyMZRvACFU&sz=w1000",
    desc: {
      fr: "Classification binaire (survivant / non-survivant) sur le dataset Titanic de Kaggle. EDA complète pour analyser l'impact du genre, de la classe et de l'âge sur la survie, feature engineering, et entraînement d'un modèle de classification. Partie du portfolio end-to-end Orange Digital Center.",
      en: "Binary classification (survived / not survived) on the Kaggle Titanic dataset. Full EDA to analyse the impact of gender, class, and age on survival, feature engineering, and classification model training. Part of the Orange Digital Center end-to-end portfolio."
    },
    link: "https://github.com/DjafarouAbdou909/data-analysis-portfolio/tree/main/titanic-survival-classification"
  },
  {
    name: { fr: "Plateforme Campus Présence & Annonces", en: "Campus Platform Attendance & Announcements" },
    tags: ["HTML", "CSS", "JavaScript", "Django"],
    color: "#2a1a1a",
    accent: "#fb923c",
    img: "https://drive.google.com/thumbnail?id=1USHu7Pt3kiiEpXt21rf6oV7Rq12JuSR2&sz=w1000",
    badge: { type: "silver", fr: "🥈 2ème Place Hackathon", en: "🥈 2nd Place Hackathon" },
    desc: {
      fr: "Application web développée en équipe lors d'un hackathon, terminée 2ème place. Plateforme de gestion de présence et d'annonces pour un campus universitaire : suivi des étudiants, diffusion d'annonces, interface administrateur. Entièrement réalisée en HTML, CSS et JavaScript vanilla.",
      en: "Web application built as a team during a hackathon, finishing in 2nd place. Campus management platform for student attendance tracking and announcements: student monitoring, announcement broadcasting, admin interface. Built entirely with vanilla HTML, CSS and JavaScript."
    },
    link: "https://github.com/studentcomputerscience05-web/gp3code"
  }
];
