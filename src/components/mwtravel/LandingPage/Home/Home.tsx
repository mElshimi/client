import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import slid1 from "../../../../assets/imgs/slide1.png";
import slid2 from "../../../../assets/imgs/slide1.png";
import slid3 from "../../../../assets/imgs/slide1.png";
import slid4 from "../../../../assets/imgs/slide1.png";
import slid5 from "../../../../assets/imgs/slide1.png";
import slid6 from "../../../../assets/imgs/slide1.png";
import slid7 from "../../../../assets/imgs/slide1.png";
import slid8 from "../../../../assets/imgs/slide1.png";

const Home = () => {
  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={`${style.home} container mx-auto grid grid-cols-1 md:grid-cols-2 mt-8`}
      >
        {/*  */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="flex flex-col justify-center"
        >
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-3xl text-center md:text-start sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold "
          >
            Travel Because
          </motion.h1>
          <motion.h2
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-3xl text-center md:text-start sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold "
          >
            Money Returns, <span className="text-cyan-500">Time dose not</span>
          </motion.h2>
          <motion.p
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
            }}
            className="mt-6 text-center font-semibold md:text-start   leading-5 "
          >
            The great glory of travel, to me, is not just what I see that's new
            to me in countries visited, but that in almost every one of them I
            change from an outsider looking in to an insider looking out.
          </motion.p>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
            }}
            className="block mx-auto mt-12"
          >
            <Button
              gradientDuoTone="cyanToBlue"
              className="p-2 hover:scale-105 hover:shadow-lg duration-500"
              as={Link}
              to={"/categories"}
            >
              Find out more
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
        {/*  */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="flex justify-center items-center mt-6 md:mt-0"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{
              delay: 2500,
            }}
            className="w-10/12 "
          >
            {imageList.map((item,i) => (
              <SwiperSlide key={i} className="w-full rounded-lg ">
                <img className="w-full" src={item} alt={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;

const imageList = [slid1, slid2, slid3, slid4, slid5, slid6, slid7, slid8];
