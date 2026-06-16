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
  role: "Data Scientist / ML Engineer",
  valueProposition:
    "I build computer vision systems and data infrastructure that work outside the notebook. First-author IEEE publication on vehicle detection, Vice Head of a 54-person research lab, and hands-on experience shipping AI to production—from RAG pipelines to internal tools used by real teams.",
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
      doi: "#",
      ieee: "#",
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
