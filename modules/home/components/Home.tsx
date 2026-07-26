import Breakline from "@/common/components/elements/Breakline";
import WhatsAppButton from "@/common/components/elements/WhatsAppButton";

import Introduction from "./Introduction";
import FeaturedProjects from "./FeaturedProjects";
import Services from "./Services";
import WorkProcess from "./WorkProcess";
import SkillList from "./SkillList";

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className="my-8" />
      <FeaturedProjects />
      <Breakline className="my-8" />
      <Services />
      <Breakline className="my-8" />
      <WorkProcess />
      <Breakline className="my-8" />
      <SkillList />
      <WhatsAppButton floating={true} />
    </>
  );
};

export default Home;
