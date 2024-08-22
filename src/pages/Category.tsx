import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../components/mwtravel/CategoryHeader/CategoryHeader";
import RenderList from "../components/common/RenderList/RenderList";
import { Loading } from "../components/feedback";
import TripCol from "../components/mwtravel/TripCol/TripCol";
import { usePagination } from "../hooks";
import { ITrip } from "../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  actGetTripsByCategory,
  categoryCleanUp,
} from "../store/trips/tripsSlice";
import { Pagination } from "flowbite-react";

const Category = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.trips);

  useEffect(() => {
    dispatch(actGetTripsByCategory(params.category as string));
    return () => {
      dispatch(categoryCleanUp());
    };
  }, [dispatch, params]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const { recordsRender, totalPages } = usePagination<ITrip>({
    records,
    recordsPerPage,
    currentPage,
  });

  return (
    <>
      <section>
        <CategoryHeader categoryName={params.category} />
        <div className="container mx-auto my-20">
          <Loading status={loading} error={error}>
            <RenderList<ITrip>
              records={recordsRender}
              className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              renderItem={(record) => <TripCol trip={record} />}
            />
          </Loading>
        </div>
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            layout="table"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      </section>
    </>
  );
};

export default Category;
