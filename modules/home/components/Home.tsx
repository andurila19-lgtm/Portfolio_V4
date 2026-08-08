import dynamic from "next/dynamic";
import Breakline from "@/common/components/elements/Breakline";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import Introduction from "./Introduction";

const Services = dynamic(() => import("./Services"), { ssr: true });
const CredibilitySection = dynamic(() => import("./CredibilitySection"), { ssr: true });
const FeaturedProjects = dynamic(() => import("./FeaturedProjects"), { ssr: true });
const FeaturedCaseStudies = dynamic(() => import("./FeaturedCaseStudies"), { ssr: true });
const PricingOverview = dynamic(() => import("./PricingOverview"), { ssr: true });
const WhyChooseMe = dynamic(() => import("./WhyChooseMe"), { ssr: true });
const WorkProcess = dynamic(() => import("./WorkProcess"), { ssr: true });
const SkillList = dynamic(() => import("./SkillList"), { ssr: true });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: true });
const FAQSection = dynamic(() => import("./FAQSection"), { ssr: true });
const CTABanner = dynamic(() => import("./CTABanner"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/common/components/elements/WhatsAppButton"), { ssr: false });

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

