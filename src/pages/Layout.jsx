import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialSidebar"; 

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
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
