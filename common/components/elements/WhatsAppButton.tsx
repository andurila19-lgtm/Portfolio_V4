"use client";

import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  floating?: boolean;
}

const WhatsAppButton = ({
  phoneNumber = "6281326318155", // User's active WhatsApp number
  message = "Halo Anduril, saya melihat portofolio Anda di anduril.web.id dan ingin berkonsultasi mengenai proyek pembuatan website/aplikasi.",
  floating = true,
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (floating) {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 p-3.5 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsWhatsapp size={24} />
        <span className="hidden pr-2 text-xs font-semibold sm:inline">
          Chat WhatsApp
        </span>
      </motion.a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
    >
      <BsWhatsapp size={18} />
      <span>Chat WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
