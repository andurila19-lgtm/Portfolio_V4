import {
  BiHomeCircle as HomeIcon,
  BiUser as AboutIcon,
  BiCollection as ProjectIcon,
  BiCategory as DashboardIcon,
  BiBook as ContactIcon,
} from "react-icons/bi";
import {
  FiGrid as ServicesIcon,
  FiBriefcase as IndustryIcon,
  FiFileText as CaseStudyIcon,
  FiTag as PricingIcon,
  FiHelpCircle as FAQIcon,
} from "react-icons/fi";
import { IoPhonePortraitOutline as ContentIcon } from "react-icons/io5";
import { PiChatTeardropDotsBold as ChatRoomIcon } from "react-icons/pi";
import { PiCertificate as AchievementIcon } from "react-icons/pi";
import { VscHubot as SmartChatIcon } from "react-icons/vsc";

import { MenuItemProps } from "../types/menu";

const iconSize = 20;

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
    title: "Services",
    href: "/services",
    icon: <ServicesIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Services",
  },
  {
    title: "Industries",
    href: "/industries",
    icon: <IndustryIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Industries",
  },
  {
    title: "Portfolio",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Portfolio",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: <CaseStudyIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Case Studies",
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: <PricingIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Pricing",
  },
  {
    title: "Blog",
    href: "/contents",
    icon: <ContentIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Blog",
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: <FAQIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: FAQ",
  },
  {
    title: "About",
    href: "/about",
    icon: <AboutIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contact",
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: <AchievementIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Achievements",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
  },
  {
    title: "Chat Room",
    href: "/chat",
    icon: <ChatRoomIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Chat Room",
  },
  {
    title: "Smart Talk",
    href: "/smart-talk",
    icon: <SmartChatIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Dashboard",
    isExclusive: true,
  },
];
