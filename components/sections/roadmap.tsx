import { Book, BarChart, Target, Check } from "lucide-react";
import React from "react";

const Roadmap = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Jalur belajar yang terstruktur
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ikuti alur belajar yang telah dirancang khusus untuk kesuksesanmu
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-orange-200"></div>
          <div className="space-y-12">
            {[
              {
                title: "Mulai dari Dasar",
                description:
                  "Pelajari konsep dasar dengan cara yang menyenangkan",
                icon: Book,
                items: [
                  "Konsep fundamental",
                  "Latihan interaktif",
                  "Quiz harian",
                ],
              },
              {
                title: "Tingkatkan Kemampuan",
                description: "Hadapi tantangan yang lebih kompleks",
                icon: BarChart,
                items: ["Soal HOTS", "Pembahasan detail", "Analisis kesalahan"],
              },
              {
                title: "Persiapan Ujian",
                description: "Simulasi ujian dengan soal prediktif",
                icon: Target,
                items: [
                  "Try out UTBK",
                  "Bank soal lengkap",
                  "Pembahasan video",
                ],
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "md:pr-24" : "md:pl-24"
                  }`}
                >
                  <div
                    className={
                      index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    }
                  >
                    <div className="bg-white rounded-2xl p-8 border border-orange-100">
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-orange-500" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
