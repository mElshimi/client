import { BiCrown, BiDirections } from "react-icons/bi";
import { TbMessage2Up } from "react-icons/tb";
import { IoEarth } from "react-icons/io5";
import { IListProps } from "../../../interfaces/interfaces";
import { motion } from "framer-motion";

const WhyWe = () => {
  return (
    <>
      <section className="container mx-auto my-24">
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-3xl text-cyan-500 tracking-wide font-semibold text-center mb-4"
        >
          WHY IN MW-RAVELS
        </motion.h2>
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 2,
          }}
          className="text-2xl sm:text-4xl my-5 lg:text-5xl text-gray-600 font-semibold col-span-2 mx-auto text-center lg:w-1/2 dark:text-gray-300"
        >
          We ensure that your travel process is perfectly accommodated
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-7 mt-20">
          <ShowList {...list[0]} />
          <ShowList {...list[1]} />
          <ShowList {...list[2]} />
          <ShowList {...list[3]} />
        </div>
      </section>
    </>
  );
};

export default WhyWe;

const list = [
  {
    icon: <BiCrown className="text-[#06b6d4] text-3xl" />,
    title: "Best travel provider",
    des: "Your travel memories and stories are our top priority. We make sure the whole process of your vacation goes well and unforgettable.",
  },
  {
    icon: <TbMessage2Up className="text-[#06b6d4] text-3xl" />,
    title: "Personalized Service",
    des: "We know that your interests come before any program we can offer. Providing the best service fora each person is our principle in perfecting your trip.",
  },
  {
    icon: <IoEarth className="text-[#06b6d4] text-3xl" />,
    title: "Experienced agent",
    des: "Our experience and flight hours have proven that customer satisfaction that keeps returning and the various things we go through become our.",
  },
  {
    icon: <BiDirections className="text-[#06b6d4] text-3xl" />,
    title: "Trouble-free",
    des: "Through our comprehensive service in all aspects, you don't have to take care of many things and make your vacation a job. we will do it for you Best travel provider.",
  },
];

const ShowList = ({ icon, title, des }: IListProps) => {
  return (
    <div className="hover:scale-105 hover:shadow-lg rounded-lg p-2 duration-500 text-center mx-2">
      <div className="bg-[#d7e8fe] mx-auto w-14 h-14 rounded-full border-4 shadow-lg border-white flex items-center justify-center">
        {icon}
      </div>
      <h2 className="font-semibold text-2xl my-5">{title}</h2>
      <p className="font-semibold">{des}</p>
    </div>
  );
};
