import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollTop";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RequireAuth from "./Pages/Services/RequireAuth";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route
          path="/service/:id"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
