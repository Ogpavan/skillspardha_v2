import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementTicker } from "@/components/home/AnnouncementTicker";
import { UpcomingWorkshops } from "@/components/home/UpcomingWorkshops";
import { WorkshopCategories } from "@/components/home/WorkshopCategories";
import { AboutSection } from "@/components/home/AboutSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MentorsSection } from "@/components/home/MentorsSection";
import { WorkshopCalendar } from "@/components/home/WorkshopCalendar";
import { LearningOutcomes } from "@/components/home/LearningOutcomes";
import { Testimonials } from "@/components/home/Testimonials";
import { CertificateSection } from "@/components/home/CertificateSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Newsletter } from "@/components/home/Newsletter";
import content from "@/data/home-content.json";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.site.name,
    url: content.site.url,
    description: content.site.organizationDescription,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.site.name,
    url: content.site.url,
    description: content.site.websiteDescription,
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AnnouncementTicker />
        <UpcomingWorkshops />
        <WorkshopCategories />
        <AboutSection />
        <BenefitsSection />
        <HowItWorks />
        <MentorsSection />
        <WorkshopCalendar />
        <LearningOutcomes />
        <Testimonials />
        <CertificateSection />
        <CommunitySection />
        <ResourcesSection />
        <FAQSection />
        <FinalCTA />
        <Newsletter />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
