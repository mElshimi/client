import { Button, Drawer, Footer } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";
import { IDrawerProps } from "../../../interfaces/interfaces";
import AnimatedHamburgerButton from "../../AnimatedHamburgerButton/AnimatedHamburgerButton";
const DraweR = ({ active, setActive, links }: IDrawerProps) => {
  return (
    <>
      <Drawer open={active} onClose={() => setActive(false)}>
        <div className="flex justify-between">
          <img className=" w-20" src={logo} alt="mw-travels logo" />
          <AnimatedHamburgerButton active={active} setActive={setActive} />
        </div>
        <Drawer.Items>
          <div className="flex flex-col justify-center items-center gap-y-3 mt-12">
            {links.map((link) => {
              return (
                <NavLink
                  className={`text-xl hover:scale-105 hover:text-[#06b6d4] duration-300`}
                  key={link.name}
                  onClick={() => setActive(false)}
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <Footer.Divider />
            <div>
              <Button
                color="white"
                className={"mb-3 hover:scale-105 hover:shadow-lg duration-500"}
                as={NavLink}
                to="auth"
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
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DraweR;
