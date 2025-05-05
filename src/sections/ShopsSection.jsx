const ShopsSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-neutral-200">
        Top Shops
        </h2>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800">
        Zara

        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800">
        H&M
        </div>
        
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800">
        Uniqlo
        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800">
        ASOS

        </div>

        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800">
        Nordstrom
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default ShopsSection;
