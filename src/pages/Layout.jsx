import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialSidebar";
import AdmissionModal from "../components/AdmissionModal"; // ⬅️ Add this

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdmissionModal /> {/* ⬅️ Place it here */}
      <Navbar />
      <SocialIcons />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
