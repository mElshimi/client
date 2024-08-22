import { Breadcrumb, Button } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FcCalendar } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { IoArrowUndoSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ITrip } from "../interfaces/interfaces";
import { baseURL } from "../services/axios-global";

const Trip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const trip: ITrip = location.state?.trip;
  const tripPrice = Number(trip?.price);
  const param = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;

  const [totalPrice, setTotalPrice] = useState(tripPrice);
  const [personCount, setPersonCount] = useState(1);

  const handleDecreaseCount = () => {
    if (personCount === 1) {
      return;
    } else {
      setPersonCount((prev) => prev - 1);
    }
    handlecalculateTotalPrice("decrease");
  };
  const handleEncreasCount = () => {
    setPersonCount((prev) => prev + 1);
    handlecalculateTotalPrice("encreas");
  };

  const handlecalculateTotalPrice = (opration: string) => {
    if (opration === "decrease") {
      if (personCount === 1) {
        return;
      } else {
        setTotalPrice((prev) => prev - tripPrice);
      }
    }
    if (opration === "encreas") {
      setTotalPrice((prev) => prev + tripPrice);
    }
  };

  //getDate
  return (
    <>
      <section className="mx-auto container">
        <header className="p-6 pt-10 shadow-lg ">
          <div className="grid grid-col-1 gap-y-2 sm:grid-cols-2 items-center">
            <div className="text-2xl text-white">
              <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item>
                  <HiHome className="text-white me-2" />
                  <Link className="text-white" to={"/"}>
                    Home
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link className="text-white" to={"/categories"}>
                    Categories
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link
                    className="text-white capitalize"
                    to={`/categories/${param.category}`}
                  >
                    {param.category}
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span className=" capitalize">{trip?.tripName}</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="justify-self-center md:justify-self-end">
              <Button className="" color={"light"} onClick={() => navigate(-1)}>
                Back
                <IoArrowUndoSharp className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <h2 className="text-4xl capitalize text-center font-semibold mt-4">
            {trip?.tripName}
          </h2>
        </header>
        {/*  */}
        <div className="mt-20 px-2">
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {trip?.images.map((img, i) => {
              return i === 0 ? (
                <img
                  key={i}
                  className="col-span-1 md:col-span-2 lg:col-span-2 w-full h-96 rounded-xl"
                  src={`${baseURL}/images/${img}`}
                  alt="trip image"
                />
              ) : (
                <img
                  key={i}
                  className="w-full h-96 rounded-xl"
                  src={`${baseURL}/images/${img}`}
                  alt="trip image"
                />
              );
            })}
          </div>
          {/*  */}
          <div className="mt-14 mb-24 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-16 lg:gap-x-64">
            <p className="font-semibold ">{trip?.description}</p>
            {/*  */}
            <div className="">
              <h2 className="font-semibold text-lg text-[#152C5B] dark:text-white">
                Start Booking
              </h2>
              <h2 className="text-[#1ABC9C] font-semibold text-3xl">
                ${totalPrice}{" "}
                <span className="font-thin text-[#B0B0B0]">
                  {personCount === 1 ? "per person" : "total"}
                </span>
              </h2>
              {/*  */}
              <h2 className="mt-10">Capacity</h2>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseCount()}
                  className="bg-red-500 rounded-sm text-white px-4 py-1 font-bold"
                >
                  -
                </button>

                <span className="dark:bg-slate-700 text-[#152C5B] dark:text-white rounded-sm px-9 py-1 font-bold">
                  {personCount} person
                </span>

                <button
                  onClick={() => handleEncreasCount()}
                  className="bg-green-400 rounded-sm text-white px-4 py-1 font-bold"
                >
                  +
                </button>
              </div>
              <h2 className="mt-5">Pick a Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date as Date)}
                dateFormat={`  yyyy-MM-dd`}
                filterDate={(date) => date.getDay() !== 1}
                className="dark:bg-slate-700 rounded-lg text-[#152C5B] dark:text-white"
                showIcon
                icon={<FcCalendar className="mt-0.5" />}
              />

              <Button
                gradientDuoTone="cyanToBlue"
                className="p-2 hover:scale-105 hover:shadow-lg duration-500 mt-5 w-fit "
                as={Link}
                to={"/booking"}
                state={{
                  bookingInfo: {
                    date: formattedDate,
                    tripId: tripPrice,
                    totalPrice: totalPrice,
                  },
                }}
              >
                Continue Booking
              </Button>

              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trip;
