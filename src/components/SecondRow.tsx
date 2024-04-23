import { BiRightTopArrowCircle } from "react-icons/bi"

interface Post {
  image: string;
}

const SecondRow = () => {
    const description: string = "The cycle routes quiz volutes sit aspirator aut lorem ipsum"
  const posts: Post[] = [
    {image: "/equip-1.jpg"}, 
    {image: "/equip-3.jpg"},
    {image: "/equip-2.webp"},
    {image: "/equip-4.jpg"}
  ];
  return (
    <div className="min-h-screen lg:px-20 md:px-16 mb-3">
      <div className="bg-black min-h-screen flex flex-col lg:py-12 md:py-4">
        <span className="text-6xl text-white font-bold text-center w-full">
          Ride Your Cycle to Heaven With Us
        </span> <br />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 lg:px-20 px-12">
          {posts.map((post: Post, index: number) => {
            return (
              <div
                key={post.image}
                className=" min-h-96 inline-block cursor-pointer border p-2 bg-white rounded-md">
                <div className="flex justify-between px-2">
                  <p className="mt-2 text-5xl text-black">
                    {`0${index+1}`}
                  </p>
                  <p className="mt-2 text-5xl text-black">
                    <BiRightTopArrowCircle />
                  </p>
                </div>
                <div>
                  <p className="mt-2 text-lg text-slate-700">
                    {description}
                  </p>
                </div>
                <div className="flex justify-center items-center rounded-xl p-3">
                  <img
                    className="h-72 w-full object-center rounded-xl"
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
