import Landing from "../sections/Landing.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import TextLoop from "../components/TextLoop.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import OurGoal from "../sections/OurGoal.jsx";
import Carousel from "../sections/Intro.jsx";
import Features from "../sections/Features.jsx";

const Home = () => {
  return (
    <MainLayout>
      <Landing />
      <TextLoop />
      <Carousel />
      <Features />
      <OurGoal />
      <TextLoop />
      <NewsLetter />
    </MainLayout>
  );
};

export default Home;
