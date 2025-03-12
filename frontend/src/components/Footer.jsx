import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 py-12 text-neutral-300 bg-transparent">
      {/* Background Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg rounded-xl"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
          <FooterColumn title="Resources" links={resourcesLinks} />
          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Community" links={communityLinks} />
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-6"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <SocialIcon Icon={Facebook} />
          <SocialIcon Icon={Twitter} />
          <SocialIcon Icon={Linkedin} />
          <SocialIcon Icon={Instagram} />
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-6 text-neutral-500">
          © {new Date().getFullYear()} Slytex Softwares. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Reusable Footer Column Component
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            href={link.href}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Social Media Icon Component
const SocialIcon = ({ Icon }) => (
  <a href="https://x.com/slytexsoftwares" className="p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition">
    <Icon size={20} className="text-white" />
  </a>
);

export default Footer;
