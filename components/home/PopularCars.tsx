"use client";
import {
  UserOutlined,
  DatabaseOutlined,
  SyncOutlined,
  ForkOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type FilterType = {
  populate: boolean;
  search?: string;
  page: number;
  limit: number;
};

function filterQueryParam(arr: string[], obj: Record<string, any>) {
  const filteredObj: Record<string, any> = {};
  for (const key in obj) {
    if (arr.includes(key)) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}

async function getData() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const PopularCars = () => {
  const [filters, setFilters] = useState<FilterType>({
    page: 1,
    populate: true,
    limit: 5,
  });
  return (
    <section className="py-[40px] mt-10 px-[20px] md:px-[80px] flex flex-col justify-center text-center">
      <p className="text-[10px] mb-[20px]">Best Services</p>
      <h3 className="text-[28px] mb-[28px]">
        Explore our Top Deal
        <br />
        From Rated Dealers
      </h3>
      <div className="flex flex-wrap gap-5 justify-center mb-10">
        <div className="flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px] text-white bg-orange">
          BMW
        </div>
        <div className="flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px]">
          Explore 20+
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
};
const CarCard = () => {
  return (
    <div className="p-[10px] bg-white rounded-lg mb-3">
      <div className="h-[150px] w-full bg-[#F3F3F3] rounded-xl mb-6"></div>
      <p className="text-[#8B8B8B] text-[10px] text-left font-700">
        4.7 (50+ Review)
      </p>
      <h4 className="text-[20px] text-left font-600 mt-1 mb-4">
        Mercedes S-Class
      </h4>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center  text-[10px] text-left text-[#8B8B8B] font-700">
          <UserOutlined />
          <p>3 Passengers</p>
        </div>
        <div className="flex gap-2 items-center justify-end pr-6 text-[10px] text-left text-[#8B8B8B] font-700">
          <DatabaseOutlined />
          <p>2 doors</p>
        </div>
        <div className="flex gap-2 items-center  text-[10px] text-left text-[#8B8B8B] font-700">
          <SyncOutlined />
          <p>Air condition</p>
        </div>
        <div className="flex gap-2 items-center justify-end pr-6 text-[10px] text-left text-[#8B8B8B] font-700">
          <ForkOutlined />
          <p>Manual</p>
        </div>
      </div>
      <div className="flex justify-between gap-3 mt-6">
        <h5 className="text-[18px] font-600">
          $200/<span className="text-[#8B8B8B]">day</span>
        </h5>
        <button className="flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px] text-white bg-orange hover:!text-white hover:!bg-orange">
          Rent Now
        </button>
      </div>
    </div>
  );
};
