import { Metadata } from "next";
import Image from "next/image";
import {
  DownloadApp,
  HeroSection,
  OurStories,
  PopularCars,
  PopularCarsFilter,
  Testimonial,
  WhyChooseUs,
} from "../components";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-150px)] bg-gradient-to-b from-[#181818] via-[#2F2F2F] to-[#434449] relative">
        <HeroSection />
        <div className="absolute bottom-[-100px] left-[-150px]">
          <Image
            src={"/images/hero-image.png"}
            alt=""
            className="xl:w-[1000px] lg:w-[800px] lg:block hidden"
            width={1000}
            height={400}
          />
        </div>
        <div className="flex justify-center mb-20">
          <Image
            src={"/images/hero-image.png"}
            alt=""
            className="w-[200px] sm:w-[400px] mx-[40px] mt-14 lg:hidden block"
            width={200}
            height={400}
          />
        </div>
      </div>
      <div className="pt-40 pb-14 mb-20 bg-[#F3F3F3]">
        <PopularCarsFilter />
        <PopularCars />
      </div>
      <WhyChooseUs />
      <Testimonial />
      <DownloadApp />
      <OurStories />
    </>
  );
}
