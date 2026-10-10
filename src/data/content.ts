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
import type { Project, Service, Skill, Social, TeamMember } from "../types";

// ⚠️ PLACEHOLDERS: every value in this file is meant to be replaced with real info.

export const site = {
  name: "WebForge",
  email: "hello@webforge.dev", // use a shared team inbox, not one person's email
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
    id: "local-business",
    title: "Local Business Website",
    description:
      "A responsive multi-section website with a contact form and SEO-friendly structure.",
    tags: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "restaurant",
    title: "Restaurant Landing Page",
    description:
      "A mobile-first landing page featuring a menu, gallery and reservation call-to-action.",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard UI",
    description:
      "A clean dashboard interface with reusable cards, charts and a light/dark theme.",
    tags: ["React", "Tailwind"],
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
    id: "pain",
    name: "Pain",
    role: "Front-End Developer",
    bio: "Turns designs into fast, accessible React interfaces.",
    links: [{ label: "GitHub", href: "https://github.com/", icon: FaGithub }],
  },
  {
    id: "member-2",
    name: "Teammate Two",
    role: "Role Title",
    bio: "One short sentence about what they do best.",
    links: [{ label: "GitHub", href: "https://github.com/", icon: FaGithub }],
  },
  {
    id: "member-3",
    name: "Teammate Three",
    role: "Role Title",
    bio: "One short sentence about what they do best.",
    links: [{ label: "LinkedIn", href: "https://linkedin.com/", icon: FaLinkedin }],
  },
];
