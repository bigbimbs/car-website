import {
  CarDetails,
  DownloadApp,
  ImageSlideshow,
  OurStories,
  Testimonial,
  WhyChooseUs,
} from "../../../components";
import { ICarDetails, ICarMedia } from "../../../types";

async function getCarDetails(carId: string) {
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/${carId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCarMedia(carId: string) {
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${carId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page({ params }: { params: { slug: string } }) {
  const carDetailsData: ICarDetails = await getCarDetails(params.slug);
  const carMedia: ICarMedia = await getCarMedia(params.slug);
  return (
    <>
      <div className="p-4 rounded-lg mb-[100px] bg-[#EFEF]">
        <h1 className="text-[32px] font-semibold mb-4">
          {carDetailsData.carName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full h-auto rounded-lg  shadow-md ">
            <ImageSlideshow
              images={carMedia.carMediaList.map((_m) => _m.url)}
            />
          </div>
          <CarDetails data={carDetailsData} />
        </div>
      </div>

      <WhyChooseUs />
      <Testimonial />
      <DownloadApp />
      <OurStories />
    </>
  );
}
