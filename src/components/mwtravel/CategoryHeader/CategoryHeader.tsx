import { Breadcrumb, Button } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";

const CategoryHeader = ({ categoryName }: { categoryName?: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className=" container mx-auto shadow-lg">
        <div
          className={`container mx-auto flex justify-between items-center py-8`}
        >
          <div className="text-2xl text-white">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item>
                <HiHome className=" me-2" />
                <Link className="" to={"/"}>
                  Home
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link className="" to={"/categories"}>
                  Categories
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {categoryName === "special-offer" ? (
                  <span className="">Specail Offers</span>
                ) : (
                  <span className="capitalize ">{categoryName}</span>
                )}
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
        <div className="">
          {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-35% from-black to-transparent opacity-60"></div> */}
          <h2 className="text-center text-5xl font-semibold pb-5">
            {categoryName === "special-offer" ? (
              <span>Specail Offers</span>
            ) : (
              <span className="capitalize">{categoryName}</span>
            )}
          </h2>
        </div>
      </header>
    </>
  );
};

export default CategoryHeader;
