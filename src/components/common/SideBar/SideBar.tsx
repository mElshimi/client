import { Sidebar } from "flowbite-react";
import {
  FcDoNotMix,
  FcConferenceCall,
  FcHome,
  FcLandscape,
  FcOk,
} from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";

const SideBar = ({ open }: { open: boolean }) => {
  const location = useLocation();
  return (
    <>
      <Sidebar
        className="h-screen"
        collapsed={open}
        aria-label="Sidebar  with content separator example"
      >
        <img src={logo} className="mr-3 w-20" alt="mw-travels logo" />
        <Sidebar.Items className="pt-8">
          <Sidebar.ItemGroup>
            {sideItems.map((item, i) => {
              return (
                <Sidebar.Item
                  active={location.pathname === item.path ? true : false}
                  as={Link}
                  to={item.path}
                  key={i}
                  icon={item.Icons}
                >
                  {item.title}
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SideBar;

const sideItems = [
  {
    title: "Home",
    Icons: FcHome,
    path: "/admin",
  },
  {
    title: "Users",
    Icons: FcConferenceCall,
    path: "/admin/users",
  },
  {
    title: "Trips",
    Icons: FcLandscape,
    path: "/admin/trips",
  },
  {
    title: "Categories",
    Icons: FcDoNotMix,
    path: "/admin/categories",
  },
  {
    title: "Booked",
    Icons: FcOk,
    path: "/admin/booked",
  },
];
