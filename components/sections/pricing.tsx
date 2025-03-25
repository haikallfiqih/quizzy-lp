import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { DuoButton } from "../ui/duo-button";
import {
  DuoCard,
  DuoCardHeader,
  DuoCardTitle,
  DuoCardContent,
} from "../ui/duo-card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const packages = [
  {
    name: "Paket Santai",
    duration: "1 bulan",
    type: "Tryout",
    originalPrice: 80000,
    discountedPrice: 28000,
    discount: 65,
    features: [
      "5 paket TO",
      "Soal-soal prediktif dan HOTS",
      "Analisa jurusan yang kamu pilih",
    ],
    recommended: false,
  },
  {
    name: "Paket Ngebut",
    duration: "1 bulan",
    type: "Tryout",
    originalPrice: 100000,
    discountedPrice: 45000,
    discount: 55,
    features: [
      "10 paket TO",
      "Soal-soal prediktif dan HOTS",
      "Analisa jurusan yang kamu pilih",
    ],
    recommended: true,
  },
  {
    name: "Paket Enjoy",
    duration: "1 bulan",
    type: "Tryout",
    originalPrice: 50000,
    discountedPrice: 25000,
    discount: 50,
    features: [
      "2 paket TO",
      "Soal-soal prediktif dan HOTS",
      "Tes ST-30 (Potensi Diri)",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <motion.div
      className="py-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center text-gray-900 mb-12"
          variants={fadeInUp}
        >
          Paket Belajar Menarik Untukmu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              className={`relative ${
                pkg.recommended ? "transform scale-105" : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Rekomendasi
                  </span>
                </div>
              )}
              <DuoCard
                className={pkg.recommended ? "border-2 border-orange-500" : ""}
              >
                <DuoCardHeader>
                  <DuoCardTitle>{pkg.name}</DuoCardTitle>
                  <p className="text-sm text-gray-500">
                    Masa aktif {pkg.duration}
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      Rp {pkg.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      Rp {pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded">
                      Hemat {pkg.discount}%
                    </span>
                  </div>
                </DuoCardHeader>
                <DuoCardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-orange-500" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-3">
                    <DuoButton
                      className={`w-full ${
                        pkg.recommended
                          ? "bg-orange-500 hover:bg-orange-600"
                          : ""
                      }`}
                    >
                      Beli Sekarang
                    </DuoButton>
                    <DuoButton variant="outline" className="w-full">
                      Lihat Detail
                    </DuoButton>
                  </div>
                </DuoCardContent>
              </DuoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
