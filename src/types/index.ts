import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; // a React component, not a string!
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string; // "?" = optional
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: IconType; // react-icons components use IconType, lucide uses LucideIcon
}

export interface Social {
  label: string;
  href: string;
  icon: IconType;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  links: Social[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
