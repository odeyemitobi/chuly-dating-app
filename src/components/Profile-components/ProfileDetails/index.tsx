import React from "react";
import { hobbies } from "./details";
import { interests } from "./details";
import { aboutMe } from "./details";
import { IconItemProps } from "./details";
import { AboutMeItemProps } from "./details";
import { FaEdit } from "react-icons/fa";

const IconItem: React.FC<IconItemProps> = ({
  icon: Icon,
  color,
  bgColor,
  label,
}) => (
  <div className="items-center place-items-center text-center space-x-3">
    <div className={`p-4 lg:p-5 grid place-items-center rounded-full ${bgColor}`}>
      <Icon className={`text-4xl lg:text-6xl ${color}`} />
    </div>
    <div className="text-xs lg:text-sm pt-2">{label}</div>
  </div>
);

const AboutMeItem: React.FC<AboutMeItemProps> = ({
  icon: Icon,
  color,
  bgColor,
  label,
  value,
}) => (
  <div className="flex flex-col space-y-4">
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-full ${bgColor}`}>
        <Icon className={`text-xl ${color}`} />
      </div>
      <div className="flex w-full">
        <div className="w-32">
          <strong>{label}:</strong>
        </div>
        <div>
          <span>{value}</span>
        </div>
      </div>
    </div>
  </div>
);

const ProfileDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* My Hobbies Section */}
      <div className="bg-white p-4 lg:p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">My Hobbies</h2>
          <div>
            <FaEdit className="text-2xl text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-3 maxLg:grid-cols-4 gap-4">
          {hobbies.map((hobby, index) => (
            <IconItem key={index} {...hobby} />
          ))}
        </div>
      </div>
      {/* My Interests Section */}
      <div className="bg-white p-4 lg:p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">My Interest</h2>
          <div>
            <FaEdit className="text-2xl text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-3 maxLg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <IconItem key={index} {...interest} />
          ))}
        </div>
      </div>
      {/* About Me Section */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <div className="space-y-3">
          {aboutMe.map((item, index) => (
            <AboutMeItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;