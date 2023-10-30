import Image from "next/image";

export const WhyChooseUs = () => {
  return (
    <div className="flex flex-col w-full items-center mb-20">
      <p className="text-[10px] mb-[20px] text-center">Why Choose Us</p>
      <h3 className="text-[28px] mb-[28px] max-w-[360px] text-center font-600">
        We Offer Best Experience With our rental deals
      </h3>
      <div className="mt-[40px] flex gap-10 justify-center">
        <div className="hidden lg:block pl-[100px]">
          <Image
            src={"/images/why-choose-us.png"}
            width={1000}
            height={400}
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-full md:w-[500px] flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="h-10 !w-10 bg-orange rounded"></div>
            <div className="w-[calc(100%-40px)]">
              <h4 className="font-600 text-[20px]">Experience driver</h4>
              <p className="max-w-[220px] text-[#8B8B8B] font-600 text-[13px]">
                Don't have a driver?Don't worry we have many experience drivers
                for you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-10 !w-10 bg-orange rounded"></div>
            <div className="w-[calc(100%-40px)]">
              <h4 className="font-600 text-[20px]">Best price guaranteed</h4>
              <p className="max-w-[220px] text-[#8B8B8B] font-600 text-[13px]">
                Find a lower price? We willrefund you 100% the difference
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-10 !w-10 bg-orange rounded"></div>
            <div className="w-[calc(100%-40px)]">
              <h4 className="font-600 text-[20px]">24-hour car delivery</h4>
              <p className="max-w-[220px] text-[#8B8B8B] font-600 text-[13px]">
                Book your car anytime and we will deliver it to you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-10 !w-10 bg-orange rounded"></div>
            <div className="w-[calc(100%-40px)]">
              <h4 className="font-600 text-[20px]">24/7 technical support</h4>
              <p className="max-w-[220px] text-[#8B8B8B] font-600 text-[13px]">
                Have a question?Contact our support anytime you need
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
