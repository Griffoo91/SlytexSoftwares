import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user2.png";
import user4 from "../assets/profile-pictures/user2.png";
import user5 from "../assets/profile-pictures/user2.png";
import user6 from "../assets/profile-pictures/user2.png";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Griffine Ombogo",
    company: "Slytex Softwares",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team is responsive, professional, and deliveres results beyond expectations.",
  },
  {
    user: "Joseph Mwalya",
    company: "Slytex Softwares",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Engineer Amos",
    company: "Slytex Softwares",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Harison Opondo",
    company: "The Polished Professional",
    image: user4,
    text: "Working with the team at Slytex Softwares was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Anonymous User",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Peterson Omondi",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const services = [
  {
    icon: <BotMessageSquare />,
    text: "AI Integration",
    description:
      "Streamline customer service with smart chatbots and AI, automating tasks and enhancing user interactions 24/7.",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplatform Compatibility",
    description:
      "Build apps that work seamlessly across Android, iOS, and web, delivering a unified user experience.",
  },
  {
    icon: <ShieldHalf />,
    text: "Security Features",
    description:
      "Secure your software with advanced encryption, authentication, and protection against cyber threats.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Features",
    description:
      "Enable instant updates and live interactions to keep users connected and engaged in real-time.",
  },
  {
    icon: <PlugZap />,
    text: "Maintenance and Support",
    description:
      "Ensure peak performance with regular updates, troubleshooting, and ongoing system care.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboards",
    description:
      "Gain actionable insights with dynamic dashboards that visualize data and support smart decisions.",
  },
];

export const checklistItems = [
  {
    title: "Healthcare",
    description:
      "Enhance patient care and streamline operations with tailored healthcare software, including telemedicine and EHR systems.",
  },
  {
    title: "FinTech",
    description:
      "Drive innovation with secure and efficient financial tools like payment gateways, digital wallets, and analytics solutions.",
  },
  {
    title: "AgriTech",
    description:
      "Boost agricultural productivity with smart solutions for precision farming, supply chain optimization, and analytics.",
  },
  {
    title: "EduTech",
    description:
      "Transform learning with e-learning platforms, virtual classrooms, and efficient student management systems.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "Ksh.3,500",
    features: [
      "Hosting Support",
      "Basic SEO Optimization",
      "Web Analytics",
      "Responsive Design",
      "Cross-Platform Compatibility",
    ],
  },
  {
    title: "Pro",
    price: "Ksh.10,000",
    features: [
      "All Basic Plan Features",
      "E-commerce Integration",
      "Content Section Management",
      "Payment Gateway Integration",
      "Customization and Branding",
    ],
  },
  {
    title: "Enterprise",
    price: "Ksh.20,000",
    features: [
      "All Pro Plan Features",
      "AI Integration",
      "Maintenance and Support Team",
      "Real-Time Data Synchronization",
      "Custom API integration",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Websites" },
  { href: "#", text: "Mobile applications" },
  { href: "#", text: "AI and Machine learning" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Services" },
  { href: "#", text: "Crooss-platform compatibility" },
  { href: "#", text: "Systems Projects" },
  { href: "#", text: "Investors" },
  { href: "#", text: "Basic installation guidance" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
