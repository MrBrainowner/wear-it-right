import "../styles/globals.css";

const HeroSection = () => {
  return (
    <div className="absolute bg-[url('/assest/images/image1.jpg')] bottom-0">
      <div>
        <div>
          <h1 className="text-[200px] retro-red font-(family-name: DM-sans) italic leading-[80%]">
            WEAR
          </h1>
        </div>
        <div>
          <h1 className="text-[200px] font-(family-name: DM-sans) tracking-tighter leading-[80%]">
            it RIGHT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
