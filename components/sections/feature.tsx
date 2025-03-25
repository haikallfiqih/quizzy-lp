import { Trophy, Crown, Flame, Target, Check, Clock } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fitur yang membuat belajar lebih seru
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nikmati berbagai fitur menarik yang akan membuat proses belajarmu
            tidak membosankan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kompetisi Seru</h3>
              <p className="text-gray-600 mb-6">
                Bersaing dengan teman-temanmu di papan peringkat dan dapatkan
                hadiah menarik
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Crown className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="font-medium">Peringkat #1</span>
                  </div>
                  <span className="text-orange-600 font-medium">2500 XP</span>
                </div>
                <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Streak Harian</h3>
              <p className="text-gray-600 mb-6">
                Pertahankan streak belajarmu dan kumpulkan bonus XP setiap hari
              </p>
              <div className="flex -space-x-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      i < 5 ? "bg-orange-500" : "bg-orange-100"
                    }`}
                  >
                    <Flame
                      className={`w-4 h-4 ${
                        i < 5 ? "text-white" : "text-orange-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Target Harian</h3>
              <p className="text-gray-600 mb-6">
                Tetapkan target belajar dan raih pencapaian setiap harinya
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-600">5 soal selesai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-gray-600">15 menit belajar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
