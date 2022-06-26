import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollTop";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/:id" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
