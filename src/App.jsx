import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Doctors from "./pages/Doctors";
import DoctorInfo from "./pages/DoctorInfo";
import Dashboard from "./pages/Dashboard";
import DoctorsFiltered from "./pages/DoctorsFiltered";
import Rating from "./pages/Rating";
import Favorite from "./pages/Favorite";
import FemaleDoctors from "./pages/FemaleDoctors";
import MaleDoctors from "./pages/MaleDoctors";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotificationSettings from "./pages/NotificationSettings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PasswordManager from "./pages/PasswordManager";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import Notifications from "./pages/Notifications";
import Chat from "./pages/Chat";
import DoctorProfile from "./pages/DoctorProfile";
import SelectAppointment from "./pages/SelectAppointment";
import AppointmentSummary from "./pages/AppointmentSummary";

import AppointmentLayout from "./pages/AppointmentLayout";
import Complete from "./pages/Complete";
import Upcoming from "./pages/Upcoming";
import Cancelled from "./pages/Cancelled";
import CancelAppointment from "./pages/CancelAppointment";
import Review from "./pages/Review";
import PaymentMethod from "./pages/PaymentMethod";
import AddCard from "./pages/AddCard";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorInfo />} />
         <Route path="/doctors/:filter" element={<DoctorsFiltered />} />
           <Route path="/rating" element={<Rating />} />
        <Route path="/favorite" element={<Favorite />} />
         <Route path="/doctors/female" element={<FemaleDoctors />} />
        <Route path="/doctors/male" element={<MaleDoctors />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notification-settings" element={<NotificationSettings />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/password-manager" element={<PasswordManager />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notifications" element={<Notifications />} />
<Route path="/chat/:doctorName" element={<Chat />} />
<Route path="/appointment/:doctor" element={<DoctorProfile />} />
<Route path="/appointment/select" element={<SelectAppointment />} />
<Route path="/appointment/confirm" element={<AppointmentSummary />} />
        <Route path="/appointments" element={<AppointmentLayout />}>
          <Route path="complete" element={<Complete />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="cancelled" element={<Cancelled />} />
        </Route>
        <Route path="/cancel-appointment" element={<CancelAppointment />} />
        <Route path="/review" element={<Review />} />
        
<Route path="/payment" element={<PaymentMethod />} />
<Route path="/add-card" element={<AddCard />} />
<Route path="/payment-checkout" element={<Payment />} />
<Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>

    </BrowserRouter>
  );
}