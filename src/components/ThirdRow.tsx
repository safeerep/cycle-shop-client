interface Post {
  image: string;
  price: string;
}

const ThirdRow = () => {
  const name: string =
    "Poc Cycling helmets";
  const posts: Post[] = [
    { image: "/helmet-1.png", price: "$79.0" },
    { image: "/helmet-7.png", price: "$69.0" },
    { image: "/helmet-2.png", price: "$77.0" },
    { image: "/helmet-4.png", price: "$90.0" },
    { image: "/helmet-5.png", price: "$50.0" },
    { image: "/helmet-6.png", price: "$90.0" },
  ];
  return (
    <div className="min-h-screen lg:px-20 md:px-16 mb-3">
      <div className=" min-h-screen flex flex-col lg:py-12 md:py-4">
        <span className="text-6xl font-bold text-center w-full">
          Our Best Products
        </span>{" "}
        <br />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 lg:px-20 px-12">
          {posts.map((post: Post, index: number) => {
            return (
              <div className="w-full">
                <div
                  key={index}
                  className=" inline-block cursor-pointer border p-2 rounded-full bg-slate-100"
                >
                  <div className="flex justify-center items-center p-3">
                    <img
                      className="min-h-96 w-full object-contain rounded-full"
                      src={post.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-2 text-2xl font-bold text-center flex flex-col">
                  <span>{name}</span>
                  <span>{post.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;
