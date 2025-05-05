import "../index.css";
import images from "../components/Images";

const GallerySection = () => {
  return (
    <section className="w-full">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div class="space-y-2">
            <img
              class="w-full h-auto object-cover"
              src={images.bohe2}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.trend3}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.bohe3}
              alt="Gallery Masonry Image"
            />
          </div>
          <div class="space-y-2">
            <img
              class="w-full h-auto object-cover"
              src={images.street}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.image1}
              alt="Gallery Masonry Image"
            />
          </div>
          <div class="space-y-2">
            <img
              class="w-full h-auto object-cover"
              src={images.trend8}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.classic3}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.bohe}
              alt="Gallery Masonry Image"
            />
          </div>
          <div class="space-y-2">
            <img
              class="w-full h-auto object-cover"
              src={images.chic}
              alt="Gallery Masonry Image"
            />
            <img
              class="w-full h-auto object-cover"
              src={images.classic2}
              alt="Gallery Masonry Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
