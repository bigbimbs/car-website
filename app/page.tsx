import { Metadata } from "next";
import { Header, HeroSection } from "../components";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="w-full h-[200vh] bg-gradient-to-b from-[#000000] via-purple-500 to-pink-500">
        <HeroSection />
      </div>
    </>
  );
}
