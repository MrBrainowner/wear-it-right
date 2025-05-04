import { Link } from "react-router-dom";
const NewsLetter = () => {
  return (
    <div class="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
      <div class="max-w-xl text-center mx-auto">
        <div class="mb-5">
          <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Sign up to our newsletter
          </h2>
        </div>

        <form>
          <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div class="w-full">
              <label for="hero-input" class="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-retro-red focus:ring-retro-red disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter your email"
              />
            </div>
            <Link
              class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-retro-red text-white hover:bg-retro-red focus:outline-hidden focus:bg-retro-red disabled:opacity-50 disabled:pointer-events-none"
              to="#"
            >
              Subscribe
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
