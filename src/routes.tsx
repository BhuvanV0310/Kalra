import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));

// Services pages
const Services = lazy(() => import("@/pages/Services"));
const LocalShifting = lazy(() => import("@/pages/Services/Home-Relocation"));
const GoodsPackingAndMoving = lazy(() => import("@/pages/Services/Office-Relocation"));
const CarCarrier = lazy(() => import("@/pages/Services/Car-Bike-Relocation"));
const StorageServices = lazy(() => import("@/pages/Services/Packaging-of-Goods"));
const LogisticsServices = lazy(() => import("@/pages/Services/Trained-Team"));
const WarehouseStorage = lazy(() => import("@/pages/Services/Warehouse-and-Storage-Services"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/local-shifting" element={<LocalShifting />} />
          <Route path="services/goods-packing" element={<GoodsPackingAndMoving />} />
          <Route path="services/goods-packing-and-moving" element={<GoodsPackingAndMoving />} />
          <Route path="services/car-carrier" element={<CarCarrier />} />
          <Route path="services/storage-services" element={<StorageServices />} />
          <Route path="services/logistics-services" element={<LogisticsServices />} />
          <Route path="services/Home-Relocation" element={<LocalShifting />} />
          <Route path="services/Office-Relocation" element={<GoodsPackingAndMoving />} />
          <Route path="services/Car-Bike-Relocation" element={<CarCarrier />} />
          <Route path="services/Packaging-of-Goods" element={<StorageServices />} />
          <Route path="services/Trained-Team" element={<LogisticsServices />} />
          <Route path="services/Warehouse-and-Storage-Services" element={<WarehouseStorage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;