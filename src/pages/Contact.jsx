import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div class="flex items-center justify-center max-w-[55rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl lg:max-w-5xl mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
              We'd love to talk about how we can help you.
            </p>
          </div>

          <div class="mt-12 items-center">
            <div class="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
              <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Fill in the form
              </h2>

              <form>
                <div class="grid gap-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="hs-firstname-contacts-1" class="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label for="hs-lastname-contacts-1" class="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="hs-email-contacts-1" class="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autocomplete="email"
                      class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label for="hs-phone-number-1" class="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label for="hs-about-contacts-1" class="sr-only">
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows="4"
                      class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div class="mt-4 grid">
                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-retro-red text-white hover:bg-retro-red focus:outline-hidden focus:bg-retro-red disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send inquiry
                  </button>
                </div>

                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-500 dark:text-neutral-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
