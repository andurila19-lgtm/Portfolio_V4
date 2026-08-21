import {
  BiHomeCircle as HomeIcon,
  BiCollection as ProjectIcon,
} from "react-icons/bi";
import {
  FiCode as SkillsIcon,
  FiGrid as ServicesIcon,
  FiBriefcase as ExperienceIcon,
  FiActivity as StatsIcon,
  FiMail as MailIcon,
} from "react-icons/fi";

import { MenuItemProps } from "../types/menu";

const iconSize = 18;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: <SkillsIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Skills",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
  },
  {
    title: "Services",
    href: "/services",
    icon: <ServicesIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Services",
  },
  {
    title: "Experience",
    href: "/experience",
    icon: <ExperienceIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Experience",
  },
  {
    title: "Stats",
    href: "/stats",
    icon: <StatsIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Stats",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <MailIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contact",
  },
];
