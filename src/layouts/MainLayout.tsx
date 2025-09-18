import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;