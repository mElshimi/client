import { DarkThemeToggle, Flowbite } from "flowbite-react";
import NavBar from "../NavBar/NavBar";
import AnimatedHamburgerButton from "../../AnimatedHamburgerButton/AnimatedHamburgerButton";
import { useState } from "react";
import logo from "../../../assets/imgs/logo.png";
import DraweR from "../Drawer/DraweR";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/hook";
import { toggle } from "../../../store/theme/themeSlice";

const Header = () => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <>
      <header className="container mx-auto flex items-center py-3 justify-between mt-2">
        <div className="flex-grow hidden md:block">
          <NavBar links={links} />
        </div>
        <AnimatedHamburgerButton active={active} setActive={setActive} />
        <Link to={"/"}>
          <img className="w-20 md:hidden" src={logo} alt="mw-travels logo" />
        </Link>

        <Flowbite>
          <div onClick={() => dispatch(toggle())}>
            <DarkThemeToggle className="dark:text-yellow-300 text-zinc-600 " />
          </div>
        </Flowbite>
      </header>
      <DraweR active={active} setActive={setActive} links={links} />
    </>
  );
};

export default Header;

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tours",
    path: "/explore",
  },
  {
    name: "About us",
    path: "/about-us",
  },
];
