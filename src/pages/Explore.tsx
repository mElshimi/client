import { Breadcrumb, Pagination } from "flowbite-react";
import RenderList from "../components/common/RenderList/RenderList";
import { Loading } from "../components/feedback";
import { ITrip } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect, useState } from "react";
import { actGetTrips } from "../store/trips/tripsSlice";
import { TripCol } from "../components/mwtravel";
import { usePagination } from "../hooks";

const Explore = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.trips);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;

  const { recordsRender, totalPages } = usePagination<ITrip>({
    records,
    recordsPerPage,
    currentPage,
  });

  useEffect(() => {
    dispatch(actGetTrips());
  }, [dispatch]);

  return (
    <>
      <section className="container mx-auto">
        <div className="pt-3 mb-16">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item className="text-white" icon={HiHome}>
              <Link to={"/"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Explore</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2 className="text-2xl text-cyan-500 tracking-wide font-semibold text-center md:text-start mb-4">
          Explore ALL Trips
        </h2>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-bold col-span-2 text-center md:text-start dark:text-gray-300">
          Help you to find what you needed
        </h2>

        <div className="my-24">
          <Loading status={loading} error={error}>
            <RenderList<ITrip>
              records={recordsRender}
              className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              renderItem={(record) => <TripCol trip={record} />}
            />
          </Loading>
        </div>
        <div className="flex overflow-x-auto sm:justify-center">
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="table"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showIcons
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
