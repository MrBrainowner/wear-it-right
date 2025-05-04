import Landing from "../sections/Landing.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import TextLoop from "../components/TextLoop.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <MainLayout>
      <Landing />
      <TextLoop />
      <NewsLetter />
    </MainLayout>
  );
};

export default Home;
