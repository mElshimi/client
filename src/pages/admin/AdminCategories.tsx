import { Button, Pagination, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryRow from "../../components/mwtravel/CategoryRow/CategoryRow";
import { usePagination } from "../../hooks";
import { ICategory } from "../../interfaces/interfaces";
import { actGetCategories } from "../../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const AdminCategories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const { recordsRender, totalPages } = usePagination<ICategory>({
    records,
    recordsPerPage,
    currentPage,
  });

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);
  return (
    <>
      <header className="dark:bg-slate-700 shadow-lg py-10 grid grid-cols-1 md:grid-cols-2  px-5">
        <div>
          <h2 className="text-xl font-bold">Categories Table</h2>
          <p>You can check all details</p>
        </div>
        <div className="w-fit md:justify-self-end">
          <Button as={Link} to={"/admin/category-data"}>
            Add New Category
          </Button>
        </div>
      </header>
      <div className="overflow-x-auto container mx-auto my-5 mt-12">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Images</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {recordsRender.map((record) => {
              return <CategoryRow category={record} />;
            })}
          </Table.Body>
        </Table>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          layout="table"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default AdminCategories;
