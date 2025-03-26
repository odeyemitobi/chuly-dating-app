"use client";

import React from "react";
import ProfileMenu from "@/components/ProfileMenu";

export default function Profile() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xxl:pl-12 xxl:pr-36">
      <div className="lg:pt-24 pt-10 flex flex-col lg:flex-row">
        <div className="block cursor-pointer self-start mb-4">
          <ProfileMenu />
        </div>
        <div className="flex-grow lg:ml-24">
          Profile page
        </div>
      </div>
    </div>
  );
}
