import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import bpsImg from "@/public/bps.png";
import eduImg from "@/public/edu.png";
import lawImg from "@/public/law.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master In Computer Application",
    location: "M.D.U., Rohtak, Haryana",
    description:
      "I completed my post graduation in computer applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Ducat, Gurugram, Haryana",
    description:
      "I joined Ducat and learnt many skills as u seen in my skills section above.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-present",
  },
  {
    title: "Front-End Developer",
    location: "Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat, Haryana",
    description:
      "I as working as a front-end developer for 2 years in B.P.S. Mahila Vishwavidyalya, Khanpur, Sonipat. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Department of Laws, Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat, Haryana",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Department of Education, Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat, Haryana",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "B.P.S. University",
    description:
      "I worked as a full-stack developer in this University for 2 years. Students, alumini and teaching faculty meets at digital platforms.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: bpsImg,
  },
  {
    title: "B.P.S. Department of Laws",
    description:
    "I worked as a full-stack developer in this University department for 2 years and provide tech. support. Students, alumini and teaching faculty meets at digital platforms.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: lawImg,
  },
  {
    title: "B.P.S. Department of Education",
    description:
    "I worked as a full-stack developer in this University department for 2 years and provide tech. support. Students, alumini and teaching faculty meets at digital platforms.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: eduImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Vertical Timeline",
  "SQL",
  "Framer Motion",
] as const;