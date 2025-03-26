"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ProfileWelcome(): React.ReactElement {
  const [relationshipType, setRelationshipType] = useState("Dating");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(() => 
    localStorage.getItem('profileImage') || "/temiloluwa.svg"
  );

  const relationshipTypes = ["Dating", "Single"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRelationshipTypeChange = (type: string) => {
    setRelationshipType(type);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleProfileImageUpdate = () => {
      const storedProfileImage = localStorage.getItem('profileImage');
      if (storedProfileImage) {
        setProfileImage(storedProfileImage);
      }
    };

    // Listen for custom event from other components
    window.addEventListener('profileImageUpdated', handleProfileImageUpdate);

    return () => {
      window.removeEventListener('profileImageUpdated', handleProfileImageUpdate);
    };
  }, []);

  return (
    <div className="lg:flex items-center space-x-4 w-full block">
      <div className="flex flex-col items-center lg:hidden mb-6">
        <div className="relative mb-4">
          <Image
            src={profileImage}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full w-[150px] h-[150px]"
          />
        </div>

        <div className="w-full text-center">
          <h2 className="text-lg font-semibold">Welcome, Temiloluwa</h2>

          <div className="pt-3">
            <span className="text-sm text-gray-600">
              My Profile Completeness
            </span>
          </div>

          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-[250px] bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#EF2424] h-3 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">60%</span>
          </div>

          <div className="relative flex flex-col items-center mt-4 space-y-2">
            <span className="text-base font-semibold">Relationship Type:</span>
            <div className="relative w-full max-w-[250px]">
              <div
                className="flex justify-between items-center cursor-pointer px-3 py-2 bg-white rounded-lg shadow"
                onClick={toggleDropdown}
              >
                <span className="text-sm">{relationshipType}</span>
                <MdOutlineKeyboardArrowDown size={16} color="#7C8DB5" />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow z-10">
                  {relationshipTypes
                    .filter((type) => type !== relationshipType)
                    .map((type) => (
                      <div
                        key={type}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center"
                        onClick={() => handleRelationshipTypeChange(type)}
                      >
                        {type}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden lg:block">
        <Image
          src={profileImage}
          alt="Profile"
          width={160}
          height={100}
          className="rounded-full w-[10rem] h-[10rem]"
        />
      </div>
      <div className="hidden lg:flex gap-[10rem]">
        <div>
          <h2 className="text-xl font-semibold">Welcome, Temiloluwa</h2>
          <div className="pt-3">
            <span className="text-sm text-gray-600">
              My Profile Completeness
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <div className="w-[300px] bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#EF2424] h-4 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">60%</span>
          </div>
        </div>
        <div className="relative flex items-center mt-2 space-x-6">
          <span className="text-xl font-semibold">Relationship Type:</span>
          <div className="relative">
            <div
              className="flex gap-10 items-center cursor-pointer px-2 py-2 bg-white rounded-lg shadow"
              onClick={toggleDropdown}
            >
              <span className="text-sm">{relationshipType}</span>
              <MdOutlineKeyboardArrowDown size={16} color="#7C8DB5" />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white rounded-lg shadow z-10">
                {relationshipTypes
                  .filter((type) => type !== relationshipType)
                  .map((type) => (
                    <div
                      key={type}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleRelationshipTypeChange(type)}
                    >
                      {type}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}