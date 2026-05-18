import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import HomePage from "./landing_Page/home/HomePage";
import Signup from "./landing_Page/signup/Signup";
import AboutPage from "./landing_Page/about/AboutPage";
import ProductPage from "./landing_Page/product/ProductPage";
import PricingPage from "./landing_Page/pricing/PricingPage";
import SupportPage from "./landing_Page/support/SupportPage";

import Navbar from "./landing_Page/Navbar";
import Footer from "./landing_Page/Footer";
import NotFound from "./landing_Page/NotFound";
import Login from "./landing_Page/login/Login";

// DASHBOARD
// import Dashboard from "./dashboard/src/components/Dashboard";

// PROTECTED ROUTE
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppLayout = () => {
  const location = useLocation();

  const isDashboard =
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* NAVBAR */}
      {!isDashboard && <Navbar />}

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        {/* PROTECTED DASHBOARD */}
        {/* 
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        */}

        {/* OTHER PAGES */}
        <Route path="/about" element={<AboutPage />} />

        <Route path="/product" element={<ProductPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/support" element={<SupportPage />} />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      {!isDashboard && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);