"use client";
import Link from "next/link";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { FacebookIcon } from "../../assets/icons";

export const Footer = () => (
  <div className="bg-black py-[60px] px-[20px] md:px-[80px] text-white">
    <div className="flex flex-wrap lg:flex-nowrap gap-20 lg:gap-[100px] xl:gap-[140px] justify-center md:justify-start items-center">
      <div>
        <h2 className="text-[32px] mb-3">Car Rental</h2>
        <p className="mb-3">
          Anywhere, anytime, we always
          <br />
          provide best service!
        </p>
      </div>
      <div className="flex gap-20 md:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-6">
          <h3 className="mb-3 text-[20px] font-500">Services</h3>
          <Link href="/">Home</Link>
          <Link href="/">Download</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="mb-3 text-[20px] font-500">Resources</h3>
          <Link href="/">Home</Link>
          <Link href="/">Download</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="mb-3 text-[20px] font-500">Support</h3>
          <Link href="/">FAQ</Link>
          <Link href="/">How it Works</Link>
          <Link href="/">Features</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="mb-3  text-[20px] font-500">Connect with us</h3>
        <div className="flex gap-5">
          <div className="rounded-full border-white h-8 w-8 flex pl-[2px] items-center border-[2px]">
            <Icon
              component={FacebookIcon}
              style={{ fontSize: "8px", width: "8px" }}
            />
          </div>
          <div className="rounded-full border-white h-8 w-8 flex pl-[2px] items-center border-[2px]">
            <Icon
              component={FacebookIcon}
              style={{ fontSize: "8px", width: "8px" }}
            />
          </div>
          <div className="rounded-full border-white h-8 w-8 flex pl-[2px] items-center border-[2px]">
            <Icon
              component={FacebookIcon}
              style={{ fontSize: "8px", width: "8px" }}
            />
          </div>
          <div className="rounded-full border-white h-8 w-8 flex pl-[2px] items-center border-[2px]">
            <Icon
              component={FacebookIcon}
              style={{ fontSize: "8px", width: "8px" }}
            />
          </div>
        </div>
        <div>
          <label className="">Subscribe to your newsletter</label>
          <div className="bg-white mt-1 px-5 py-3 flex justify-center rounded items-center">
            <input
              placeholder="Enter your email"
              className="bg-white border-none  active:border-none text-black  focus:outline-none "
            />
            <button className=" bg-orange rounded min-w-[80px] h-10 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-white h-[1px] my-8"></div>
    <p className="text-center">
      Copyright 2023 car rental. All Rights Reserved
    </p>
  </div>
);
