"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiMessageSquare, FiStar } from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Testimonials = () => {
  const t = useTranslations("HomePage");

  // TODO: Tambahkan testimonial asli dari klien saat data ulasan resmi telah tersedia.
  const sampleTestimonials = [
    {
      name: "dr. Maya Anggraini",
      role: "Founder & Lead Aesthetician",
      company: "Mommy Skincare",
      comment:
        "Hasil pembuatan katalog website dan antarmuka dari Anduril sangat memuaskan! Tampilannya estetik, navigasi responsif, dan pasien klinik kami sangat mudah melihat layanan perawatan online.",
      rating: 5,
    },
    {
      name: "H. Ridwan Barokah",
      role: "Owner & Retail Director",
      company: "EraStack Retail Network",
      comment:
        "Platform EraStack POS offline-first yang dibangun sangat tangguh dan cepat. Kasir toko kami tetap bisa melayani transaksi dan mencetak struk thermal meskipun koneksi internet terputus.",
      rating: 5,
    },
    {
      name: "Ir. Hendra Gunawan",
      role: "Chief Contractor",
      company: "Istana Gypsum Group",
      comment:
        "Website dan simulator kalkulator estimasi biaya dari Anduril sangat membantu calon klien kami menghitung RAB secara transparan sebelum survei lokasi.",
      rating: 5,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("testimonials.title")}
          icon={<FiMessageSquare className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("testimonials.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {sampleTestimonials.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <FiStar key={i} className="fill-amber-400" size={15} />
                ))}
              </div>
              <p className="text-xs leading-relaxed italic text-neutral-600 dark:text-neutral-300">
                "{item.comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {item.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {item.role} — <span className="text-primary">{item.company}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
