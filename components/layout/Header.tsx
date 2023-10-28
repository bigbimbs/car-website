"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  DarkHamburgerIcon,
  LightHamburgerIcon,
  SearchIcon,
} from "../../assets/icons";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width > 1100) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        scrolled
          ? "bg-white text-black fixed left-0 right-0"
          : "bg-black text-white",
        "px-[40px] py-[20px] lg:px-[80px] flex lg:gap-0 gap-6 flex-col lg:flex-row justify-between"
      )}
    >
      <div className="flex justify-between">
        <Link href="/" className="text-orange font-800">
          Automobile
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {!scrolled ? <DarkHamburgerIcon /> : <LightHamburgerIcon />}
        </button>
      </div>
      <Transition
        show={open}
        appear
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={clsx(
            open ? "flex" : "hidden",
            "flex lg:flex-row flex-col mt-1 items-center gap-[40px]"
          )}
        >
          <Link href="/" className="hover:text-orange transition text-[12px]">
            Home
          </Link>
          <Link href="/" className="hover:text-orange transition text-[12px]">
            About
          </Link>
          <Link href="/" className="hover:text-orange transition text-[12px]">
            Car
          </Link>
          <Link href="/" className="hover:text-orange transition text-[12px]">
            Pricing
          </Link>
          <Link href="/" className="hover:text-orange transition text-[12px]">
            Contact
          </Link>
        </div>
      </Transition>
      <Transition
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={clsx(
            open ? "flex" : "hidden",
            "gap-1 justify-center mt-5 lg:mt-0"
          )}
        >
          <button className="bg-white p-[4px] rounded">
            <SearchIcon />
          </button>
          <button className="p-[4px] bg-orange rounded min-w-[100px]">
            Log In
          </button>
        </div>
      </Transition>
    </div>
  );
};
