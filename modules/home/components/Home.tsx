import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import BentoHero from "./BentoHero";

const Home = () => {
  return (
    <div className="w-full">
      <SchemaMarkup type="Person" />
      <BentoHero />
    </div>
  );
};

export default Home;
