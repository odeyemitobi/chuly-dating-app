import { IconType } from "react-icons";
import {
  FaUmbrellaBeach,
  FaBicycle,
  FaUtensils,
  FaRunning,
  FaPlane,
  FaPaintBrush,
  FaHistory,
  FaTools,
  FaCamera,
  FaBook,
  FaYarn,
} from "react-icons/fa";
import { MdMuseum } from "react-icons/md";
import {
  RiUser3Fill,
  RiBriefcaseFill,
  RiUserHeartFill,
  RiMapPinFill,
  RiRulerFill,
  RiScalesFill,
  RiFlagFill,
} from "react-icons/ri";
import { BiChurch, BiMale } from "react-icons/bi";

export interface IconItemProps {
  icon: IconType;
  color: string;
  bgColor: string;
  label: string;
}

export interface AboutMeItemProps {
  icon: IconType;
  color: string;
  bgColor: string;
  label: string;
  value: string;
}

export const hobbies: IconItemProps[] = [
  {
    icon: FaUmbrellaBeach,
    color: "text-green-600",
    bgColor: "bg-green-100",
    label: "Laying on the Beach",
  },
  {
    icon: FaBicycle,
    color: "text-red-600",
    bgColor: "bg-red-100",
    label: "Biking",
  },
  {
    icon: FaUtensils,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    label: "Cooking",
  },
  {
    icon: FaRunning,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    label: "Dancing",
  },
  {
    icon: MdMuseum,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Museums & Arts",
  },
];

export const interests: IconItemProps[] = [
  {
    icon: FaPlane,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Travel",
  },
  {
    icon: FaPaintBrush,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    label: "Drawing",
  },
  {
    icon: FaHistory,
    color: "text-red-600",
    bgColor: "bg-red-100",
    label: "History",
  },
  {
    icon: FaTools,
    color: "text-green-600",
    bgColor: "bg-green-100",
    label: "Woodworking",
  },
  {
    icon: FaCamera,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    label: "Photography",
  },
  {
    icon: FaBook,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    label: "Poetry",
  },
  {
    icon: FaYarn,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    label: "Knitting",
  },
];

export const aboutMe: AboutMeItemProps[] = [
  {
    icon: BiMale,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Gender",
    value: "Male",
  },
  {
    icon: RiUser3Fill,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Age",
    value: "27",
  },
  {
    icon: RiBriefcaseFill,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Occupation",
    value: "Engineer",
  },
  {
    icon: RiUserHeartFill,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Relationship",
    value: "Single",
  },
  {
    icon: RiMapPinFill,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    label: "Location",
    value: "Lagos",
  },
  {
    icon: RiRulerFill,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Height range",
    value: "5'5 - 6'0",
  },
  {
    icon: RiScalesFill,
    color: "text-green-600",
    bgColor: "bg-green-100",
    label: "Weight range",
    value: "60 - 70kg",
  },
  {
    icon: BiChurch,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    label: "Religion",
    value: "Christianity",
  },
  {
    icon: RiFlagFill,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    label: "Nationality",
    value: "Nigerian",
  },
];
