"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ProfileHeader() {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState(() => 
    localStorage.getItem('coverImage') || "/palm-cover.svg"
  );
  const [profileImage, setProfileImage] = useState(() => 
    localStorage.getItem('profileImage') || "/temi-full.svg"
  );
  const coverInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setCoverImage(imageDataUrl);
        localStorage.setItem('coverImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setProfileImage(imageDataUrl);
        localStorage.setItem('profileImage', imageDataUrl);
        
        window.dispatchEvent(new Event('profileImageUpdated'));
      };
      reader.readAsDataURL(file);
    }
  };

  const BackClick = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[250px]">
        <Image 
          src={coverImage} 
          alt="Cover" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full rounded-xl" 
        />
        <input 
          type="file" 
          ref={coverInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={handleCoverImageUpload}
          aria-label="Upload cover image"
        />
        <div 
          className="absolute top-4 right-4 cursor-pointer text-white bg-black bg-opacity-[60%] px-5 py-2 text-sm rounded-lg"
          onClick={() => coverInputRef.current?.click()}
        >
          Update Cover
        </div>
        <div onClick={BackClick} className="absolute top-4 cursor-pointer left-8 text-white bg-black bg-opacity-[60%] px-5 py-2 text-sm rounded-lg">
          Back
        </div>
      </div>

      {/* Desktop Profile Section */}
      <div className="hidden lg:flex absolute -bottom-2 left-0 right-0 items-end px-4 sm:px-6 lg:pl-10 lg:pr-3 -mb-12">
        <div className="relative">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src={profileImage} 
              alt="Profile" 
              layout="fill" 
              objectFit="cover"
              className="rounded-xl" 
            />
            <input 
              type="file" 
              ref={profileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleProfileImageUpload}
              aria-label="Upload profile image"
            />
            <div 
              className="absolute -bottom-6 -right-6 bg-blue-500 text-white rounded-full p-2 m-2 cursor-pointer"
              onClick={() => profileInputRef.current?.click()}
            >
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
          <div className="relative w-[150px] h-[150px] rounded-xl overflow-hidden shadow-lg mb-4">
            <Image 
              src={profileImage} 
              alt="Profile" 
              layout="fill" 
              objectFit="cover" 
            />
            <input 
              type="file" 
              ref={profileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleProfileImageUpload}
              aria-label="Upload profile image"
            />
            <div 
              className="absolute bottom-14 right-14 bg-blue-500 text-white rounded-full p-2 m-2 cursor-pointer"
              onClick={() => profileInputRef.current?.click()}
            >
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