import { Avatar, Button, Dropdown } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";
import { INavProps } from "../../../interfaces/interfaces";

const NavBar = ({ className, links }: INavProps) => {
  return (
    <nav>
      <div className={`flex justify-between items-center ${className}`}>
        <Link to={"/"} className="navlogo">
          <img src={logo} className="mr-3 w-20" alt="mw-travels logo" />
        </Link>
        <div className="navMenu">
          <ul className="flex gap-x-5">
            {links.map((link) => {
              return (
                <li
                  className={`hover:scale-105 hover:text-[#06b6d4] duration-300`}
                  key={link.name}
                >
                  <NavLink className={"font-medium text-xl "} to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <Dropdown
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
        </Dropdown> */}
        <div className="navBtn flex">
          <Button
            color="white"
            as={NavLink}
            to="auth"
            className="me-4 hover:scale-105 hover:shadow-lg duration-500"
          >
            Login
          </Button>
          <Button
            className={`hover:scale-105 hover:shadow-lg duration-500`}
            gradientDuoTone="cyanToBlue"
            as={NavLink}
            to="auth/sing-up"
          >
            Sing Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
