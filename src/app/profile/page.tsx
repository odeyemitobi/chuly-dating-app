"use client";

import React from "react";
import ProfileMenu from "@/components/ProfileMenu";
import ProfileHeader from "@/components/Profile-components/ProfileHeader";
import ProfilePhotoUpload from "@/components/Profile-components/ProfilePhotoUpload";
import ProfileDetails from "@/components/Profile-components/ProfileDetails";

export default function Profile() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xxl:pl-12 xxl:pr-36">
      <div className="lg:pt-24 pt-10 flex flex-col lg:flex-row">
        <div className="block cursor-pointer self-start mb-4">
          <ProfileMenu />
        </div>
        <div className="flex-grow lg:ml-24">
          <div>
            <ProfileHeader />
          </div>
          <div className="lg:mt-32 mt-5">
            <ProfilePhotoUpload />
          </div>
          <div className="lg:my-10 my-5">
            <ProfileDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
