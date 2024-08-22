import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { PasswordField, SubmitForm, TextField } from "../../components/Form";
import { logInSchema, logInType } from "../../validations/logInSchema";

const AdminLogin = () => {
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
    navigate("/admin");
  };

  return (
    <>
      <section className=" min-h-screen bg-slate-800 flex items-center justify-center text-white">
        <div className="container ">
          <img className="w-20 mx-auto mb-3" src={logo} alt="wm-travels" />
          <div className="p-14 rounded-2xl bg-opacity-75 bg-slate-900 w-full md:w-1/2 mx-auto">
            <h2>Welcome to MW-Travels</h2>
            <h2 className="font-bold text-3xl">Login</h2>

            <form
              onSubmit={handleSubmit(submitLogin)}
              className="flex flex-col mx-a gap-4"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
