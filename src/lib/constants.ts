export const SITE = {
  title: "Rudi Firdaus",
  tagline: "Data Scientist & ML Engineer — shipping research to production.",
  description:
    "Data Science undergraduate at Telkom University. First-author IEEE publication (ICSINTESA 2025), Vice Head of MBC Laboratory (54 assistants), and builder of production AI systems. Computer Vision, Data Engineering, MLOps.",
  url: "https://rudi-firdaus.netlify.app",
  ogImage: "/og-default.png",
  author: "Rudi Firdaus",
  locale: "en_US",
};

export const PERSONAL = {
  name: "Rudi Firdaus",
  email: "rudifirdaus233@gmail.com",
  role: "ML Engineer / Researcher",
  location: "Bandung, Indonesia",
  valueProposition:
    "I build computer vision systems and data infrastructure that work outside the notebook. First-author IEEE publication on vehicle detection, Vice Head of a 54-person research lab, and hands-on experience shipping AI to production — from RAG pipelines to internal tools real teams depend on.",
  links: {
    github: "https://github.com/istgrudd",
    linkedin: "https://linkedin.com/in/rudifirdaus",
    email: "mailto:rudifirdaus233@gmail.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const COAUTHORED_PUBLICATIONS = [
  {
    title: "Comparative Study of Enhanced Deep Learning Models for Cervical Pap Smear Cell Segmentation",
    venue: "Submitted for publication",
    year: 2026,
    role: "Co-author (4th of 6)",
    abstract:
      "A strictly fair comparative benchmark of four deep learning architectures (U-Net, U-Net++, Swin-UNet, SegNet) for cervical cell semantic segmentation on the Herlev dataset. Swin-UNet achieved the highest performance (F1: 0.8868 ± 0.0027; IoU: 0.7974 ± 0.0043), with statistical significance confirmed via one-way ANOVA and Bonferroni-corrected pairwise t-tests.",
    coauthors: [
      "Fadly Huwaiza Khalid",
      "Muhammad Daffa Izzati",
      "Akmal Yaasir Fauzaan",
      "William Eka Chandra",
      "Naufal Hanan Lutfianto",
    ],
  },
  {
    title: "Deep Learning-Based Resource Allocation for Visible Light Communication Networks",
    venue: "Submitted for publication",
    year: 2026,
    role: "Co-author (4th of 4)",
    abstract:
      "VLC-Net: A supervised deep learning framework for real-time resource allocation in multi-cell visible light communication networks employing NOMA. A feedforward DNN with Bayesian-optimized architecture achieves 388× speedup over iterative solvers and 66% improvement in Jain's fairness index.",
    coauthors: [
      "Marcelia Chintya Hartakaadi",
      "Aminah Indahsari Marsuki",
      "Intan Nisa Bani",
    ],
  },
];

export const RESEARCH = {
  paper: {
    title: "Optimizing YOLOv11 for Vehicle Detection in Low-Visibility CCTV Footage",
    venue: "ICSINTESA 2025 — 5th International Conference of Science and Information Technology in Smart Administration",
    year: 2025,
    role: "First Author",
    abstract:
      "This study optimizes YOLOv11 for vehicle detection in low-visibility environments (rain, fog, low-light) using CCTV data. Systematic evaluation of batch sizes (8, 16, 32), image resolutions (228, 448, 640), and optimizers (AdamW, SGD, Adam, etc.) identified the optimal configuration: batch size 16, resolution 640x640, AdamW optimizer. The model achieved mAP@0.5 of 0.896 and mAP@0.5-0.95 of 0.678, with real-time inference at 122 FPS (8.2 ms/img) on an NVIDIA RTX 4090 GPU.",
    coauthors: ["William Eka Chandra", "Rafi Andhika Putra Pratama", "Felix Corputty"],
    metrics: {
      mAP50: "0.896",
      mAP50_95: "0.678",
      fps: "122",
      latency: "8.2 ms/img",
      gpu: "NVIDIA RTX 4090",
    },
    links: {
      doi: "https://doi.org/10.1109/ICSINTESA68165.2025.11413760",
      ieee: "https://ieeexplore.ieee.org/document/11413760",
    },
  },
  thesis: {
    title: "Traffic Flow Estimation under Low-Visibility Conditions",
    approach:
      "Extending the IEEE paper's object detection work to traffic flow estimation using multi-object tracking (ByteTrack) and speed measurement per Indonesian Highway Capacity Manual (PKJI) standards. Focus on low-visibility robustness from CCTV footage.",
    status: "In Progress",
  },
};

export const LEADERSHIP = {
  role: "Vice Head — MBC Laboratory",
  period: "2025–2026",
  assistantCount: 54,
  highlights: [
    "Oversee 54 assistants across 4 divisions at MBC Laboratory.",
    "Led Big Data Division (16 researchers) to 6 publications with 100% project success rate; designed Agile sprint framework.",
    "Chief organizer of a month-long study group for 80+ participants with 100% completion rate.",
    "Planned and executed an industry visit to IBM Indonesia for a 40-person delegation.",
  ],
};

export const TECH_STACK = {
  languages: ["Python", "TypeScript", "SQL", "Bash"],
  mlDl: [
    "PyTorch",
    "YOLO (v8/v11)",
    "Transformers (HuggingFace)",
    "scikit-learn",
    "OpenCV",
    "LangChain",
    "ChromaDB",
  ],
  mlOpsInfra: ["Docker", "FastAPI", "VPS (self-hosted)", "RAG Pipelines", "PostgreSQL", "Supabase", "Git"],
  fullstack: ["React", "Vite", "Astro", "Tailwind CSS", "shadcn/ui"],
};
