const BookDetailLoader = () => {
  return (
    <div className="p-5 md:p-10 max-w-screen-xl mx-auto">
      <div className="flex flex-row w-full">
        <div className="basis-1/2">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            <div role="status" className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </h2>

          <dl className="max-w-md text-gray-900 divide-y divide-gray-200">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Author</dt>
              <dd className="text-lg font-semibold">
                <div role="status" className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded-full w-48"></div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Description</dt>
              <dd className="text-lg font-semibold">
                <div role="status" className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-48"></div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Pages</dt>
              <dd className="text-lg font-semibold">
                <div role="status" className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded-full w-48 mb-2.5"></div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Publisher</dt>
              <dd className="text-lg font-semibold">
                <div role="status" className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded-full w-48 mb-2.5"></div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Published on</dt>
              <dd className="text-lg font-semibold">
                <div role="status" className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded-full w-48 mb-2.5"></div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div role="status" className="animate-pulse">
            <div className="flex items-center justify-center w-full h-100 bg-gray-300 rounded-sm sm:w-96">
              <svg
                className="w-10 h-10 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailLoader;
