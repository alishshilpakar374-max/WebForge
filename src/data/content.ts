import { CodeXml, Gauge, Palette } from "lucide-react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { nanoid } from "@reduxjs/toolkit";
import type { Project, Service, Skill, Social, TeamMember } from "../types";
import { WebForge, Restuarant, GH } from "../assets/img";

// ⚠️ PLACEHOLDERS: every value in this file is meant to be replaced with real info.

export const site = {
  logo: WebForge,
  name: "WebForge",
  email: "webforge374@gmail.com",
};

export const services: Service[] = [
  {
    id: "design",
    title: "Web Design",
    description:
      "Clean, modern interfaces that match your brand and guide visitors toward action.",
    icon: Palette,
  },
  {
    id: "frontend",
    title: "Front-End Development",
    description:
      "Fast, responsive React and TypeScript websites built with maintainable, scalable code.",
    icon: CodeXml,
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description:
      "Lightweight pages that load quickly, rank better, and work well for every user.",
    icon: Gauge,
  },
];

export const projects: Project[] = [
  {
    id: nanoid(),
    image: GH,
    title: " Guest House",
    description:
      "A heritage-inspired guest house website featuring room listings, booking options, dining, amenities, a gallery, and WhatsApp booking integration.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    repoUrl: "https://github.com/alishshilpakar374-max/Demo-GH",
    liveUrl: "https://demo-gh.vercel.app/",
  },
  {
    id: nanoid(),

    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio showcasing projects, technical skills, and contact information with a modern design and email contact integration.",
    tags: ["React", "TypeScript", "Tailwind CSS", "EmailJS", "Vercel"],
    repoUrl: "https://github.com/YOUR_USERNAME/YOUR_PORTFOLIO_REPO",
    liveUrl: "https://alishshilpakar.vercel.app/",
  },
  {
    id: nanoid(),
    image: Restuarant,
    title: "Waypoint Restaurant",
    description:
      "A modern restaurant website designed to showcase the menu, highlight the dining experience, and make it easy for customers to explore the restaurant and get in touch.",

    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/alishshilpakar374-max/ResturantApp",
    liveUrl: "https://restaurant-webforge.vercel.app/",
  },
];

// Only list tech your team can honestly work with
export const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
];

// Team-level links (ideally a GitHub organization, not one member's profile)
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: FaLinkedin },
];

export const team: TeamMember[] = [
  {
    id: nanoid(),
    name: "Alish Shilpakar",
    role: "Full-Stack Developer / Designer",
    bio: "Builds modern, responsive web applications with a focus on clean design and user experience.",
    links: [{ label: "GitHub", href: "https://github.com/", icon: FaGithub }],
  },
  {
    id: nanoid(),
    name: "Sameer Gapi",
    role: "Manager / Designer",
    bio: "Coordinates projects and creates thoughtful designs that balance business goals with user needs.",
    links: [
      { label: "GitHub", href: "https://github.com/tobi779", icon: FaGithub },
    ],
  },
  {
    id: nanoid(),
    name: "Bishal Kawan",
    role: "Full-Stack Developer / Designer",
    bio: "Develops functional web experiences by combining reliable code with intuitive, user-friendly design.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bishalkawan99",
        icon: FaGithub,
      },
    ],
  },
];
