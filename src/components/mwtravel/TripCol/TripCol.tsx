import { Link } from "react-router-dom";
import { ITripProps } from "../../../interfaces/interfaces";
import { baseURL } from "../../../services/axios-global";

const TripCol = ({ trip }: ITripProps) => {
  return (
    <>
      <Link
        to={`/categories/${trip.category}/${trip.tripName}`}
        state={{ trip: trip }}
        className={`group relative block w-full mx-auto h-96 px-2 `}
      >
        <img
          className="w-full absolute h-full top-0 start-0 end-0 bottom-0 rounded-md"
          src={`${baseURL}/images/${trip?.imgCover}`}
          alt={trip.tripName + "image"}
        />
        <div className="relative  flex h-full w-full transform items-end border-2 border-cyan-500 dark:border-white rounded-md transition-transform group-hover:scale-105">
          <div className="p-4 !pt-0 transition-opacity text-white group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <div className="absolute z-0 bottom-0 start-0 end-0 w-full h-24 bg-gradient-to-t from-35% from-black to-transparent opacity-50"></div>
            <h2 className="text-2xl absolute bottom-16 font-bold bg-cyan-500 w-fit px-3 py-1 rounded-full">
              ${trip.price}
            </h2>
            <h2 className="mt-4 font-bold absolute bottom-4 text-xl ab sm:text-2xl">
              {trip.tripName}
            </h2>
          </div>
          <div className="absolute p-4 opacity-0 top-0 bottom-0 text-white bg-black w-full bg-opacity-75 transition-opacity group-hover:relativ9e group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
              {trip.tripName}
            </h3>
            <p className="mt-4 text-sm sm:text-base h-52 overflow-y-hidden ">
              {trip.description}
            </p>
            <p className="mt-8 font-bold">See more</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TripCol;
