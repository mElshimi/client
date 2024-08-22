import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsThreads, BsTwitter } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";

const FooTer = () => {
  return (
    <Footer container className="mt-auto dark:bg-slate-800">
      <div className="w-full container mx-auto">
        <div className="grid w-full grid-cols-1 justify-between items-center sm:grid-cols-2">
          <div className="mx-auto sm:mx-0 ">
            <NavLink to={"/"}>
              <img className="w-20" src={logo} alt="wm-travels logo" />
            </NavLink>
          </div>
          <div className="flex justify-between sm:justify-normal sm:justify-self-end gap-x-10 ">
            <div>
              <Footer.Title title="Contacts" />
              <Footer.LinkGroup col>
                <div className="flex gap-x-2 items-center">
                  <FaLocationDot />
                  <Footer.Link href="https://maps.app.goo.gl/uBHtzmXaEU8rX3PU8">
                    Address, Egypt
                  </Footer.Link>
                </div>
                <div className="flex gap-x-2 items-center">
                  <FaPhone />
                  <Footer.Link href="tel:+496170961709">
                    +20123456789
                  </Footer.Link>
                </div>
                <div className="flex gap-x-2 items-center">
                  <MdEmail />
                  <Footer.Link href="mailto:someone@example.com">
                    email@test.com
                  </Footer.Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <div className="grid grid-cols-2 gap-y-3">
                <Footer.Icon icon={BsFacebook} />
                <Footer.Icon icon={BsInstagram} />
                <Footer.Icon icon={BsTwitter} />
                <Footer.Icon icon={BsThreads} />
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="text-center">
          <Footer.Copyright by="MW-Travels™" year={2024} />
        </div>
      </div>
    </Footer>
  );
};

export default FooTer;
