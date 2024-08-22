import { Table } from "flowbite-react";
import { ICategory } from "../../../interfaces/interfaces";
import { baseURL } from "../../../services/axios-global";

const CategoryRow = ({ category }: { category: ICategory }) => {
  return (
    <>
      <Table.Row
        key={category.id}
        className="bg-white w-full dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell className="text-gray-900 dark:text-white">
          <img
            className="w-24 h-16"
            src={`${baseURL}/images/${category?.img}`}
            alt={`${category.categoryName} image`}
          />
        </Table.Cell>
        <Table.Cell className="font-semibold">
          {category?.categoryName}
        </Table.Cell>
        <Table.Cell className="font-semibold">
          {category?.description}$
        </Table.Cell>
        <Table.Cell className="">
          <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
          <a className="font-medium text-cyan-600 hover:underline mx-2 dark:text-cyan-500">
            delete
          </a>
          <a className="font-medium text-cyan-600 hover:underline mx-2 dark:text-cyan-500">
            show
          </a>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default CategoryRow;
