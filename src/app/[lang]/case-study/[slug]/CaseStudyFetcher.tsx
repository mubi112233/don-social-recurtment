"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchCaseStudies } from "@/lib/api";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";

interface CaseStudyData {
  caseStudyId: string | number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{ metric: string; value: string; description: string }>;
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: { costSaved: string; timeframe: string; vaCount: string };
}

function findCaseStudy(studies: CaseStudyData[], slug: string): CaseStudyData | null {
  return studies.find((cs) => String(cs.caseStudyId) === slug) ?? null;
}

export default function CaseStudyFetcher({ slug, lang }: { slug: string; lang: string }) {
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const copy = getCopy(lang, "caseStudies");

  useEffect(() => {
    fetchCaseStudies(lang).then((data) => {
      const studies: CaseStudyData[] = Array.isArray((data as any)?.caseStudies)
        ? (data as any).caseStudies
        : [];
      console.log("[CaseStudyFetcher] slug:", slug, "| ids:", studies.map(cs => cs.caseStudyId));
      if (!studies.length) { setNotFound(true); setLoading(false); return; }
      const found = findCaseStudy(studies, slug);
      if (!found) { setNotFound(true); setLoading(false); return; }
      setCaseStudy(found);
      setLoading(false);
    }).catch(() => { setNotFound(true); setLoading(false); });
  }, [slug, lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Case study not found.</p>
      </div>
    );
  }

  const cs = caseStudy!;

  return (
    <div className={SPACING.sideMargin}>
      <article className="max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href={`/${lang}`} className="hover:text-foreground transition-colors">
            {lang === "ge" ? "Startseite" : "Home"}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/#case-studies`} className="hover:text-foreground transition-colors">
            {lang === "ge" ? "Fallstudien" : "Case Studies"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground truncate inline-block max-w-[150px] sm:max-w-none align-bottom">{cs.company}</span>
        </nav>

        <Link
          href={`/${lang}/#case-studies`}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-sm text-muted-foreground hover:text-gold transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === "ge" ? "Zurück zu Fallstudien" : "Back to Case Studies"}</span>
        </Link>

        <header className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/10 text-gold text-xs sm:text-sm font-bold rounded-full">
              {cs.industry}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {cs.company}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gold font-semibold leading-relaxed">{cs.title}</p>
        </header>

        {cs.image && (
          <figure className="mb-10 sm:mb-12">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image src={cs.image} alt={`${cs.company} case study`} fill sizes="100vw" className="object-cover" priority />
            </div>
          </figure>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {[
            { icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />, value: cs.stats.costSaved, label: copy.labels.saved },
            { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />, value: cs.stats.vaCount, label: copy.labels.teamSize },
            { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />, value: cs.stats.timeframe, label: copy.labels.timeline },
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:scale-105 transition-all">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 bg-gold/10 rounded-full">{stat.icon}</div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
            {lang === "ge" ? "Herausforderung" : "Challenge"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{cs.challenge}</p>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
            {lang === "ge" ? "Lösung" : "Solution"}
          </h2>
          <div className="text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: cs.solution }} />
        </section>

        {cs.results?.length > 0 && (
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
              {lang === "ge" ? "Ergebnisse" : "Results"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {cs.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-gold/30 transition-all hover:shadow-lg hover:scale-105">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-gold/10 rounded-lg flex-shrink-0">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">{result.value}</div>
                      <div className="text-xs sm:text-sm font-semibold text-gold mb-2 sm:mb-3">{result.metric}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{result.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {cs.testimonial && (
          <aside className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gold/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base sm:text-lg lg:text-xl italic text-foreground leading-relaxed">{cs.testimonial}</blockquote>
            </div>
            <div className="sm:ml-14">
              <div className="font-bold text-foreground text-base sm:text-lg">{cs.testimonialAuthor}</div>
              <div className="text-gold font-medium text-sm sm:text-base">{cs.testimonialRole}</div>
            </div>
          </aside>
        )}

        <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <Link
            href={`/${lang}/#case-studies`}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground text-sm sm:text-base font-semibold rounded-xl hover:bg-gold/90 transition-all hover:shadow-lg hover:scale-105 group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{lang === "ge" ? "Alle Fallstudien ansehen" : "View All Case Studies"}</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
