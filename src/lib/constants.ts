export const SITE = {
  title: "Rudi Firdaus",
  tagline: "ML Engineer who ships research to production.",
  description:
    "Machine Learning / AI Engineer with a research edge. IEEE first-author, production AI systems, and computer vision expertise. Based in Indonesia, targeting international opportunities.",
  url: "https://rudi-firdaus.netlify.app",
  ogImage: "/og-default.png",
  author: "Rudi Firdaus",
  locale: "en_US",
};

export const PERSONAL = {
  name: "Rudi Firdaus",
  email: "hello@rudi-firdaus.netlify.app", // placeholder — replace with real
  role: "ML / AI Engineer",
  valueProposition:
    "I bridge research and production—turning computer vision and NLP papers into working systems. First-author IEEE publication, self-hosted AI platform with 40+ testers, and national competition finalist.",
  links: {
    github: "https://github.com/rudifirdaus",
    linkedin: "https://linkedin.com/in/rudifirdaus",
    email: "mailto:hello@rudi-firdaus.netlify.app",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const FEATURED_PROJECTS = [
  {
    slug: "screenai",
    title: "ScreenAI",
    category: "NLP / Full-stack",
    summary:
      "AI-powered recruitment screening system with RAG, NER anonymization, and explainable scoring. FastAPI backend, IndoBERT, ChromaDB, Docker, self-hosted on VPS—staging with 40+ testers.",
    stack: ["FastAPI", "IndoBERT", "LangChain", "ChromaDB", "Docker", "Tailwind CSS"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "vehicle-detection",
    title: "Vehicle Detection & Classification",
    category: "Computer Vision",
    summary:
      "YOLOv11-based vehicle detection and classification system published as an IEEE paper. First-author contribution to traffic monitoring research.",
    stack: ["YOLOv11", "PyTorch", "OpenCV", "Python"],
    links: {
      github: "#",
      paper: "#",
    },
  },
  {
    slug: "thesis-traffic-flow",
    title: "Traffic Flow Estimation",
    category: "Computer Vision",
    summary:
      "Ongoing thesis extending vehicle detection to traffic flow estimation under low-visibility conditions in Yogyakarta. YOLOv11/v26 + ByteTrack + SMP flow module per PKJI standards.",
    stack: ["YOLOv11", "ByteTrack", "PyTorch", "OpenCV", "Python"],
    links: {
      github: "#",
    },
    badge: "In Progress",
  },
];

export const RESEARCH = {
  paper: {
    title: "Vehicle Detection and Classification using YOLOv11",
    venue: "IEEE Xplore",
    year: 2025,
    role: "First Author",
    abstract:
      "A deep learning approach for real-time vehicle detection and classification in traffic monitoring scenarios using YOLOv11 architecture.",
    links: {
      doi: "#",
      ieee: "#",
    },
  },
  thesis: {
    title: "Traffic Flow Estimation under Low-Visibility Conditions",
    approach:
      "Extending object detection to traffic flow estimation using multi-object tracking (ByteTrack) and speed measurement per Indonesian Highway Capacity Manual (PKJI) standards.",
    status: "In Progress",
  },
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
  mlOpsInfra: ["Docker", "FastAPI", "VPS (self-hosted)", "RAG Pipelines", "Git"],
  fullstack: ["React", "Astro", "Tailwind CSS", "Node.js"],
};

export const LEADERSHIP = {
  role: "Vice Coordinator — MBC Laboratory",
  period: "2024–2025",
  highlights: [
    "Managed research infrastructure and internal tooling for 40+ lab members.",
    "Organized company visit to IBM Indonesia.",
    "Led coordination of research projects and knowledge-sharing sessions.",
  ],
};
