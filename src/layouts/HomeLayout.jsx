import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const HomeLayout = () => {
  return (
    <div className="">
      <div className="w-full h-screen">
        <Navbar />
        <HeroSection title={"WearItRight"} />
      </div>
    </div>
  );
};

export default HomeLayout;
