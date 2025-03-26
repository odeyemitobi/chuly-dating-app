"use client";

import React from "react";
import ProfileWelcome from "@/components/Home-components/ProfileWelcome";
import DatingProfileGrid from "@/components/Home-components/DatingProfileGrid";
import ProfileMenu from "@/components/ProfileMenu";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xxl:pl-12 xxl:pr-36">
      <div className="lg:pt-24 pt-10 flex flex-col lg:flex-row">
        <div className="block cursor-pointer self-start mb-4">
          <ProfileMenu />
        </div>
        <div className="flex-grow lg:ml-24">
          <div>
            <ProfileWelcome />
          </div>
          <div className="mt-10">
            <DatingProfileGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
