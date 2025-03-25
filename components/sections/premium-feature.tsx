import {
  VideoIcon,
  MessageSquare,
  FileText,
  BarChart2,
  Users,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import React from "react";

const PremiumFeature = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fitur Premium untuk Hasil Maksimal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Akses fitur eksklusif untuk memaksimalkan persiapan UTBK-mu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: VideoIcon,
              title: "Video Pembahasan",
              description:
                "Penjelasan detail setiap soal dengan video berkualitas HD",
            },
            {
              icon: MessageSquare,
              title: "Konsultasi Mentor",
              description: "Tanya jawab langsung dengan mentor berpengalaman",
            },
            {
              icon: FileText,
              title: "Rangkuman Materi",
              description: "Ringkasan materi yang mudah dipahami dan diingat",
            },
            {
              icon: BarChart2,
              title: "Analisis Mendalam",
              description: "Laporan detail progress dan rekomendasi belajar",
            },
            {
              icon: Users,
              title: "Grup Belajar",
              description: "Diskusi dan belajar bersama teman sebaya",
            },
            {
              icon: Calendar,
              title: "Jadwal Terstruktur",
              description: "Program belajar yang disesuaikan dengan targetmu",
            },
            {
              icon: BookOpen,
              title: "Bank Soal Premium",
              description:
                "Ribuan soal prediktif dengan tingkat akurasi tinggi",
            },
            {
              icon: Award,
              title: "Sertifikat Digital",
              description: "Bukti pencapaian yang bisa dibagikan ke kampus",
            },
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-orange-100 h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumFeature;
