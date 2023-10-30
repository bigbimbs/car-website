import { AppleIcon, GooglePlayStoreIcon } from "../../assets/icons";

export const AppDownloadBtn = () => (
  <div className="flex gap-4">
    <div className="border-white cursor-pointer bg-white text-black flex px-3 gap-2 w-[140px] items-center py-2 rounded">
      <div className="w-10">
        <AppleIcon />
      </div>
      <div className="w-full text-start ">
        <p className="text-[7px]">Download on any</p>
        <p className="text-[12px] font-600">Apple store</p>
      </div>
    </div>
    <div className="border-white cursor-pointer bg-white text-black flex px-3 gap-2 w-[140px] items-center py-2 rounded">
      <div className="w-10">
        <GooglePlayStoreIcon />
      </div>
      <div className="w-full text-start ">
        <p className="text-[7px]">Get it from</p>
        <p className="text-[12px] font-600">Google Play</p>
      </div>
    </div>
  </div>
);
