import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-700 selection:text-white">
      <Header />
      <Banner />
      <Ticker />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;

