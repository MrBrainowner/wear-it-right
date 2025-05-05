const IntroSection = () => {
  return (
    <div className="bg-linear-to-b from-retro-red/20 via-transparent w-full ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="flex justify-center"></div>

        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Style, Define Your Identity
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-white/70">
            Discover the latest trends, timeless tips, and style inspiration to
            help you dress with confidence and creativity every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
