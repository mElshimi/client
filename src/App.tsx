import { Slide, ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { motion, useScroll } from "framer-motion";
import { useAppSelector } from "./store/hook";

function App() {
  const { scrollYProgress } = useScroll();
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
        transition={Slide}
        stacked
      />
      <motion.div
        className="fixed top-0 start-0 end-0 h-2.5 bg-[#06b6d4] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <AppRouter />
    </>
  );
}

export default App;
