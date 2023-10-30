export const PopularCarsFilter = () => {
  return (
    <div className="flex justify-center px-[20px] md:px-[80px]">
      <div className="shadow-xl shadow-[#E6E6E6]  bg-white max-w-3xl mx-[40] py-[20px] px-[40px] flex flex-wrap md:flex-nowrap gap-10 items-center rounded">
        <div>
          <span>Location</span>
        </div>
        <div>
          <span>Pick Up Date</span>
        </div>
        <div>
          <span>Return Date</span>
        </div>
        <button className=" bg-orange rounded min-w-[100px] h-10 text-white">
          Search
        </button>
      </div>
    </div>
  );
};
