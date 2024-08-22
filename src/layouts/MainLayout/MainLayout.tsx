import { Outlet } from "react-router-dom";
import { FooTer, Header } from "../../components/common";

const MainLayout = () => {
  return (
    <>
      <main className="dark:bg-slate-800 dark:text-white overflow-hidden">
        <div className="min-h-screen flex flex-col">
          <Header />
          {/* <div className={`my-10`}> */}
          <Outlet />
          {/* </div> */}
          <FooTer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
