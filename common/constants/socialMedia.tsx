import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsWhatsapp as WhatsappIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Instant Chat",
    description: "Chat directly via WhatsApp for quick consultation and fast responses.",
    name: "whatsapp",
    href: "https://wa.me/6285190830010?text=Halo%20Anduril,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website.",
    icon: <WhatsappIcon size={iconSize} />,
    backgroundIcon: <WhatsappIcon size={backgroundIconSize} />,
    textColor: "text-emerald-300",
    backgroundColor: "bg-emerald-300",
    borderColor: "border-emerald-300",
    backgroundGradientColor: "bg-gradient-to-b from-emerald-600 to-emerald-900",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    href: "mailto:andurila19@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    colSpan: "md:col-span-1",
    isShow: true,
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/rm_andurilahmad",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },

  {
    title: "Let's Connect",
    description:
      "Connect for collaboration or explore my professional experience.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/andurilahmad",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Join the Fun",
    description: "Follow me on TikTok for entertaining and engaging content.",
    name: "tiktok",
    href: "https://www.tiktok.com/@amad.ddd",
    icon: <TiktokIcon size={iconSize} />,
    backgroundIcon: <TiktokIcon size={backgroundIconSize} />,
    textColor: "text-neutral-400",
    backgroundColor: "bg-neutral-400",
    borderColor: "border-neutral-400",
    backgroundGradientColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
    isShow: false,
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    name: "github",
    href: "https://github.com/andurila19-lgtm",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];
