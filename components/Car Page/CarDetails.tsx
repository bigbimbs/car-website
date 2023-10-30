import React from "react";
import { ICarDetails } from "../../types";
import { formatMoney } from "../../utils";

export const CarDetails = ({ data }: { data: ICarDetails }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <p>
          <strong>Year:</strong> {data.year}
        </p>
        <p>
          <strong>Mileage:</strong> {data.mileage} {data.mileageUnit}
        </p>
        <p>
          <strong>Price:</strong> {formatMoney(data.marketplacePrice)}
        </p>
        <p>
          <strong>City:</strong> {data.city}
        </p>
        <p>
          <strong>State:</strong> {data.state}
        </p>
        <p>
          <strong>Country:</strong> {data.country}
        </p>
        <p>
          <strong>Transmission:</strong> {data.transmission}
        </p>
        <p>
          <strong>Fuel Type:</strong> {data.fuelType}
        </p>
        <p>
          <strong>Body Type:</strong> {data.bodyType.name}
        </p>
        <p>
          <strong>Interior Color:</strong> {data.interiorColor}
        </p>
        <p>
          <strong>Exterior Color:</strong> {data.exteriorColor}
        </p>
        <p>
          <strong>Engine Type:</strong> {data.engineType}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Features:</p>
        <ul className="list-disc pl-5">
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CarDetails;
