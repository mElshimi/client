import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { PasswordField, SubmitForm, TextField } from "../components/Form";
import { logInSchema, logInType } from "../validations/logInSchema";

const UserLogin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<logInType>({
    mode: "all",
    resolver: zodResolver(logInSchema),
  });

  const submitLogin: SubmitHandler<logInType> = (data) => {
    navigate("/");
  };

  return (
    <>
      <section className="bg-slate-800 text-white min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className={`resSrc pt-3 ps-5 lg:mt-10 lg:ms-5 `}>
          <div className="flex justify-between">
            <Link to={"/"}>
              <img className="mr-3 w-20" src={logo} alt="wm-travels" />
            </Link>
          </div>

          <div className="mt-2 md:mx-32">
            <h6 className="mt-16 font-semibold text-3xl">Login</h6>
            <p className="mt-7">If you don't have an account sing-up</p>
            <p className="mt-2">
              You can{" "}
              <Link
                className="text-[#06b6d4] font-bold hover:text-cyan-300 duration-700"
                to={"/auth/sing-up"}
              >
                Resister here!
              </Link>
            </p>
            <div className="mt-10">
              <form
                onSubmit={handleSubmit(submitLogin)}
                className="flex max-w-md flex-col mx-a gap-4"
              >
                <TextField
                  icon={<MdAlternateEmail />}
                  name="email"
                  label="Email Address"
                  error={errors.email?.message}
                  placeholder="Enter your email"
                  control={control}
                  defaultValue={""}
                />
                <PasswordField
                  name="password"
                  label="Password"
                  error={errors.password?.message}
                  placeholder="Enter your password"
                  control={control}
                  defaultValue={""}
                />

                <Link className="w-fit ms-auto" to={"/"}>
                  Forgot Password?
                </Link>
                <SubmitForm disabled={false} className="p-2">
                  Login
                </SubmitForm>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
        <div
          className={`bgAuth rounded-lg  mt-5 hidden me-10 lg:flex items-end`}
        >
          <h2 className="text-[40px] font-bold text-white ms-20 mb-24">
            Sing in MW-Travels
          </h2>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
