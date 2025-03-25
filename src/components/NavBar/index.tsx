"use client";

import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Image from "next/image";

export default function Navbar(): React.ReactNode {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="px-4 sm:px-6 lg:px-10 xxl:pl-12 xxl:pr-36">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-11">
            <div className="pr-24">
              <div className="">
                <div className="lg:flex hidden items-center space-x-8 shadow-[5px_5px_5px_-3px_rgba(0,0,0,0.2)]">
                  <Image
                    src={"/chuly-logo.svg"}
                    alt="Logo"
                    width={85}
                    height={85}
                    className="hover:scale-110 transition-transform duration-300 py-3"
                  />
                  <span className="lg:text-3xl pr-8 text-xl font-bold font-jaini-purva">
                    Chuly
                  </span>
                </div>
                <div className="lg:hidden flex items-center space-x-4">
                  <Image
                    src={"/chuly-logo.svg"}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-transform duration-300 py-3"
                  />
                  <span className="lg:text-3xl pr-8 text-xl font-bold font-jaini-purva">
                    Chuly
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-11">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-2 border-[#3E7BEA] rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-[#3E7BEA] transition-all duration-300"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex items-center border border-[#000] border-opacity-[60%] rounded-full py-2 px-4 hover:bg-gray-100 transition-colors duration-300">
                <FaFilter className="mr-2" />
                Filter
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="">
              <Image
                src={"/Alarm.svg"}
                alt="Profile"
                width={30}
                height={20}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <Image
              src={"/temiloluwa.svg"}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <FaSearch className="" />
              <FaFilter className="" />
              <Image
                src={"/Alarm.svg"}
                alt="Notifications"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-300"
              />
              <Image
                src={"/temiloluwa.svg"}
                alt="Profile"
                width={35}
                height={20}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
