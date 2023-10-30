import { ICar } from "../../types";
import { CarCardUI } from "./PopularCarsUI";
type CardCardProps = ICar;
export const CarCard = (data: CardCardProps) => {
  return <CarCardUI {...data} />;
};
