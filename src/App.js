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
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserAppointment from "./Components/UserApointments/UserAppointment";
import Invoice from "./Pages/Invoice/Invoice";
import AllUser from "./Components/AllUser/AllUser";
import RequieAdmin from "./Pages/RequieAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Pages/Blog/Blog";

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
        <Route
          path="/Invoice/:id"
          element={
            <RequireAuth>
              <Invoice />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="profile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="users"
            element={
              <RequieAdmin>
                <AllUser />
              </RequieAdmin>
            }
          />
          <Route
            path="my_Appointments"
            element={
              <RequireAuth>
                <UserAppointment />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
