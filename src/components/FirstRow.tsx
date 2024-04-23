const FirstRow = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full gap-4 mb-2 lg:px-20 md:px-12">
      {/* leftside */}
      <div className="py-4">
        <span className="text-6xl font-bold">
          Discovering the <br />
          Undiscovered <br />
          Charms.
        </span>
        <br />
        <span className="text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </span>

        <form className=" mx-auto my-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-3xl  "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className=" absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none text-white font-medium rounded-lg text-sm px-4 py-2 bg-slate-950 "
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-4">
            <img className="rounded-lg w-1/2" src="/cycling-2.jpg" alt="" />
            <img className="rounded-lg w-1/2" src="/cycling-4.webp" alt="" />
        </div>
      </div>
      {/* rightside */}
      <div className="py-4">
        <div className="grid grid-cols-2 gap-4 mb-2 ">
            {/* left in left */}
            <div>
                <img className="h-[530px] rounded-xl" src="/cycling-3.jpg" alt="" />
            </div>
            {/* right in left */}
            <div className="gap-y-2 flex flex-col">
                <img src="/cycling-5.jpg" className="w-full rounded-md" alt="" />
                <span className="font-semibold text-md">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </span> 
                <button className="border p-3 rounded-md"> 
                    <span className="font-semibold">Explore more</span>
                </button> 
                <span className="text-5xl font-bold">
                    4.9
                </span>
                <span className="text-2xl font-semibold">
                   Our cusotmer rating
                </span>
                <span className="font-semibold text-md">
                Lorem Ipsum has been the industry's std
                </span> 
                <button className="border p-3 rounded-md"> 
                    <span className="font-semibold">Explore more</span>
                </button> 
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default FirstRow;
