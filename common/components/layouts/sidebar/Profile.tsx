import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useMenu } from "@/common/stores/menu";

import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import ProfileHeader from "./ProfileHeader";
import ThemeToggle from "./ThemeToggle";
import IntlToggle from "./IntlToggle";

const Profile = () => {
  const [mounted, setMounted] = useState(false);
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const imageSize = isOpen ? 80 : 40;

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 z-40 w-full bg-neutral-50/90 p-4 shadow-sm backdrop-blur-md dark:border-b dark:border-neutral-800 dark:bg-neutral-900/90 lg:static lg:top-auto lg:left-auto lg:right-auto lg:z-auto lg:w-full lg:border-none lg:!bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none",
        isOpen && "fixed inset-0 z-50 flex flex-col h-[100dvh] !bg-neutral-50 dark:!bg-neutral-900 p-4 overflow-hidden shadow-none rounded-none border-none",
      )}
    >
      <div className={clsx(
        "flex items-center justify-between md:px-2 lg:flex-col lg:space-y-4 shrink-0",
        isOpen && "pb-3 border-b border-neutral-200 dark:border-neutral-800"
      )}>
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
        <div
          className={clsx(
            "mt-1 flex items-center gap-4 lg:hidden",
            isOpen && "flex-row-reverse items-center justify-end gap-3",
          )}
        >
          <div className="flex gap-2">
            <IntlToggle />
            <ThemeToggle />
          </div>
          <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="flex-1 overflow-y-auto pt-2 pb-16 lg:hidden">
            <MobileMenu />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
