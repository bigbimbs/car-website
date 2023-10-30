import { ICarListApiResponse, IPopularCars } from "../../types";
import { PopularCarsUI } from "./PopularCarsUI";

async function getData() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCarList() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/car/search"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const PopularCars = async () => {
  const data: IPopularCars = await getData();
  const carList: ICarListApiResponse = await getCarList();

  return <PopularCarsUI data={data.makeList} carList={carList.result} />;
};
