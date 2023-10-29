"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/icons";
import { CircularProgress } from "../Elements";
import { AppDownloadBtn } from "../Shared";

export const HeroSection = () => {
  return (
    <div className="px-[40px] w-full flex gap-10 text-white relative h-full">
      <div className="hidden lg:flex w-[600px] pl-[40px] pt-10 flex-col gap-3">
        <div className="rounded-full w-10 h-10 border-white border flex items-center justify-center">
          <FacebookIcon />
        </div>
        <div className="rounded-full w-10 h-10 border-white border flex items-center justify-center">
          <InstagramIcon />
        </div>
        <div className="rounded-full w-10 h-10 border-white border flex items-center justify-center">
          <TwitterIcon />
        </div>
      </div>
      <div className="flex flex-col items-center text-center pt-16 w-full">
        <h1 className="text-[28px] md:text-[48px] text-center font-700">
          Fast And Easy Way To Rent <br />
          <span className="text-orange">A Branded</span> Car
        </h1>
        <p className="my-[20px]">
          Discover RentalX car rental options in USA with rent a car <br />
          Select from a range of car options and local specials
        </p>
        <AppDownloadBtn />
        <CircularSection />
      </div>
    </div>
  );
};

const CircularSection = () => {
  return (
    <div className="lg:ml-[400px] mt-20 flex gap-2">
      <CircularProgress
        percent={20}
        size="md"
        children={
          <div>
            <p className="text-[16px] m-0 p-0 font-600">222</p>
            <p className="text-[7px] m-0 p-0 mt-[-3px] mb-2">km</p>
            <p className="uppercase text-[8px]">Top Speed</p>
          </div>
        }
      />
      <CircularProgress
        percent={60}
        size="md"
        children={
          <div>
            <p className="text-[16px] m-0 p-0 font-600">92</p>
            <p className="text-[7px] m-0 p-0 mt-[-3px] mb-2">c</p>
            <p className="uppercase text-[8px]">Engine Temp</p>
          </div>
        }
      />
      <CircularProgress
        percent={40}
        size="md"
        children={
          <div>
            <p className="text-[16px] m-0 p-0 font-600">65</p>
            <p className="text-[7px] m-0 p-0 mt-[-3px] mb-2">hp</p>
            <p className="uppercase text-[8px]">Power car</p>
          </div>
        }
      />
    </div>
  );
};
