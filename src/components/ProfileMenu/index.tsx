import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [profileImage, setProfileImage] = useState(() => 
    localStorage.getItem('profileImage') || "/temiloluwa.svg"
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: <TbGridDots />, text: "Dashboard", route: "/" },
    { icon: <LuCircleUserRound />, text: "My Profile", route: "/profile" },
    { icon: <GoHeart />, text: "Favorites", route: "/favorites" },
    { icon: <MdGroup />, text: "My Mutuals", route: "/mutuals" },
    { icon: <MdSubscriptions />, text: "My Subscribed", route: "/subscribed" },
    { icon: <MdCloudQueue />, text: "Interested in me", route: "/interested" },
    { icon: <MdSettings />, text: "Settings", route: "/settings" },
    { icon: <MdLogout />, text: "Logout", route: "/logout" },
  ];

  useEffect(() => {
    const activeMenuItem = menuItems.find(item => item.route === pathname);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.text);
    }
  }, [pathname]);

  useEffect(() => {
    const handleProfileImageUpdate = () => {
      const storedProfileImage = localStorage.getItem('profileImage');
      if (storedProfileImage) {
        setProfileImage(storedProfileImage);
      }
    };

    window.addEventListener('profileImageUpdated', handleProfileImageUpdate);

    return () => {
      window.removeEventListener('profileImageUpdated', handleProfileImageUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: { text: string, route: string }) => {
    setActiveItem(item.text);
    setIsOpen(false);
    router.push(item.route);
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
            <div className="p-4 justify-center text-center items-center">
              <div className="relative grid place-items-center mr-3 mb-2">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full w-[10rem] h-[10rem]"
                />
              </div>
              <span className="font-semibold">Temiloluwa</span>
            </div>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={getItemClasses(item.text)}
                onClick={() => handleMenuItemClick(item)}
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
                      src={profileImage}
                      alt="Profile"
                      width={120}
                      height={120}
                      className="rounded-full w-[8rem] h-[8rem]"
                    />
                  </div>
                  <span className="font-semibold text-xl">Temiloluwa</span>
                </div>
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClasses(item.text)}
                    onClick={() => handleMenuItemClick(item)}
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