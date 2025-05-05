import images from "../components/Images.jsx";
const Features = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img
          className="w-full bg-fixed h-200 bg-center object-cover rounded-xl"
          src={images.image3}
          alt="Features Image"
        />
      </div>

      {/* Grid */}
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl">
            Style Guides for Every Occasion
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500">
            Get expert tips on how to dress for work, parties, travel, and
            everything in between — all in one place.
          </p>
        </div>
        {/* End Col */}

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold">
                  Personal Style Inspiration
                </h3>
                <p className="mt-1 text-gray-600">
                  Explore curated looks, moodboards, and outfit combos tailored
                  to different fashion personalities and aesthetics.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold ">
                  Sustainable Style Education
                </h3>
                <p className="mt-1 text-gray-600">
                  Understand the basics of eco-conscious fashion, including how
                  to make mindful choices, care for your clothes properly, and
                  reduce wardrobe waste.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold ">Latest Trends</h3>
                <p className="mt-1 text-gray-600">
                  Stay ahead with trend reports, must-have pieces.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold ">
                  Beginner-Friendly Fashion Advice
                </h3>
                <p className="mt-1 text-gray-600">
                  New to fashion? Learn the basics — from color coordination and
                  layering to finding your fit and building a capsule wardrobe.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Features;
