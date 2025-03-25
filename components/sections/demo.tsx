import { Brain, Target, Zap } from "lucide-react";
import React from "react";

const Demo = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Belajar dengan cara yang menyenangkan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quizzy mengubah cara belajarmu menjadi lebih interaktif dan
            mengasyikkan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Matematika Dasar</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Level 1</span>
                    <span>•</span>
                    <span>Unit 3</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-orange-50 rounded-xl">
                  <p className="font-medium mb-4">
                    Manakah yang merupakan bilangan prima?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 bg-white rounded-lg border-2 border-orange-200 hover:border-orange-500 transition-colors">
                      15
                    </button>
                    <button className="p-3 bg-white rounded-lg border-2 border-orange-200 hover:border-orange-500 transition-colors">
                      17
                    </button>
                    <button className="p-3 bg-white rounded-lg border-2 border-orange-200 hover:border-orange-500 transition-colors">
                      21
                    </button>
                    <button className="p-3 bg-white rounded-lg border-2 border-orange-200 hover:border-orange-500 transition-colors">
                      25
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Latihan yang menyesuaikan kemampuanmu
              </h3>
              <p className="text-lg text-gray-600">
                Algoritma kami secara pintar menyesuaikan tingkat kesulitan soal
                berdasarkan perkembanganmu, memastikan kamu selalu tertantang
                tapi tidak kewalahan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Pembelajaran Adaptif</h4>
                  <p className="text-gray-600">
                    Materi yang disesuaikan dengan kecepatan belajarmu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Umpan Balik Instan</h4>
                  <p className="text-gray-600">
                    Ketahui langsung mana yang perlu diperbaiki
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
