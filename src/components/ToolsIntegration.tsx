"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SPACING } from "@/lib/constants";

const tools = [
  { name: "LinkedIn Recruiter", category: "Professional Network" },
  { name: "LinkedIn Ads", category: "Professional Network" },
  { name: "Meta Business Suite", category: "Social Media" },
  { name: "Facebook Ads", category: "Social Media" },
  { name: "Instagram Ads", category: "Social Media" },
  { name: "TikTok Ads Manager", category: "Social Media" },
  { name: "Google Ads", category: "Search & Display" },
  { name: "Applicant Tracking (ATS)", category: "HR Tech" },
  { name: "HubSpot", category: "CRM & Automation" },
  { name: "Mailchimp", category: "Email Marketing" },
  { name: "Canva", category: "Content Creation" },
  { name: "Hootsuite", category: "Social Management" },
];

const categoryLabels: Record<string, { en: string; ge: string }> = {
  "Professional Network":  { en: "Professional Network",  ge: "Berufsnetzwerk" },
  "Social Media":          { en: "Social Media",          ge: "Social Media" },
  "Search & Display":      { en: "Search & Display",     ge: "Suche & Display" },
  "HR Tech":               { en: "HR Tech",              ge: "HR-Technologie" },
  "CRM & Automation":      { en: "CRM & Automation",     ge: "CRM & Automatisierung" },
  "Email Marketing":       { en: "Email Marketing",      ge: "E-Mail-Marketing" },
  "Content Creation":      { en: "Content Creation",     ge: "Content-Erstellung" },
  "Social Management":     { en: "Social Management",    ge: "Social-Management" },
};

export const ToolsIntegration = () => {
  const pathname = usePathname();
  const isGe = pathname.startsWith("/ge") || pathname.startsWith("/de");

  const getCategory = (category: string) =>
    categoryLabels[category]?.[isGe ? "ge" : "en"] ?? category;

  return (
    <motion.section
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className={`container mx-auto ${SPACING.container}`}>
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            {isGe ? (
              <>Recruiting mit führenden <span className="text-primary">Plattformen</span></>
            ) : (
              <>Recruiting with Leading <span className="text-primary">Platforms</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
            {isGe
              ? "Wir nutzen die besten Social-Media- und professionellen Netzwerke, um Ihre idealen Kandidaten zu erreichen."
              : "We leverage the best social media and professional networks to reach your ideal candidates."}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tools grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {getCategory(tool.category)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Callout */}
          <motion.div
            className="bg-card border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
              <span className="font-bold text-primary">
                {isGe ? "Benötigen Sie eine spezielle Plattform?" : "Need a specific platform?"}
              </span>{" "}
              {isGe ? "Einfach fragen." : "Just ask."}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isGe
                ? "Wir arbeiten mit allen wichtigen Recruiting-Plattformen und passen unsere Strategie Ihren Bedürfnissen an."
                : "We work with all major recruitment platforms and tailor our strategy to your needs."}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


