// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import  store  from "./store/index.ts";
import { Provider } from "react-redux";
import 'react-datepicker/dist/react-datepicker.min.css'

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
);
