import { Outlet } from "react-router-dom";
import {Navbar, Footer, SocialSidebar, AdmissionModal} from "../components"; 

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdmissionModal /> 
      <Navbar />
      <SocialSidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
