import { Metadata } from "next";
import Image from "next/image";
import { Header, HeroSection } from "../components";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Header />
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
      </div>
    </>
  );
}
