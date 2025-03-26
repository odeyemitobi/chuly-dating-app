"use client";

import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Image from "next/image";

const ProfilePhotoUpload = () => {
  const [aboutText, setAboutText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutText(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full px-0">
      <div className="rounded-lg mb-4 relative">
        <textarea
          value={aboutText}
          onChange={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="A few words about me"
          className="w-full lg:w-[50%] maxLg:w-[40%] lg:h-32 h-28 p-2 pl-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none placeholder-gray-500 lg:placeholder:px-6 placeholder:px-2 lg:pt-6 pt-4"
        />
        {!isFocused && !aboutText && (
          <FaPencilAlt className="absolute lg:top-7 top-5 left-[11.5rem] lg:left-[12rem] transform -translate-x-1/2 lg:translate-x-0 text-gray-500 w-3 h-3 cursor-pointer" />
        )}
      </div>

      {/* Photo upload grid */}
      <div className="bg-white w-full lg:w-[50%] maxLg:w-[40%] p-5 rounded-lg border">
        <div className="flex items-center gap-4 xlg:gap-7 overflow-x-auto xlg:overflow-visible pb-4 lg:pb-0">
          <div className="flex-shrink-0 xlg:flex-shrink-[unset]">
            <Image
              src="/temi-full.svg"
              alt="Profile photo"
              width={103}
              height={103}
              className="rounded-lg w-[103px] h-[103px] object-cover"
            />
          </div>

          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 xlg:flex-shrink-[unset] w-[120px] lg:w-auto min-w-[100px] lg:min-w-[unset]"
            >
              <div className="border p-3 lg:p-4 rounded-lg border-[#D9D9D9] h-[103px] flex flex-col justify-center">
                <div className="pb-2 text-xs text-[#00000099] opacity-[60%] text-center">
                  Add photo
                </div>
                <div className="grid place-items-center">
                  <Image
                    src="/add-image.svg"
                    alt="Add photo"
                    width={40}
                    height={30}
                    className="rounded-xl w-[40px] h-[40px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoUpload;
