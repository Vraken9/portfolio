export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  group:
    | "google"
    | "ibm-hacktiv8"
    | "web3"
    | "bkpm"
    | "aws"
    | "asean"
    | "cisco"
    | "systech"
    | "dicoding"
    | "digitalent"
    | "umnu"
    | "bisa-ai"
    | "dunia-coding";
  groupLabel: string;
  image: string;
  documentUrl: string;
  skills: string[];
}

export const CERTIFICATE_GROUPS = [
  { key: "all", label: "All Credentials" },
  { key: "google", label: "Google" },
  { key: "ibm-hacktiv8", label: "IBM & Hacktiv8" },
  { key: "web3", label: "Web3 Hackathon" },
  { key: "bkpm", label: "BKPM UI/UX" },
  { key: "aws", label: "AWS" },
  { key: "asean", label: "ASEAN AHEAD" },
  { key: "cisco", label: "Cisco" },
  { key: "systech", label: "Systech" },
  { key: "dicoding", label: "Dicoding" },
  { key: "digitalent", label: "Digitalent Kominfo" },
  { key: "umnu", label: "UMNU Kebumen" },
  { key: "bisa-ai", label: "Bisa AI" },
  { key: "dunia-coding", label: "Dunia Coding" },
] as const;

export const CERTIFICATES_DATA: CertificateItem[] = [
  // 1. GOOGLE
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "Artificial Intelligence",
    group: "google",
    groupLabel: "Google",
    image: "/sertifikat-pelatihan/thumbnails/Google AI Essentials.png",
    documentUrl: "/sertifikat-pelatihan/Google AI Essentials.pdf",
    skills: ["Generative AI", "Prompt Engineering", "AI Productivity Tools"],
  },
  {
    id: "google-cybersecurity",
    title: "Google Cybersecurity Specialization",
    issuer: "Google",
    category: "Cybersecurity",
    group: "google",
    groupLabel: "Google",
    image: "/sertifikat-pelatihan/thumbnails/Google Cybersecurity.png",
    documentUrl: "/sertifikat-pelatihan/Google Cybersecurity.pdf",
    skills: ["Network Security", "Threat Detection", "SIEM Tools", "Linux"],
  },
  {
    id: "google-extended-2026",
    title: "Google Developer Extended 2026",
    issuer: "Google Developers",
    category: "Software Engineering",
    group: "google",
    groupLabel: "Google",
    image: "/sertifikat-pelatihan/thumbnails/Google Extended.png",
    documentUrl: "/sertifikat-pelatihan/Google Extended.pdf",
    skills: ["Cloud Native", "Modern Web Architecture", "Ecosystem Innovation"],
  },
  {
    id: "google-extended-chapter-2",
    title: "Google Developer Extended Chapter 2",
    issuer: "Google Developers",
    category: "Developer Ecosystem",
    group: "google",
    groupLabel: "Google",
    image: "/sertifikat-pelatihan/thumbnails/Google extended2.png",
    documentUrl: "/sertifikat-pelatihan/Google extended2.pdf",
    skills: ["AI Integration", "Android Ecosystem", "Fullstack Systems"],
  },
  {
    id: "google-juara-vibecoding",
    title: "Google Juara Android & VibeCoding",
    issuer: "Google Developers",
    category: "Mobile & AI",
    group: "google",
    groupLabel: "Google",
    image: "/sertifikat-pelatihan/thumbnails/Google JuaraVibeCoding.png",
    documentUrl: "/sertifikat-pelatihan/Google JuaraVibeCoding.pdf",
    skills: ["Kotlin Android", "App Architecture", "Vibe Coding Experience"],
  },

  // 2. IBM & HACKTIV8
  {
    id: "ibm-hacktiv8-ai-agent",
    title: "IBM & Hacktiv8: AI Agent for Programming",
    issuer: "IBM x Hacktiv8",
    category: "Autonomous AI Agents",
    group: "ibm-hacktiv8",
    groupLabel: "IBM & Hacktiv8",
    image:
      "/sertifikat-pelatihan/thumbnails/IBM Hacktiv8 AI Agent for Programming Certificate.png",
    documentUrl:
      "/sertifikat-pelatihan/IBM Hacktiv8 AI Agent for Programming Certificate.pdf",
    skills: ["AI Agent Development", "Autonomous Workflows", "LLM Orchestration"],
  },
  {
    id: "hacktiv8-ai-productivity",
    title: "Hacktiv8: AI Productivity & API Integration",
    issuer: "Hacktiv8",
    category: "API & Automation",
    group: "ibm-hacktiv8",
    groupLabel: "IBM & Hacktiv8",
    image:
      "/sertifikat-pelatihan/thumbnails/Hacktiv8 AI Productivity and API Intergration for Developer.png",
    documentUrl:
      "/sertifikat-pelatihan/Hacktiv8 AI Productivity and API Intergration for Developer.pdf",
    skills: ["RESTful APIs", "SDK Automation", "Developer Toolchains"],
  },

  // 3. INDONESIA WEB 3 HACKATHON
  {
    id: "indonesia-web3-hackathon",
    title: "Indonesia Web3 Hackathon 2026",
    issuer: "Web3 Indonesia",
    category: "Decentralized Tech",
    group: "web3",
    groupLabel: "Web3 Hackathon",
    image: "/sertifikat-pelatihan/thumbnails/Indonesia WEB3 Hackathon.png",
    documentUrl: "/sertifikat-pelatihan/Indonesia WEB3 Hackathon.pdf",
    skills: ["Blockchain Architecture", "Smart Contracts", "DApp Prototyping"],
  },

  // 4. BKPM UIUX
  {
    id: "bkpm-uiux-masterclass",
    title: "BKPM: UI/UX Product Design Masterclass",
    issuer: "Kementerian Investasi / BKPM RI",
    category: "UI/UX & Product Design",
    group: "bkpm",
    groupLabel: "BKPM UI/UX",
    image: "/sertifikat-pelatihan/thumbnails/BKPM UIUX.png",
    documentUrl: "/sertifikat-pelatihan/BKPM UIUX.pdf",
    skills: ["Design Systems", "Figma Prototyping", "User Journey & Usability"],
  },

  // 5. AWS
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Architecture",
    group: "aws",
    groupLabel: "AWS",
    image: "/sertifikat-pelatihan/thumbnails/AWS Cloud Foundation.png",
    documentUrl: "/sertifikat-pelatihan/AWS Cloud Foundation.pdf",
    skills: ["EC2 & S3", "IAM Security", "VPC Networking", "Serverless Lambda"],
  },

  // 6. ASEAN AHEAD
  {
    id: "asean-ahead-ai-career",
    title: "ASEAN AHEAD: AI Career Accelerator",
    issuer: "ASEAN Foundation",
    category: "Artificial Intelligence",
    group: "asean",
    groupLabel: "ASEAN AHEAD",
    image: "/sertifikat-pelatihan/thumbnails/ASEAN Ahead AI Carer.png",
    documentUrl: "/sertifikat-pelatihan/ASEAN Ahead AI Carer.png",
    skills: ["Applied AI", "Cross-Border Tech", "Tech Strategy & Ethics"],
  },

  // 7. CISCO
  {
    id: "cisco-intro-cybersec",
    title: "Cisco: Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "Network Defense",
    group: "cisco",
    groupLabel: "Cisco",
    image: "/sertifikat-pelatihan/thumbnails/Cisco Introduction CyberSec.png",
    documentUrl: "/sertifikat-pelatihan/Cisco Introduction CyberSec.pdf",
    skills: ["Firewall Fundamentals", "Data Confidentiality", "Malware Analysis"],
  },
  {
    id: "cisco-intro-data-science",
    title: "Cisco: Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    category: "Data Science",
    group: "cisco",
    groupLabel: "Cisco",
    image: "/sertifikat-pelatihan/thumbnails/Cisco Introduction Data Science.png",
    documentUrl: "/sertifikat-pelatihan/Cisco Introduction Data Science.pdf",
    skills: ["Data Pipelines", "Statistical Analysis", "Data Visualization"],
  },
  {
    id: "cisco-modern-ai",
    title: "Cisco: Modern AI Technologies",
    issuer: "Cisco Networking Academy",
    category: "Modern AI Systems",
    group: "cisco",
    groupLabel: "Cisco",
    image: "/sertifikat-pelatihan/thumbnails/Cisco Modern AI.png",
    documentUrl: "/sertifikat-pelatihan/Cisco Modern AI.pdf",
    skills: ["Neural Networks", "Computer Vision Basics", "AI Ethics & Standards"],
  },

  // 8. SYSTECH
  {
    id: "systech-security",
    title: "Systech: Cyber Defense & Security",
    issuer: "Systech",
    category: "Systems Security",
    group: "systech",
    groupLabel: "Systech",
    image: "/sertifikat-pelatihan/thumbnails/Systech Sec.png",
    documentUrl: "/sertifikat-pelatihan/Systech Sec.pdf",
    skills: ["System Hardening", "Penetration Basics", "Incident Response"],
  },

  // 9. DICODING
  {
    id: "dicoding-gen-ai-aws",
    title: "Dicoding: Generative AI on AWS",
    issuer: "Dicoding Academy x AWS",
    category: "Generative AI",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding Gen AI AWS.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding Gen AI AWS.pdf",
    skills: ["Amazon Bedrock", "Foundation Models", "RAG Systems on AWS"],
  },
  {
    id: "dicoding-spec-driven-aws",
    title: "Dicoding: Spec-Driven Development AWS",
    issuer: "Dicoding Academy x AWS",
    category: "Cloud Engineering",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding Spec-Driven AWS.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding Spec-Driven AWS.pdf",
    skills: ["Cloud Architecture Specs", "Infrastructure Verification", "AWS CLI"],
  },
  {
    id: "dicoding-gen-ai",
    title: "Dicoding: Belajar Generative AI",
    issuer: "Dicoding Academy",
    category: "Generative AI",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding Gen AI.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding Gen AI.pdf",
    skills: ["LLM Fundamentals", "Prompt Tuning", "Diffusion Models"],
  },
  {
    id: "dicoding-ml-beginner",
    title: "Dicoding: Machine Learning for Beginners",
    issuer: "Dicoding Academy",
    category: "Machine Learning",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding ML for Beginer.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding ML for Beginer.pdf",
    skills: ["Scikit-learn", "Supervised Learning", "Model Evaluation"],
  },
  {
    id: "dicoding-python",
    title: "Dicoding: Memulai Pemrograman Python",
    issuer: "Dicoding Academy",
    category: "Programming",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding Python.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding Python.pdf",
    skills: ["Python OOP", "Data Structures", "Algorithms & Standard Library"],
  },
  {
    id: "dicoding-data-science",
    title: "Dicoding: Dasar Data Science",
    issuer: "Dicoding Academy",
    category: "Data Analytics",
    group: "dicoding",
    groupLabel: "Dicoding",
    image: "/sertifikat-pelatihan/thumbnails/Dicoding Data Science.png",
    documentUrl: "/sertifikat-pelatihan/Dicoding Data Science.pdf",
    skills: ["Pandas & NumPy", "Exploratory Data Analysis", "Data Cleaning"],
  },
  {
    id: "dicoding-microsoft-elevate",
    title: "Dicoding: Microsoft Elevate Training Center",
    issuer: "Dicoding x Microsoft",
    category: "Enterprise Tech",
    group: "dicoding",
    groupLabel: "Dicoding",
    image:
      "/sertifikat-pelatihan/thumbnails/Dicoding Microsoft Elevate Training Center.png",
    documentUrl:
      "/sertifikat-pelatihan/Dicoding Microsoft Elevate Training Center.pdf",
    skills: ["Azure Basics", "Cloud Security", "Enterprise Modern Work"],
  },

  // 10. DIGITALENT KOMINFO
  {
    id: "digitalent-dex-aws",
    title: "Digitalent: Cloud Essentials CA - DEX - AWS (Nasional)",
    issuer: "Kominfo RI x AWS",
    category: "Cloud Essentials",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Cloud Essentials CA - DEX - AWS - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Cloud Essentials CA - DEX - AWS - Nasional.pdf",
    skills: ["AWS Cloud Practitioner", "Global Infrastructure", "Security & Compliance"],
  },
  {
    id: "digitalent-cybersecurity-google",
    title: "Digitalent: Cybersecurity Certification - Google",
    issuer: "Kominfo RI x Google",
    category: "Cybersecurity",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Final Courses and Certificate Cybersecurity - Google.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Final Courses and Certificate Cybersecurity - Google.pdf",
    skills: ["Incident Handling", "Security Controls", "Threat Mitigation"],
  },
  {
    id: "digitalent-cyber-ai-google",
    title: "Digitalent: CyberSec + AI Essentials - Google (Nasional)",
    issuer: "Kominfo RI x Google",
    category: "AI & Cyber Security",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Intermediate Cybersecurity + AI Essentials - Google - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Intermediate Cybersecurity + AI Essentials - Google - Nasional.pdf",
    skills: ["AI-Powered Threat Detection", "Defensive Automation", "Applied Security"],
  },
  {
    id: "digitalent-intermediate-web-dev",
    title: "Digitalent: Intermediate Web Developer (Nasional)",
    issuer: "Kominfo RI",
    category: "Web Development",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Intermediate Assistant Web Developer - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Intermediate Assistant Web Developer - Nasional.pdf",
    skills: ["Fullstack Web Architecture", "Database Design", "Production Deployment"],
  },
  {
    id: "digitalent-intermediate-network-admin",
    title: "Digitalent: Associate Network Administrator (Nasional)",
    issuer: "Kominfo RI",
    category: "Network Administration",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Intermediate Associate Network Administrator - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Intermediate Associate Network Administrator - Nasional.pdf",
    skills: ["Routing & Switching", "Subnetting & VLAN", "Network Troubleshooting"],
  },
  {
    id: "digitalent-fundamental-network-admin",
    title: "Digitalent: Fundamental Associate Network Administrator",
    issuer: "Kominfo RI",
    category: "Network Infrastructure",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Fundamental of Associate Network Administrator - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Fundamental of Associate Network Administrator - Nasional.pdf",
    skills: ["TCP/IP Protocols", "Network Topology", "Infrastructure Cabling"],
  },
  {
    id: "digitalent-huawei-cyber",
    title: "Digitalent: Huawei Cybersecurity Track",
    issuer: "Kominfo RI x Huawei",
    category: "Cyber Defense",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image: "/sertifikat-pelatihan/thumbnails/Digitalent Huawai Cyber.png",
    documentUrl: "/sertifikat-pelatihan/Digitalent Huawai Cyber.pdf",
    skills: ["Huawei HCIA Security", "Enterprise Defense", "Access Control"],
  },
  {
    id: "digitalent-programming-fundamental",
    title: "Digitalent: Programming Fundamental (Nasional)",
    issuer: "Kominfo RI",
    category: "Software Fundamentals",
    group: "digitalent",
    groupLabel: "Digitalent Kominfo",
    image:
      "/sertifikat-pelatihan/thumbnails/Digitalent Programming Fundamental - Nasional.png",
    documentUrl:
      "/sertifikat-pelatihan/Digitalent Programming Fundamental - Nasional.pdf",
    skills: ["Algorithmic Thinking", "Data Structures", "Clean Code Standards"],
  },

  // 11. UMNU KEBUMEN
  {
    id: "umnu-web-dev",
    title: "UMNU Kebumen: Web Development Certification",
    issuer: "Universitas Ma'arif Nahdlatul Ulama Kebumen",
    category: "Web Engineering",
    group: "umnu",
    groupLabel: "UMNU Kebumen",
    image: "/sertifikat-pelatihan/thumbnails/UMNU Web Dev.png",
    documentUrl: "/sertifikat-pelatihan/UMNU Web Dev.png",
    skills: ["Web Development", "Frontend & Backend", "Modern Frameworks"],
  },

  // 12. BISA AI
  {
    id: "bisa-ai-master",
    title: "Bisa AI: Artificial Intelligence & Machine Learning Track",
    issuer: "BISA AI Academy",
    category: "Artificial Intelligence",
    group: "bisa-ai",
    groupLabel: "Bisa AI",
    image: "/sertifikat-pelatihan/thumbnails/Bisa AI.png",
    documentUrl: "/sertifikat-pelatihan/Bisa AI.png",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    id: "bisa-ai-python",
    title: "Bisa AI: Python for Data Science & AI",
    issuer: "BISA AI Academy",
    category: "Programming Language",
    group: "bisa-ai",
    groupLabel: "Bisa AI",
    image: "/sertifikat-pelatihan/thumbnails/Bisa AI Python.png",
    documentUrl: "/sertifikat-pelatihan/Bisa AI Python.png",
    skills: ["Python Programming", "NumPy & Pandas", "Data Structures"],
  },
  {
    id: "bisa-ai-ml",
    title: "Bisa AI: Applied Machine Learning",
    issuer: "BISA AI Academy",
    category: "Machine Learning",
    group: "bisa-ai",
    groupLabel: "Bisa AI",
    image: "/sertifikat-pelatihan/thumbnails/Bisa AI ML.png",
    documentUrl: "/sertifikat-pelatihan/Bisa AI ML.png",
    skills: ["Model Training", "Scikit-Learn", "Predictive Analytics"],
  },
  {
    id: "bisa-ai-data-science",
    title: "Bisa AI: Data Science Fundamental & Analytics",
    issuer: "BISA AI Academy",
    category: "Data Science",
    group: "bisa-ai",
    groupLabel: "Bisa AI",
    image: "/sertifikat-pelatihan/thumbnails/Bisa AI Data Science.png",
    documentUrl: "/sertifikat-pelatihan/Bisa AI Data Science.png",
    skills: ["Data Science", "Exploratory Data Analysis", "Statistical Computing"],
  },

  // 13. DUNIA CODING
  {
    id: "dunia-coding-linux",
    title: "Dunia Coding: Linux for Cyber Security",
    issuer: "Dunia Coding",
    category: "Cybersecurity & Systems",
    group: "dunia-coding",
    groupLabel: "Dunia Coding",
    image: "/sertifikat-pelatihan/thumbnails/Dunia Coding Linux for Cyber Security.png",
    documentUrl: "/sertifikat-pelatihan/Dunia Coding Linux for Cyber Security.pdf",
    skills: ["Linux Administration", "Shell Scripting", "System Hardening"],
  },
  {
    id: "dunia-coding-kotlin-ai",
    title: "Dunia Coding: Workshop Kotlin + AI Android Development",
    issuer: "Dunia Coding",
    category: "Mobile & AI",
    group: "dunia-coding",
    groupLabel: "Dunia Coding",
    image: "/sertifikat-pelatihan/thumbnails/Dunia Coding Workshop Kotlin+AI.png",
    documentUrl: "/sertifikat-pelatihan/Dunia Coding Workshop Kotlin+AI.pdf",
    skills: ["Kotlin", "Android Studio", "AI API Integration"],
  },
];
