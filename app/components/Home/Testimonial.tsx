"use client";

import { StarFilled } from "@ant-design/icons";
import Image from "next/image";

export const Testimonial = () => (
  <div className="bg-black py-[100px] px-[20px] md:px-[80px] flex gap-10 text-white items-center flex-wrap lg:flex-nowrap">
    <div className="lg:w-[600px]">
      <h3 className="mb-4">Testimonials</h3>
      <h2 className="text-[48px] max-w-[460px]">
        Our Client's Review & Testimonials
      </h2>
      <p className="max-w-[540px] my-4">
        The majority of our users tell us that readable content distracts
        readers the majority of our users tells us that readable
      </p>
      <p className="max-w-[540px] my-8">
        <q>
          There are amazing people working here who are down to -to earth and
          willing with anyone! Their priority is to take of their own and make
          sure you're satisfied! It is take care of their own and make sure
          you're satisfied
        </q>
      </p>
      <div className="flex gap-1 items-center">
        <StarFilled className="text-orange" />
        <StarFilled className="text-orange" />
        <StarFilled className="text-orange" />
        <StarFilled className="text-orange" />
        <StarFilled className="text-orange" />
        <span className="ml-2 text-[13px]">5.0</span>
      </div>
      <div className="flex gap-5 mt-8 items-start">
        <div className="bg-orange rounded-full h-10 w-10 mt-1"></div>
        <div>
          <h4 className="text-[20px] font-600 m-0">Wade Warren</h4>
          <p className="text-[13px]">Owner co-working space</p>
        </div>
      </div>
    </div>
    <div className="">
      <Image
        className="lg:w-[600px]"
        src={"/images/testimonial-car.png"}
        alt=""
        width={800}
        height={400}
      />
    </div>
  </div>
);
