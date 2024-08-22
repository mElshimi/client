import { useEffect } from "react";
import { ICategory } from "../../../../interfaces/interfaces";
import { actGetCategories } from "../../../../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import RenderList from "../../../common/RenderList/RenderList";
import { Loading } from "../../../feedback";
import { CategoryCol } from "../../../mwtravel";

const BrowseCategoties = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <>
      <section className="container mx-auto">
        <h2 className="text-2xl text-cyan-500 tracking-wide font-semibold text-center md:text-start mb-4">
          BROWSE BY CATEGORIES
        </h2>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-bold col-span-2 text-center md:text-start dark:text-gray-300">
          Help you to find what you needed
        </h2>
        <div className="mt-12">
          <Loading status={loading} error={error}>
            <RenderList<ICategory>
              records={records}
              className="grid-cols-1 md:grid-cols-2"
              renderItem={(record) => <CategoryCol category={record} />}
            />
          </Loading>
        </div>
      </section>
    </>
  );
};

export default BrowseCategoties;
