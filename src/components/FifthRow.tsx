interface Post {
  image: string;
}
const FifthRow = () => {
  const posts: Post[] = [
    { image: "/showcase-part-1.jpg" },
    { image: "/showcase-part-3.jpg" },
    { image: "/showcase-part-2.webp" },
    { image: "/showcase-part-4.jpg" },
  ];
  return (
    <div className="min-h-screen lg:px-20 md:px-16 mb-3">
      <div className="bg-black min-h-screen flex flex-col lg:py-12 md:py-4 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 lg:px-20 px-12">
          {posts.map((post: Post, index: number) => {
            return (
              <div
                key={index}
                className=" min-h-96 inline-block cursor-pointer border p-2 bg-white rounded-md"
              >
                <div className="flex justify-center items-center rounded-xl p-3">
                  <img
                    className="h-screen w-full object-center rounded-xl"
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
        <span className="text-6xl text-white bg-black font-bold w-2/3 absolute bottom-20 left-28 rounded-md p-3">
          Ride Your Cycle to Heaven <br /> With Us
        </span>{" "}
      </div>
    </div>
  );
};

export default FifthRow;
