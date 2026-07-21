import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoGallery } from "./components/VideoGallery";
import { PlanCards } from "./components/PlanCards";
import {
  PainPoints,
  MarketChallenge,
  CauseSection,
  JobSeekerTrend,
  RoleComparison,
  SolutionSection,
  SupportScope,
  ContentFlow,
  OperationTeam,
  Differentiators,
  ProcessSteps,
  FaqAccordion,
  ContactCta,
  Footer,
} from "./components/Sections";
import { siteConfig } from "./config/siteConfig";

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.brandName,
    description: "中小企業向けショート動画SNS採用支援",
    provider: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    areaServed: "JP",
    serviceType: "採用向けショート動画SNS運用支援",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function App() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="top">
        <Hero />
        <PainPoints />
        <MarketChallenge />
        <CauseSection />
        <JobSeekerTrend />
        <RoleComparison />
        <SolutionSection />
        <VideoGallery />
        <SupportScope />
        <ContentFlow />
        <OperationTeam />
        <Differentiators />
        <PlanCards />
        <ProcessSteps />
        <FaqAccordion />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
