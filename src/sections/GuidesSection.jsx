import images from "../components/Images.jsx";
const GuidesSection = () => {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
          {/* Card */}
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={images.casual}
                alt="Masonry Cards Image"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Casual Style
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}

        <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          {/* Card */}
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src={images.chic}
                alt="Masonry Cards Image"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Chic Style
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}

        <div className="col-span-12 md:col-span-4">
          {/* Card */}
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src={images.street}
                alt="Masonry Cards Image"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Streetwear Style
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          {/* Card */}
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src={images.bohe}
                alt="Masonry Cards Image"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Bohemian (Boho) Style
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          {/* Card */}
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src={images.classic}
                alt="Masonry Cards Image"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Classic Style
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      <div class="max-w-[85rem] mt-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-neutral-200">
            Helpful Tips
          </h2>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Start with the Basics
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Before diving into trends or bold pieces, focus on building a
                solid foundation. Invest your attention in versatile essentials
                like neutral t-shirts, well-fitting jeans, plain button-ups, and
                a classic jacket or blazer. These are the backbone of countless
                outfits and make daily styling less overwhelming.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Stick to a Cohesive Color Palette
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Having a consistent color scheme makes your wardrobe more
                versatile. Choose 3–5 base colors that complement your skin tone
                and personal vibe. Add a couple of accent colors to bring
                variety. This makes it easier to create new combinations without
                clashing pieces.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Fit Is More Important Than Labels
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Even the most expensive clothes can look sloppy if they don’t
                fit well. Learn what flatters your body shape and consider
                getting clothes tailored for that extra polish. Well-fitted
                pants, shirts that hug your shoulders just right, and jackets
                that fall cleanly elevate your entire outfit effortlessly.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Master the Art of Layering
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Layering is both functional and stylish. Start with thinner,
                breathable fabrics and work your way up to heavier layers like
                jackets or coats. Playing with textures (e.g., cotton under
                denim, or wool over linen) adds dimension and visual interest to
                your outfit.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Balance Proportions in Your Outfits
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                A stylish look often comes down to balancing shapes. If your top
                is loose or oversized, pair it with fitted bottoms like skinny
                jeans or tailored trousers. If you’re wearing wide-leg pants or
                a flowy skirt, balance it with a more form-fitting top. This
                keeps your silhouette intentional and stylish.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Care for Your Clothes Like They Matter
              </h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Good clothes last longer with proper care. Always check care
                labels, avoid overwashing, and learn the difference between
                machine-wash and hand-wash fabrics. Fold sweaters to avoid
                stretching, hang blouses properly, and store items in a way that
                prevents damage and fading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesSection;
