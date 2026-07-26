"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiLayout,
  FiZap,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const WorkProcess = () => {
  const t = useTranslations("HomePage");

  const steps = [
    {
      icon: <FiMessageSquare className="text-2xl text-primary" />,
      titleKey: "work_process.step_1_title",
      descKey: "work_process.step_1_desc",
    },
    {
      icon: <FiLayout className="text-2xl text-primary" />,
      titleKey: "work_process.step_2_title",
      descKey: "work_process.step_2_desc",
    },
    {
      icon: <FiZap className="text-2xl text-primary" />,
      titleKey: "work_process.step_3_title",
      descKey: "work_process.step_3_desc",
    },
    {
      icon: <FiCheckCircle className="text-2xl text-primary" />,
      titleKey: "work_process.step_4_title",
      descKey: "work_process.step_4_desc",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("work_process.title")}
          icon={<FiActivity className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("work_process.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
                  {step.icon}
                </div>
                <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-600">
                  0{index + 1}
                </span>
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  {t(step.titleKey)}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
