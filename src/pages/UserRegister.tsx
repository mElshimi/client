import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { PasswordField, SubmitForm, TextField } from "../components/Form";
import { actAuthSignup } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { signupSchema, signupType } from "../validations/signupSchema";

const UserRegister = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signupType>({
    mode: "all",
    resolver: zodResolver(signupSchema),
  });

  const submitSignup: SubmitHandler<signupType> = (data) => {
    dispatch(actAuthSignup(data));
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
            <h6 className="mt-8 font-semibold text-3xl">Sign up</h6>
            <p className="mt-7">If you already have an account register</p>
            <p className="mt-2">
              You can{" "}
              <Link
                className="text-red-500 font-bold hover:text-red-400 duration-700"
                to={"/auth"}
              >
                Login here !
              </Link>
            </p>
            <div className="mt-5">
              <form
                onSubmit={handleSubmit(submitSignup)}
                className="flex max-w-md flex-col mx-a gap-4"
              >
                <TextField
                  icon={<IoText />}
                  name="name"
                  label="User Name"
                  error={errors.name?.message}
                  placeholder="Enter your email"
                  control={control}
                  defaultValue={""}
                />
                <TextField
                  icon={<FaPhoneAlt />}
                  name="phone"
                  label="Phone Number"
                  error={errors.phone?.message}
                  placeholder="Enter your password"
                  control={control}
                  defaultValue={""}
                />
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
                <PasswordField
                  name="Repassword"
                  label="Confirm Password"
                  error={errors.Repassword?.message}
                  placeholder="Enter your confirm password"
                  control={control}
                  defaultValue={""}
                />
                <SubmitForm disabled={false} className="p-2">
                  Sign up
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
            Sing up MW-Travels
          </h2>
        </div>
      </section>
    </>
  );
};

export default UserRegister;
