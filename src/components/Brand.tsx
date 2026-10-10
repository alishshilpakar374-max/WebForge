import { Hammer } from "lucide-react";
import { site } from "../data/content";

export default function Brand() {
  return (
    <a href="#" className="flex items-center gap-2 font-heading text-lg font-bold text-text">
      <Hammer className="h-5 w-5 text-primary" aria-hidden="true" />
      {site.name}
    </a>
  );
}
