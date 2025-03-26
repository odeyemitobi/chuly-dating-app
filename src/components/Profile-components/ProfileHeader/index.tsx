"use client";

import React from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function ProfileHeader() {
  return (
    <div className="relative w-full">
      {/* Cover Section - Same for both mobile and desktop */}
      <div className="relative w-full h-[250px]">
        <Image
          src="/palm-cover.svg"
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-xl"
        />
        <div className="absolute top-4 right-4 cursor-pointer text-white bg-black bg-opacity-[60%] px-5 py-2 text-sm rounded-lg">
          Update Cover
        </div>
        <div className="absolute top-4 cursor-pointer left-8 text-white bg-black bg-opacity-[60%] px-5 py-2 text-sm rounded-lg">
          Back
        </div>
      </div>

      {/* Desktop Profile Section */}
      <div className="hidden lg:flex absolute -bottom-2 left-0 right-0 items-end px-4 sm:px-6 lg:pl-10 lg:pr-3 -mb-12">
        <div className="relative">
          <div className="w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/temi-full.svg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white rounded-full p-2 m-2">
              <FiPlus />
            </div>
          </div>
        </div>

        <div className="ml-6 mt-7 mb-auto">
          <div className="flex items-center">
            <h1 className="font-semibold mr-2">Temiloluwa, 27</h1>
            <FaEdit className="text-gray-500 cursor-pointer" />
          </div>
          <p className="text-sm font-semibold pl-0.5">Lagos</p>
        </div>
        
        <div className="ml-auto flex space-x-4">
          <div className="bg-[#EF2424] text-white px-4 py-2 text-sm rounded-full">
            Edit Profile
          </div>
          <div className="bg-[#EF2424] text-white px-4 py-2 text-sm rounded-full">
            Edit Match Setup
          </div>
        </div>
      </div>

      {/* Mobile Profile Section */}
      <div className="lg:hidden px-4 -mt-16">
        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="/temi-full.svg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-10 right-12 bg-blue-500 text-white rounded-full p-2 m-2">
              <FiPlus />
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="flex justify-center items-center">
              <h1 className="font-semibold mr-2">Temiloluwa, 27</h1>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </div>
            <p className="text-sm font-semibold">Lagos</p>
          </div>

          <div className="flex space-x-4">
            <div className="bg-[#EF2424] text-white px-4 py-2 text-sm rounded-full">
              Edit Profile
            </div>
            <div className="bg-[#EF2424] text-white px-4 py-2 text-sm rounded-full">
              Edit Match Setup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}