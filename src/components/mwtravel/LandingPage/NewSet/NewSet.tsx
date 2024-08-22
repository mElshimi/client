import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ITripProps } from "../../../../interfaces/interfaces";
import { baseURL } from "../../../../services/axios-global";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { actGetTrips } from "../../../../store/trips/tripsSlice";

const NewSet = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.trips);
  const newset = records.slice(0, 4);

  useEffect(() => {
    dispatch(actGetTrips());
  }, [dispatch]);

  return (
    <>
      <section className="container mx-auto ">
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-3xl text-cyan-500 tracking-wide font-semibold text-center md:text-start mb-4"
        >
          THE NEWSET
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 items-center">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-bold col-span-2 text-center md:text-start dark:text-gray-300"
          >
            Explore beautiful places now
          </motion.h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="justify-self-center md:justify-self-end"
          >
            <Button
              as={Link}
              to={"/explore"}
              className="p-2 hover:scale-105 hover:shadow-lg duration-500"
              color="gray"
              pill
            >
              Explore more
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {newset.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <Trip trip={item} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NewSet;

const Trip = ({ trip }: ITripProps) => {
  return (
    <div
      className="relative group cursor-pointer w-full overflow-hidden duration-500 h-96
      bg-zinc-100 dark:bg-slate-900 rounded-lg text-gray-50 p-5"
    >
      <div className="">
        <div className="group-hover:scale-110 w-full rounded-md h-96 bg-slate-800 duration-500">
          {!trip ? (
            <ImgSkeleton />
          ) : (
            <img
              className="rounded-md w-full h-96"
              src={`${baseURL}/images/${trip?.imgCover}`}
              alt={`${trip?.tripName} image`}
            />
          )}
        </div>
        <div className="absolute w-full left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-12">
          <div className="absolute -z-10 left-0 w-full h-28 opacity-0 rounded-b-md duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
          {!trip ? (
            <TextSkeleton />
          ) : (
            <span className="text-2xl font-bold block">{trip?.tripName}</span>
          )}
          {!trip ? (
            <TextSkeleton />
          ) : (
            <Link
              to={`/categories/${trip?.category}/${trip?.id}`}
              state={{ trip: trip }}
              className="items-center group-hover:opacity-100 font-semibold hover:text-cyan-500 w-56 duration-500 opacity-0 text-xl"
            >
              See More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ImgSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
      <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded  dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
};

const TextSkeleton = () => {
  return (
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
  );
};
