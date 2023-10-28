"use client";

import {
  AppleIcon,
  FacebookIcon,
  GooglePlayStoreIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons";
import { CircularProgress } from "../Elements";

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
        <h1 className="text-[48px] text-center font-700">
          Fast And Easy Way To Rent <br />
          <span className="text-orange">A Branded</span> Car
        </h1>
        <p className="my-[20px]">
          Discover RentalX car rental options in USA with rent a car <br />
          Select from a range of car options and local specials
        </p>
        <div className="flex gap-2 ">
          <div className="border-white cursor-pointer bg-white text-black flex px-2 gap-2 w-[140px] items-center py-1">
            <div className="w-10">
              <AppleIcon />
            </div>
            <div className="w-full text-start ">
              <p className="text-[7px]">Download on any</p>
              <p className="text-[12px] font-600">Apple store</p>
            </div>
          </div>
          <div className="border-white cursor-pointer bg-white text-black flex px-2 gap-2 w-[140px] items-center py-1">
            <div className="w-10">
              <GooglePlayStoreIcon />
            </div>
            <div className="w-full text-start ">
              <p className="text-[7px]">Download on any</p>
              <p className="text-[12px] font-600">Google Play</p>
            </div>
          </div>
        </div>
        <CircularSection />
      </div>
    </div>
  );
};

const CircularSection = () => {
  return (
    <div className="lg:ml-[400px] mt-20 flex gap-2">
      <CircularProgress
        percent={10}
        size="md"
        children={
          <div>
            <p>222 km</p>
          </div>
        }
      />
      <CircularProgress
        percent={10}
        size="md"
        children={
          <div>
            <p>222 km</p>
          </div>
        }
      />
      <CircularProgress
        percent={10}
        size="md"
        children={
          <div>
            <p>222 km</p>
          </div>
        }
      />
    </div>
  );
};
