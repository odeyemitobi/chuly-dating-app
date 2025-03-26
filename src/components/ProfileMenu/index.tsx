import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MdMenu,
  MdGroup,
  MdSubscriptions,
  MdCloudQueue,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: <TbGridDots />, text: "Dashboard" },
    { icon: <LuCircleUserRound />, text: "My Profile" },
    { icon: <GoHeart />, text: "Favorites" },
    { icon: <MdGroup />, text: "My Mutuals" },
    { icon: <MdSubscriptions />, text: "My Subscribed" },
    { icon: <MdCloudQueue />, text: "Interested in me" },
    { icon: <MdSettings />, text: "Settings" },
    { icon: <MdLogout />, text: "Logout" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (text: string) => {
    setActiveItem(text);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getItemClasses = (text: string) => {
    const baseClasses =
      "flex items-center px-4 py-3 my-5 rounded-xl cursor-pointer";
    const activeClasses =
      text === activeItem
        ? "text-white bg-[#EF2424] font-semibold"
        : "text-gray-700";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu Trigger Button */}
      <div className="block cursor-pointer z-50" onClick={toggleMenu}>
        <MdMenu size={30} />
      </div>

      {/* Desktop Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="hidden lg:block absolute top-full px-10 left-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg border z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b justify-center text-center items-center">
              <div className="relative grid place-items-center mr-3">
                <Image
                  src={"/temiloluwa.svg"}
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full "
                />
              </div>
              <span className="font-semibold">Temiloluwa</span>
            </div>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={getItemClasses(item.text)}
                onClick={() => handleMenuItemClick(item.text)}
              >
                <span className="mr-3 text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="items-center mb-4">
                  <div className="relative mr-4 mb-4">
                    <Image
                      src={"/temiloluwa.svg"}
                      alt="Profile"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <span className="font-semibold text-xl">Temiloluwa</span>
                </div>
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClasses(item.text)}
                    onClick={() => handleMenuItemClick(item.text)}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileMenu;
