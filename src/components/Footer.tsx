import { socials, site } from "../data/content";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";

// Computed once at load time instead of on every render
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Brand />
        <p className="text-sm">
          © {year} {site.name}. All rights reserved.
        </p>
        <SocialLinks links={socials} className="text-xl" />
      </div>
    </footer>
  );
}
