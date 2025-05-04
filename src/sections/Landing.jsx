import LandingTitle from "../components/LandingTitle";
import image1 from "../assets/images/image1.jpg";

const Landing = () => {
  return (
    <section className="bg-linear-to-t from-retro-red/20 via-transparent overflow-hidden h-screen relative flex flex-col justify-end w-full p-5">
      <div className="self-center z-1 justify-center absolute h-300 w-200 -bottom-80">
        <img
          className="object-cover rotate-3 z-0 rounded-sm"
          src={image1}
          alt="image"
        />
      </div>
      <div className="z-2">
        <LandingTitle />
      </div>
    </section>
  );
};

export default Landing;
