export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  content: string;
  results: {
    metric: string;
    value: string;
  }[];
  link?: string;
  company?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  stats?: Array<{ metric: string; value: string; description: string }>;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Tech Startup Scales Engineering Team 5x",
    description: "Helped a Berlin-based fintech startup build their engineering team from 10 to 50 developers in 6 months through targeted LinkedIn and Meta campaigns.",
    image: "/api/placeholder/600/400",
    category: "Tech Recruitment",
    tags: ["LinkedIn Recruiting", "Tech Talent", "Scale-up"],
    content: "Detailed case study content about scaling engineering team...",
    results: [
      { metric: "Hires Made", value: "40+" },
      { metric: "Time-to-Hire", value: "-65%" },
      { metric: "Cost Savings", value: "€120K" }
    ]
  },
  {
    id: 2,
    title: "Hospitality Chain Finds 100+ Staff via TikTok",
    description: "Innovative TikTok recruitment campaign for a hotel chain that filled 100+ positions across Germany in 3 months.",
    image: "/api/placeholder/600/400",
    category: "Hospitality Recruiting",
    tags: ["TikTok Recruiting", "Hospitality", "Gen Z"],
    content: "Detailed case study content about TikTok recruitment success...",
    results: [
      { metric: "Positions Filled", value: "100+" },
      { metric: "Application Rate", value: "+280%" },
      { metric: "Quality Hires", value: "92%" }
    ]
  },
  {
    id: 3,
    title: "Consulting Firm Builds Sales Team Through LinkedIn",
    description: "Strategic LinkedIn recruiting campaign for a Munich consulting firm that built a high-performing sales team of 15 professionals.",
    image: "/api/placeholder/600/400",
    category: "Sales Recruitment",
    tags: ["LinkedIn", "Sales Talent", "B2B"],
    content: "Detailed case study content about sales team recruitment...",
    results: [
      { metric: "Sales Hires", value: "15" },
      { metric: "Time-to-Hire", value: "14 days" },
      { metric: "Retention Rate", value: "95%" }
    ]
  }
];


