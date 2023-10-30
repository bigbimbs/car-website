import { Spinner } from "../components";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center text-white bg-black w-full min-h-[400px]">
      <Spinner />
      <p>Please wait!</p>
    </div>
  );
}
