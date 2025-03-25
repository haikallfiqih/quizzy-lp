import { Users, MessageCircle, Share2 } from "lucide-react";
import React from "react";
import { DuoButton } from "../ui/duo-button";

const Community = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bergabung dengan Komunitas Pembelajar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Belajar lebih menyenangkan bersama teman-teman dari seluruh
            Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur-lg opacity-20"></div>
            <div className="relative space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm ml-8">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="relative space-y-4 mt-8">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm ml-8">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Grup Diskusi Aktif</h3>
                  <p className="text-gray-600">
                    Diskusi soal dan materi bersama teman sebaya
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Forum Tanya Jawab</h3>
                  <p className="text-gray-600">
                    Tanyakan kesulitanmu dan dapatkan jawaban cepat
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Berbagi Pengalaman</h3>
                  <p className="text-gray-600">
                    Ceritakan dan bagikan tips sukses belajarmu
                  </p>
                </div>
              </div>
            </div>

            <DuoButton className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Gabung Komunitas
            </DuoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
