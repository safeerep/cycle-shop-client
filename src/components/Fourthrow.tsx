const Fourthrow = () => {
  return (
    <div className="min-h-screen lg:px-20 md:px-16 mb-3">
      <div className=" min-h-screen flex flex-col lg:py-12 md:py-4">
        <div className="flex w-full gap-4 mb-2 lg:px-20 px-12 justify-center items-center">
          {/* left side */}
          <div className="lg:w-2/5 w-full">
            <img
              className="bg-white rounded-2xl"
              src="/men-with-cycle.png"
              alt=""
            />
          </div>
          {/* right side */}
          <div className="lg:w-3/5 w-full flex flex-col">
            <div className="flex justify-between py-4 gap-8">
              <span className="text-2xl">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
              <div className=" inline-block cursor-pointer border p-2 rounded-full bg-slate-100">
                  <div className="flex justify-center items-center p-3">
                    <img
                      className="max-h-82 w-full object-contain rounded-full"
                      src={`/helmet-2.png`}
                      alt=""
                    />
                  </div>
                </div>
            </div>
            <span className="text-7xl font-bold my-8">
                Make EveryDay ExtraOrdinary For Your Journey
            </span>
            <span className="text-2xl">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthrow;
