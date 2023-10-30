export const OurStories = () => (
  <div className="bg-[#F3F3F3] px-[20px] md:px-[80px] py-[120px]">
    <h3 className="text-center font-600 text-[42px]">Read Our Stories</h3>
    <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  </div>
);

const StoryCard = () => (
  <div className="bg-white p-6 rounded-lg">
    <div className="bg-[#F3F3F3] w-full h-[150px] mb-5"></div>
    <div className="w-[70px] h-7 rounded text-white flex justify-center items-center bg-orange text-[13px] mb-5">
      Tags
    </div>
    <h3 className="max-w-[260px] font-600 leading-[30px] text-[24px] mb-4">
      Start a blog to reach you
    </h3>
    <p className="mb-4">
      They are very soft and don't leave any pain. He likes to take of his
      family.
    </p>
    <span className="font-600">Find Out More {">"}</span>
  </div>
);
