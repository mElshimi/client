import { Link } from "react-router-dom";
import { ICategory } from "../../../interfaces/interfaces";
import { baseURL } from "../../../services/axios-global";

const CategoryCol = ({ category }: { category: ICategory }) => {
  return (
    <>
      <Link
        to={`/categories/${category?.categoryName}`}
        state={{ categoryId: category.id }}
      >
        <div className="relative ">
          <img
            className="w-full h-96 rounded-xl"
            src={`${baseURL}/images/${category?.img}`}
            alt={`${category.categoryName} image`}
          />
          <div className="absolute bottom-0 rounded-b-xl left-0 w-full h-24 bg-gradient-to-t from-70% from-black to-transparent opacity-65"></div>
          <h2 className="absolute bottom-5 start-10 text-5xl font-bold text-white capitalize">
            {category?.categoryName}
          </h2>
        </div>
      </Link>
    </>
  );
};

export default CategoryCol;
