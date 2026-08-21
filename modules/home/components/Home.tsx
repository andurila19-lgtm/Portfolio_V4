import dynamic from "next/dynamic";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import BentoHero from "./BentoHero";

const WhatsAppButton = dynamic(
  () => import("@/common/components/elements/WhatsAppButton"),
  { ssr: false }
);

const Home = () => {
  return (
    <div className="w-full">
      <SchemaMarkup type="Person" />
      <BentoHero />
      <WhatsAppButton floating={true} />
    </div>
  );
};

export default Home;
