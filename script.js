const projectsData = {
  'wsi': {
    title: 'Weakly Supervised WSI Classification',
    description: "• Design of a weakly supervised classification pipeline for Whole Slide Images (WSI) into healthy vs. tumoral, without patch-level annotations.\n\n" +
                 "• Patch encoding using DINOv2 (ViT) and random directional path generation (random walk with backtracking) to build 1D sequences suitable for NLP models.\n\n" +
                 "• Path classification via DistillBERT with a learnable CLS token, followed by WSI-level aggregation using soft voting and optimal threshold grid search.\n\n" +
                 "• Progressive visualization of classification decisions on WSIs with lesion annotation overlay.\n\n" +
                 "Note: Developed as part of a research project. Code and confidential details cannot be publicly shared.",
    tags: ['Research Project', 'Computer Vision', 'WSI', 'DINOv2 (ViT)', 'DistillBERT', 'Weakly Supervised'],
    github: null // Pas de lien GitHub
  },
  'shazam': {
    title: 'Shazam Clone',
    description: "• Design of a music identification pipeline from short audio clips (audio files or mic recordings).\n\n" +
                 "• Implementation of a hybrid data architecture: ChromaDB for persistent embedding storage, FAISS for fast vector search (cosine similarity), SQLite for spectral fingerprints, and Parquet for enriched metadata (Deezer, MusicBrainz).\n\n" +
                 "• Development of a two-stage identification pipeline: (1) 5-second windowing, embedding extraction (MFCC, CLAP, MERT, MuQ), and nearest-neighbor search in FAISS; (2) reranking via Shazam fingerprinting (spectral constellation, peak pair hashing, time alignment via offset histogram).\n\n" +
                 "• Implementation of Room Impulse Response (RIR) augmentation to improve robustness against mic recordings, with synthetic generation of 10 acoustic environments or real RIR loading (MIT).",
    tags: ['Audio Processing', 'Python', 'FAISS', 'ChromaDB', 'Signal Processing', 'RIR Augmentation'],
    github: 'https://github.com/Mmajora53/Shazam'
  },
  'ir-engine': {
    title: 'Information Retrieval Engine',
    description: "• Design of a complete search engine ranking 216,041 technical documents across five Stack Exchange communities (Android, Gaming, Programmers, TeX, Unix) for 141 natural language queries, developed for a Kaggle competition in M1 Data Science.\n\n" +
                 "• Implementation of a two-phase hybrid search pipeline: (1) sparse retrieval via BM25+ with a tokenizer tailored to technical terms (C++, C#, .net, etc.); (2) dense retrieval via SentenceTransformers (all-MiniLM-L12-v2, 384D vectors) with SHA-256 caching; signal fusion via Reciprocal Rank Fusion (RRF) with optimized weighting.\n\n" +
                 "• Development of a supervised classification module (TF-IDF + LinearSVC) to predict query categories with categorical vocabulary query expansion and Pseudo-Relevance Feedback (PRF) from the top 3 BM25 documents.\n\n" +
                 "• Implementation of two reranking strategies: hard_filter (boosting documents from the predicted category) and soft_boost (probabilistic score readjustment).\n\n" +
                 "• Rigorous evaluation on precision, recall, and MRR, tracking latency and query classification accuracy.",
    tags: ['NLP', 'Python', 'BM25+', 'SentenceTransformers', 'RRF', 'LinearSVC', 'Kaggle'],
    github: 'https://github.com/Mmajora53/Information-Retrieval-Engine'
  },
  'pieces': {
    title: 'Coin Recognition',
    description: "• Design of a detection, identification, and counting pipeline for Euro coins under complex conditions: non-homogeneous backgrounds, variable lighting, camera angles, contact, and overlapping coins.\n\n" +
                 "• Implementation of a dual detection approach combining: (1) Hough Circle Transform for fast and robust circle detection; (2) Watershed segmentation (Otsu binarization, morphology) to split contacting or overlapping coins. Fusion of both methods with duplicate removal based on distance and radius.\n\n" +
                 "• Development of a classification module using HSV color space analysis: 4-type classification based on dedicated rules.\n\n" +
                 "• Tailored preprocessing: HSV conversion, CLAHE on the V channel, Gaussian blur, brightness normalization, and core/ring masking.\n\n" +
                 "• Quantitative evaluation on 106 images using metrics (MAE, RMSE, MAPE).\n\n" +
                 "• Parameter optimization via grid search on the Hough Transform.",
    tags: ['Computer Vision', 'OpenCV', 'Python', 'Hough Transform', 'Watershed', 'HSV Analysis'],
    github: 'https://github.com/Mmajora53/Reconnaissance-Pieces'
  },
  'rf-m1': {
    title: 'Pattern Recognition Project',
    description: "• Comparative study of five shape descriptors (E34, GFD, SA, F0, F2) on a dataset of 99 binary shapes across 9 classes (animals, airplanes, etc.), under complex conditions (occlusions, distortions, intra-class heterogeneity).\n\n" +
                 "• Implementation and evaluation of three classification approaches: (1) k-nearest neighbors (k-NN) - supervised, with best k search via split validation (60/20/20) and comparison of Euclidean vs. Manhattan distances; (2) k-means - unsupervised, with cluster mapping via majority voting to assign true classes; (3) majority voting - ensemble of 5 independent k-NN classifiers, one per descriptor, with final decision by vote.\n\n" +
                 "• Complete evaluation framework: confusion matrices, recognition rate, precision, recall, F1-score, and Precision-Recall curves with AUC, applied to both supervised and unsupervised approaches.",
    tags: ['Machine Learning', 'Shape Descriptors', 'k-NN', 'k-means', 'Ensemble Learning', 'Python'],
    github: 'https://github.com/Mmajora53/ProjetM1_RF'
  }
};

function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  document.getElementById('modal-title').innerText = project.title;
  document.getElementById('modal-description').innerText = project.description;

  const githubBtn = document.getElementById('modal-github');
  if (project.github) {
    githubBtn.href = project.github;
    githubBtn.style.display = 'inline-flex';
  } else {
    githubBtn.style.display = 'none'; // Cache le bouton si pas de lien GitHub
  }

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.innerText = tag;
    tagsContainer.appendChild(span);
  });

  const modal = document.getElementById('project-modal');
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    closeModal();
  }
};

window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    closeModal();
  }
};