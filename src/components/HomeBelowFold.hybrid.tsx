import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingDynamic } from "@/components/PricingDynamic";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { CaseStudiesClient } from "@/components/CaseStudies.client";
import { Blog } from "@/components/Blog";
import { FAQClient } from "@/components/FAQClient";
import { FinalCTA } from "@/components/FinalCTA.server";
import { SPACING } from "@/lib/constants";
import { fetchApiData, API_ENDPOINTS, normalizeLanguage, type PricingResponse } from "@/lib/api";

export async function HomeBelowFold({ lang }: { lang: string }) {
  const [servicesData, pricingData] = await Promise.all([
    fetchApiData<{ services: any[] }>(API_ENDPOINTS.SERVICES, normalizeLanguage(lang)),
    fetchApiData<PricingResponse>(API_ENDPOINTS.PRICING, normalizeLanguage(lang)),
  ]);

  const initialServices = Array.isArray((servicesData as any)?.services)
    ? [...(servicesData as any).services].sort((a: any, b: any) => a.order - b.order)
    : undefined;
  const order = ['starter', 'professional', 'enterprise'];
  const initialPlans = Array.isArray(pricingData?.plans)
    ? [...pricingData.plans].sort((a, b) => order.indexOf(a.planKey) - order.indexOf(b.planKey))
    : undefined;

  return (
    <>
      <div className={SPACING.container}>
        <HowItWorks />
        <Services />
        <PricingDynamic lang={lang} initialPlans={initialPlans} />
        <ToolsIntegration />
        <Testimonials />
        <Blog />
        <CaseStudiesClient lang={lang} />
        <FAQClient lang={lang} />
      </div>
      <FinalCTA lang={lang} />
    </>
  );
}


