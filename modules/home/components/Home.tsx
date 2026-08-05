import Breakline from "@/common/components/elements/Breakline";
import WhatsAppButton from "@/common/components/elements/WhatsAppButton";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";

import Introduction from "./Introduction";
import CredibilitySection from "./CredibilitySection";
import Services from "./Services";
import FeaturedProjects from "./FeaturedProjects";
import FeaturedCaseStudies from "./FeaturedCaseStudies";
import PricingOverview from "./PricingOverview";
import WhyChooseMe from "./WhyChooseMe";
import WorkProcess from "./WorkProcess";
import SkillList from "./SkillList";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import CTABanner from "./CTABanner";

const Home = () => {
  return (
    <>
      <SchemaMarkup type="Organization" />
      <Introduction />
      <Breakline className="my-8" />
      <Services />
      <Breakline className="my-8" />
      <CredibilitySection />
      <Breakline className="my-8" />
      <FeaturedProjects />
      <Breakline className="my-8" />
      <FeaturedCaseStudies />
      <Breakline className="my-8" />
      <PricingOverview />
      <Breakline className="my-8" />
      <WhyChooseMe />
      <Breakline className="my-8" />
      <WorkProcess />
      <Breakline className="my-8" />
      <SkillList />
      <Breakline className="my-8" />
      <Testimonials />
      <Breakline className="my-8" />
      <FAQSection />
      <Breakline className="my-8" />
      <CTABanner />
      <WhatsAppButton floating={true} />
    </>
  );
};

export default Home;

