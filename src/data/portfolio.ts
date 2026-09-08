export const profile = {
  name: "HESHANI RANAWEERA",
  headline: "Tech-Savvy Business & IT Professional",
  subtitle:
    "Passionate about technology, business systems, process improvement and turning business needs into practical digital solutions.",
  email: "heshaninarmada1523@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/heshani-narmada-aa815b333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/heshaninarmada1523-ux",
  whatsapp: "070-3127920",
  whatsappHref: "https://wa.me/94703127920",
  location: "Colombo, Sri Lanka",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = "Business" | "Data" | "Development" | "Systems";

export const skills: { name: string; group: SkillGroup; note: string }[] = [
  { name: "SAP Business One HANA", group: "Systems", note: "ERP modules, master data & reporting" },
  { name: "Power BI", group: "Data", note: "Dashboards, DAX and data storytelling" },
  { name: "SQL / MySQL", group: "Data", note: "Queries, joins, stored procedures" },
  { name: "Python", group: "Development", note: "Automation and data handling" },
  { name: "C#", group: "Development", note: "Object-oriented desktop applications" },
  { name: "PHP", group: "Development", note: "Server-side web development" },
  { name: "HTML & CSS", group: "Development", note: "Responsive, accessible interfaces" },
  { name: "Database Management", group: "Data", note: "Design, normalisation, administration" },
  { name: "Business Analysis", group: "Business", note: "Requirements gathering & process mapping" },
  { name: "IT Project Management", group: "Business", note: "Scope, timelines and stakeholders" },
  { name: "Microsoft Office", group: "Business", note: "Advanced Excel, Word, PowerPoint" },
  { name: "Information Systems", group: "Systems", note: "Systems analysis and design" },
];

export const projects = [
  {
    title: "Statistical Problem Solving Software Project",
    description:
      "A group-based statistical problem-solving application developed to apply computational thinking concepts and automate statistical calculations and problem-solving processes.",
    tags: ["Python", "Computational Thinking", "Statistical Analysis", "Problem Solving"],
  },
  {
    title: "Event Management System",
    description:
      "A full-stack web-based event management system developed to streamline campus event creation, registration, attendee tracking, and organizer management through an integrated web platform.",
    tags: [
      "PHP & JavaScript",
      "MySQL / SQL",
      "RESTful APIs",
      "Database Design & Development",
      "Web Application Development",
    ],
  },
  {
    title: "Online Business Registration System",
    description:
      "Prepared the Software Requirements Specification (SRS) documentation for an online business registration web application, defining system requirements, user needs, functional specifications, and overall system scope.",
    tags: ["SRS Documentation", "Requirements Engineering", "Software Engineering", "Agile / Scrum"],
  },
];

export const education = [
  {
    period: "2024 – Present",
    title: "BSc (Hons) in Business Information Systems",
    org: "Faculty of Management Studies and Commerce, Department of Information Technology — University of Sri Jayewardenepura",
    detail:
      "Undergraduate student focusing on the integration of business processes, information technology, data, and digital solutions.",
  },
  {
    period: "2026 — Present",
    title: "Diploma in Public Administration and Policy Making",
    org: "The Chiththa Advanced Psychological Studies Open Institute of Sri Lanka",
    detail:
      "Currently pursuing a diploma focused on Public Administration, Governance, Policy Development, and Public-Sector Management, developing knowledge of effective administration and policy-making processes.",
  },
  {
    period: "2026 — Present",
    title: "Professional Certification — CA Sri Lanka, Business Level",
    org: "Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
    detail:
      "Currently pursuing the Business Level of the Chartered Accountancy qualification, developing knowledge in accounting, finance, taxation, business law, management, and related professional areas.",
  },
  {
    period: "Secondary Education",
    title: "Anula Vidyalaya, Nugegoda — Commerce Stream",
    org: "G.C.E. Advanced Level",
    detail:
      "Accounting – A | Business Studies – A | Economics – A. Z-Score: 1.9864 | District Rank: 189 | Island Rank: 622.",
  },
  {
    period: "Secondary Education",
    title: "Ananda Balika Vidyalaya, Colombo 10",
    org: "G.C.E. Ordinary Level",
    detail: "8 A Passes, including Mathematics and Science | 1 B Pass in English.",
  },
  {
    period: "Notable Achievements",
    title: "Sports & Literary Achievements",
    org: "School and Provincial Level",
    detail:
      "Provincial- and school-level participation in Volleyball and Athletics, and participation in Sinhala Short Story Competitions.",
  },
];

export const certificates = [
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    image: "/iot-cert.png",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "APNIC Academy",
    image: "/cyber-cert.png",
  },
  {
    title: "Agile Project Management",
    issuer: "HP LIFE",
    image: "/agile-cert.png",
  },
];

export const experience = [
  {
    period: "03 Jan 2024 – 14 Jan 2024",
    title: "Trainee Counter Cashier",
    org: "People's Bank",
    detail:
      "Completed a short-term training placement as a Trainee Counter Cashier, gaining practical exposure to banking operations, customer service, cash handling procedures, and transaction processing.",
  },
  {
    period: "May 2023 – Nov 2023",
    title: "General Clerk (Outbound Warehouse Section)",
    org: "Richard Pieris Distributors (Pvt) Ltd",
    detail:
      "Supported daily outbound warehouse operations by maintaining operational records, ensuring documentation accuracy, and assisting with inventory-related administrative activities in a high-volume environment. Maintained accurate operational logs and warehouse documentation, supported inventory record accuracy and compliance, and was recognized as Best Employee of the Month – October 2023 for attention to detail and operational efficiency.",
  },
];
