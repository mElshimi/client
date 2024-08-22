import { motion } from "framer-motion";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BrowseCategoties } from "../components/mwtravel/LandingPage";

const Categories = () => {
  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="my-24 container mx-auto"
      >
        <div className="mb-12">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item className="text-white" icon={HiHome}>
              <Link to={"/"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Categories</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <BrowseCategoties />
      </motion.section>
    </>
  );
};

export default Categories;
