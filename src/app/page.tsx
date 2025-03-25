"use client";

import React from "react";
import { MdMenu } from "react-icons/md";
import ProfileWelcome from "@/components/ProfileWelcome";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xxl:pl-12 xxl:pr-36">
      <div className="lg:pt-24 pt-10 flex flex-col lg:flex-row">
        <div className="block lg:hidden self-start mb-4">
          <MdMenu size={30} />
        </div>
        <div className="flex-grow lg:ml-24">
          <ProfileWelcome />
        </div>
      </div>
    </div>
  );
}