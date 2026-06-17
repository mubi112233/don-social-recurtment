"use client";

import { Shield, Clock, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SPACING } from "@/lib/constants";

const valuesCopy = {
  en: {
    heading: "Why <span class=\"text-primary\">200+</span> Companies Trust Us",
    items: {
      costReduction: { title: "60% Lower Cost-Per-Hire", description: "Social recruiting cuts your cost-per-hire by up to 60% compared to traditional agencies and job boards." },
      qualityControl: { title: "Pre-Screened Candidates", description: "Every candidate is assessed for skills, culture fit, and role requirements before being presented to you." },
      replacement: { title: "Replacement Guarantee", description: "If a placed candidate doesn't work out within 90 days, we find a replacement at no extra cost." },
      confidentiality: { title: "100% Confidential", description: "All hiring processes are handled with full discretion. Your data and requirements are never shared." },
    },
  },
  ge: {
    heading: "Warum <span class=\"text-primary\">200+</span> Unternehmen uns vertrauen",
    items: {
      costReduction: { title: "60% niedrigere Kosten", description: "Social Recruiting senkt Ihre Kosten pro Einstellung um bis zu 60% im Vergleich zu traditionellen Agenturen." },
      qualityControl: { title: "Vor-screened Kandidaten", description: "Jeder Kandidat wird auf Fähigkeiten, Kulturfit und Rollenanforderungen geprüft, bevor er Ihnen präsentiert wird." },
      replacement: { title: "Ersatzgarantie", description: "Wenn ein vermittelter Kandidat innerhalb von 90 Tagen nicht passt, finden wir ohne Zusatzkosten Ersatz." },
      confidentiality: { title: "100% Vertraulich", description: "Alle Einstellungsprozesse werden diskret abgewickelt. Ihre Daten werden niemals geteilt." },
    },
  },
};

const values = [
  { icon: Shield, key: "costReduction" as const },
  { icon: Users, key: "qualityControl" as const },
  { icon: Clock, key: "replacement" as const },
  { icon: Lock, key: "confidentiality" as const },
];

export const ValueProposition = () => {
  const pathname = usePathname();
  const lang = pathname.startsWith("/ge") || pathname.startsWith("/de") ? "ge" : "en";
  const c = valuesCopy[lang];

  return (
    <motion.section
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-[hsl(250,50%,12%)] z-10"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(270,80%,65%)] to-transparent" />

      <div className={`container mx-auto ${SPACING.container}`}>
        <motion.div
          className="mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            dangerouslySetInnerHTML={{ __html: c.heading }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[hsl(270,80%,65%)]/50 transition-all duration-500 hover:-translate-y-3"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(270,80%,65%)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[hsl(270,80%,65%)]/20 text-[hsl(270,80%,85%)] group-hover:bg-[hsl(270,80%,65%)] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[hsl(270,80%,75%)] transition-colors duration-300">
                  {c.items[value.key].title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {c.items[value.key].description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

