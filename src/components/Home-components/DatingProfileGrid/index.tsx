"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { profiles } from "./profile";

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  matchPercentage: number;
  verified: boolean;
  bio: string;
  coverImage: string;
  profileImage: string;
}

const ProfileCard = ({ profile }: { profile: Profile }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden relative w-[100%] max-w-xs mx-auto">
      <div className="relative w-full h-28">
        <Image
          src={profile.coverImage}
          alt={`${profile.name}'s cover`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full">
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-3 pb-4 px-6">
        <div className="flex pb-4 justify-between items-center">
          <div className="items-center">
            <h3 className="font-bold">
              {profile.name}, {profile.age}
            </h3>
            <p className="text-gray-500">{profile.location}</p>
          </div>
          <div className="text-xs text-right">
            <div className="text-sm font-semibold">
              {profile.matchPercentage}% Match
            </div>
            {profile.verified && (
              <div className="flex items-center gap-1">
                <RiVerifiedBadgeFill size={18} className="text-blue-500" />
                <span className="text-[10px]"> Verified Address</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-3">{profile.bio}</p>

        <div className="flex justify-between items-center">
          <div className="bg-[#EF2424] text-[10px] text-white py-1 px-3 rounded-full">
            More Info
          </div>
          <div
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {isLiked ? (
              <GoHeartFill size={25} color="#EF2424" />
            ) : (
              <GoHeart size={25} color="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DatingProfileGrid(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
