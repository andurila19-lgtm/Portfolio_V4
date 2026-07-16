"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { FiCode, FiShoppingCart, FiShield, FiArrowRight } from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage");

  const servicesData = [
    {
      id: "web-dev",
      icon: <FiCode className="text-3xl text-primary" />,
      titleId: "services.web_dev.title",
      descId: "services.web_dev.desc",
      features: [
        "Single Page & Multi-Page Apps",
        "SEO-Friendly Architectures",
        "Responsive & Fluid UI/UX",
        "Next.js / React / Laravel",
      ],
    },
    {
      id: "ecommerce",
      icon: <FiShoppingCart className="text-3xl text-primary" />,
      titleId: "services.ecommerce.title",
      descId: "services.ecommerce.desc",
      features: [
        "WhatsApp Orders Integration",
        "Dynamic Product Catalogs",
        "Secure Payment Gateways",
        "Admin Inventory Dashboards",
      ],
    },
    {
      id: "security",
      icon: <FiShield className="text-3xl text-primary" />,
      titleId: "services.security.title",
      descId: "services.security.desc",
      features: [
        "Vulnerability Assessments",
        "OWASP Top 10 Protections",
        "Database Queries Optimization",
        "Core Web Vitals Speed Boost",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading 
          title={t("services.title")} 
          icon={<FiCode className="text-neutral-700 dark:text-neutral-300" />} 
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("services.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            whileHover={{ y: -4 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-neutral-50 p-3 dark:bg-neutral-800">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  {t(service.titleId)}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {t(service.descId)}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Link
          href="/contact"
          className="group flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg dark:bg-neutral-100 dark:text-neutral-900 hover:dark:bg-neutral-200"
        >
          <span>{t("services.cta")}</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Services;
