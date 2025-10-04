import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full px-2 pt-24">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default MainLayout;