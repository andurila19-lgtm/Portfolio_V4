"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import clsx from "clsx";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
    BsTiktok as TiktokIcon,
    BsYoutube as YoutubeIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const CONTENT_LINKS = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/rm_andurilahmad",
        Icon: InstagramIcon,
        description: "Follow my daily updates and creative journey on Instagram.",
        color: "from-purple-600 via-pink-500 to-orange-400",
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@amad.ddd",
        Icon: TiktokIcon,
        description: "Watch my short-form content and tech tips on TikTok.",
        color: "from-neutral-800 to-neutral-900 shadow-neutral-500/20",
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@andrl_3?si=N18_C84wBThSXSm2",
        Icon: YoutubeIcon,
        description: "In-depth tutorials and long-form tech content on YouTube.",
        color: "from-red-600 to-red-800",
    },
];

const ContentLinks = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT_LINKS.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="group relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-transparent hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
                >
                    {/* Background gradient on hover */}
                    <div
                        className={clsx(
                            "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10",
                            link.color
                        )}
                    />

                    <div className="flex w-full items-start justify-between">
                        <div
                            className={clsx(
                                "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
                                link.color
                            )}
                        >
                            <link.Icon size={30} />
                        </div>
                        <div className="rounded-full bg-neutral-100 p-2 text-neutral-400 transition-colors duration-300 group-hover:bg-white group-hover:text-neutral-900 dark:bg-neutral-800 dark:group-hover:bg-neutral-700 dark:group-hover:text-light">
                            <FiArrowUpRight size={20} />
                        </div>
                    </div>

                    <div className="mt-6 w-full text-left">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            {link.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {link.description}
                        </p>
                    </div>

                    <div
                        className={clsx(
                            "mt-6 h-1 w-0 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full",
                            link.color
                        )}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ContentLinks;
