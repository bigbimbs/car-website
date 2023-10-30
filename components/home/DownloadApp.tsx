import Image from "next/image";
import { AppDownloadBtn } from "../Shared";

export const DownloadApp = () => (
  <div className="pb-[100px] pt-[100px] lg:pb-[180px] lg:pt-[250px] px-[20px] md:px-[80px] lg:px-[80px] xl:px-[180px] bg-white flex items-center text-white relative">
    <div className="bg-black w-full p-[60px]">
      <h3 className="text-[28px] font-700">Download the free RentalX app</h3>
      <p className="max-w-[500px] my-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque esse
        rerum, commodi est amet
      </p>
      <AppDownloadBtn />
    </div>
    <Image
      className="absolute top-[100px] lg:right-[40px] xl:right-[280px] hidden lg:block"
      src={"/images/download-app.png"}
      alt="download-app"
      width={300}
      height={800}
    />
  </div>
);
