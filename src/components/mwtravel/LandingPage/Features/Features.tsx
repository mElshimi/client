import girl from "../../../../assets/imgs/esdrfi0e60tkd7lpfe7skpg6g0.png";
import { FaLocationDot, FaCalendarCheck } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { IListProps } from "../../../../interfaces/interfaces";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>
      <section className="my-24">
        <div className="container mx-auto ">
          <h2 className="text-2xl text-cyan-500 tracking-wide font-semibold text-center md:text-start mb-4">
            KEY FEATURES
          </h2>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-bold col-span-2 text-center md:text-start dark:text-gray-300">
            We offer best services
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:w-full w-11/12 bg-[#06b6d4] rounded-e-full overflow-hidden "
          >
            <img className="w-full" src={girl} alt="travel girl" />
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            <div className="w-full md:w-3/5 mx-auto lg:mx-0 text-center md:text-start mt-10 lg:mt-0 ">
              <h2 className="text-2xl font-semibold">
                Hay! MW-Travels is there to help you find your dream holiday.
                Easy you just find where you want to go and book that.
              </h2>

              <Stripe {...list[0]} />
              <Stripe {...list[1]} />
              <Stripe {...list[2]} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;

const list = [
  {
    icon: <FaLocationDot className="text-white  text-4xl" />,
    title: "Select many location",
    des: "choose your favorite trip",
  },
  {
    icon: <FaCalendarCheck className="text-white  text-4xl" />,
    title: "Schedule your trip",
    des: "Set the date you want",
  },
  {
    icon: <BiSolidDiscount className="text-white  text-4xl" />,
    title: "Big discount",
    des: "Get discount for every services",
  },
];

const Stripe = ({ icon, title, des }: IListProps) => {
  return (
    <div className="flex justify-start my-12 mx-2 md:ms-20">
      <div className="bg-[#06b6d4] w-16 h-16 rounded-xl flex items-center justify-center me-4 ">
        {icon}
      </div>
      <div>
        <h2 className="font-bold text-start text-xl md:text-2xl">{title}</h2>
        <p className="font-semibold text-start text-md md:text-lg">{des}</p>
      </div>
    </div>
  );
};
