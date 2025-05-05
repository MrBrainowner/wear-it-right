import LandingSection from "../sections/LandingSection.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import TextLoop from "../components/TextLoop.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import OurGoalSection from "../sections/OurGoalSection.jsx";
import IntroSection from "../sections/IntroSection.jsx";
import FeaturesSection from "../sections/FeaturesSection.jsx";

const Home = () => {
  return (
    <MainLayout>
      <LandingSection />
      <TextLoop />
      <IntroSection />
      <FeaturesSection />
      <OurGoalSection />
      <TextLoop />
      <NewsLetter />
    </MainLayout>
  );
};

export default Home;
