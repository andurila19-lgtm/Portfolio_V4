"use client";

import { useEffect } from "react";
import Button from "@/common/components/elements/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Chat Room Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Terjadi kesalahan saat memuat Ruang Obrolan
      </h2>
      <p className="text-sm text-neutral-500">
        Silakan coba muat ulang atau periksa koneksi Anda.
      </p>
      <Button onClick={() => reset()} className="bg-primary text-dark font-medium px-4 py-2 rounded-md">
        Coba Lagi
      </Button>
    </div>
  );
}
