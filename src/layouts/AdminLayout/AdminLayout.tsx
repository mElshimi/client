import { Avatar, DarkThemeToggle, Dropdown, Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/common/SideBar/SideBar";
import { useAppDispatch } from "../../store/hook";
import { toggle } from "../../store/theme/themeSlice";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //check window width for auto set sidebar collapse for responsive after component did mount
    if (window.innerWidth < 900) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    // event for check width while resizing the window
    window.addEventListener("resize", function () {
      if (window.innerWidth < 900) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  }, []);

  return (
    <>
      <div className="flex dark:bg-slate-800 dark:text-white">
       
          <SideBar open={open} />
       

        <div className="w-full h-screen overflow-y-auto ">
          <header
            className={`flex fixed ${
              open ? "navclose" : "navOpen"
            } z-40 bg-gray-50 dark:bg-gray-800 items-center py-4 pe-10 `}
          >
            <div className="flex-grow">
              <button onClick={() => setOpen((prev) => !prev)}>
                <FaBars className="text-2xl  mb-5" />
              </button>
            </div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Profile</Dropdown.Item>

              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Flowbite>
              <div onClick={() => dispatch(toggle())}>
                <DarkThemeToggle className="dark:text-yellow-300 ms-2  w-fit" />
              </div>
            </Flowbite>
          </header>
          <div className="mt-[82px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
