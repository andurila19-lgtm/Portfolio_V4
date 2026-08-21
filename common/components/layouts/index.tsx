"use client";

import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { consoleGreeting } from "@/common/utils/consoleGreeting";

import Background3D from "../elements/Background3D";

const Notif = dynamic(() => import("../elements/Notif"), { ssr: false });

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }

    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        delay: 50,
      });
    });

    consoleGreeting();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent text-neutral-900 transition-colors duration-300 dark:text-neutral-50">
      <Background3D />
      <Navbar />
      <main
        role="main"
        className="mx-auto w-full max-w-[1440px] flex-1 px-4 pt-16 pb-8 sm:px-6 sm:pt-18 lg:px-10 xl:px-12"
      >
        {children}
      </main>
      <Footer />
      <Notif />
    </div>
  );
};

export default Layouts;
