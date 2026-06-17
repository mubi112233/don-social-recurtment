import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingDynamic } from "@/components/PricingDynamic";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { CaseStudiesClient } from "@/components/CaseStudies.client";
import { Blog } from "@/components/Blog";
import { FAQClient } from "@/components/FAQClient";
import { FinalCTA } from "@/components/FinalCTA.server";

export async function HomeBelowFold({ lang }: { lang: string }) {
  return (
    <>
      <HowItWorks />
      <Services />
      <PricingDynamic lang={lang} />
      <ToolsIntegration />
      <Testimonials />
      <Blog />
      <CaseStudiesClient lang={lang} />
      
      <FAQClient lang={lang} />
      <FinalCTA lang={lang} />
    </>
  );
}
