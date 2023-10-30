"use client";
import {
  UserOutlined,
  DatabaseOutlined,
  SyncOutlined,
  ForkOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CarCard } from "./CarCard";
import { ICar } from "./../../types";
import { formatMoney } from "./../../utils";
import Link from "next/link";

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

type PopularCarsUIProps = {
  data: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
  carList: ICar[];
};

export const PopularCarsUI = ({ data, carList }: PopularCarsUIProps) => {
  const [carsTag, setCarsTag] = useState<
    {
      id: number;
      name: string;
      imageUrl: string;
    }[]
  >(data);
  const [cars, setCars] = useState<ICar[]>(carList);
  const [selectedCarName, setSelectedCarName] = useState<string[]>(["Toyota"]);

  useEffect(() => {
    if (
      selectedCarName.includes("explore-more") ||
      selectedCarName.length === 0
    ) {
      setCars(carList);
    } else {
      setCars([
        ...carList.filter((_c) =>
          selectedCarName.some((_f) =>
            _c.title.toLowerCase().includes(_f.toLowerCase())
          )
        ),
      ]);
    }
  }, [carList, selectedCarName]);

  return (
    <section className="py-[40px] mt-10 px-[20px] md:px-[80px] flex flex-col justify-center text-center">
      <p className="text-[10px] mb-[20px]">Best Services</p>
      <h3 className="text-[28px] mb-[28px]">
        Explore our Top Deal
        <br />
        From Rated Dealers
      </h3>
      <div className="flex flex-wrap gap-5 justify-center mb-10">
        {carsTag.map((car) => (
          <div
            className={clsx(
              selectedCarName.includes(car.name) ? " text-white bg-orange" : "",
              "flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px] cursor-pointer gap-1"
            )}
            onClick={() => {
              if (selectedCarName.includes(car.name)) {
                setSelectedCarName([
                  ...selectedCarName.filter((c) => c !== car.name),
                ]);
              } else {
                setSelectedCarName([...selectedCarName, car.name]);
              }
            }}
          >
            <Image src={car.imageUrl} alt="" width={20} height={20} />{" "}
            {car.name}
          </div>
        ))}

        <div
          className={clsx(
            selectedCarName.includes("explore-more")
              ? " text-white bg-orange"
              : "",
            "flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px] cursor-pointer gap-1"
          )}
          onClick={() => {
            if (selectedCarName.includes("explore-more")) {
              setSelectedCarName([
                ...selectedCarName.filter((c) => c !== "explore-more"),
              ]);
            } else {
              setSelectedCarName(["explore-more"]);
            }
          }}
        >
          Explore 20+
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cars.map((car) => (
          <CarCard {...car} />
        ))}
      </div>
      {carList.length > 0 && cars.length === 0 && (
        <h3>No car found, please adjust your filter</h3>
      )}
    </section>
  );
};

type CardCardProps = ICar;
export const CarCardUI = ({
  title,
  imageUrl,
  transmission,
  year,
  mileage,
  state,
  gradeScore,
  marketplacePrice,
  id,
}: CardCardProps) => {
  return (
    <div className="p-[10px] bg-white rounded-lg mb-3">
      <div className="h-[150px] w-full bg-[#F3F3F3] rounded-xl mb-6 p-3">
        <Image
          src={imageUrl}
          alt=""
          className="h-full w-auto mx-auto rounded-lg"
          width={100}
          height={100}
        />
      </div>
      <p className="text-[#8B8B8B] text-[10px] text-left font-700">
        {gradeScore?.toFixed(1) || "-"} (grade)
      </p>
      <h4 className="text-[20px] text-left font-600 mt-1 mb-4">{title}</h4>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center  text-[10px] text-left text-[#8B8B8B] font-700">
          <UserOutlined />
          <p>{mileage} milage</p>
        </div>
        <div className="flex gap-2 items-center justify-start pr-6 text-[10px] text-left text-[#8B8B8B] font-700">
          <DatabaseOutlined />
          <p>{state}</p>
        </div>
        <div className="flex gap-2 items-center  text-[10px] text-left text-[#8B8B8B] font-700">
          <SyncOutlined />
          <p>{year}</p>
        </div>
        <div className="flex gap-2 items-center justify-start pr-6 text-[10px] text-left text-[#8B8B8B] font-700">
          <ForkOutlined />
          <p>{transmission}</p>
        </div>
      </div>
      <div className="flex justify-between gap-3 mt-6">
        <h5 className="text-[18px] font-600">
          {formatMoney(marketplacePrice)}
        </h5>
        <Link
          className="flex shadow shadow-[#E6E6E6] py-1 px-2 rounded text-[12px] text-white bg-orange hover:!text-white hover:!bg-orange"
          href={`car/${id}`}
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
};
