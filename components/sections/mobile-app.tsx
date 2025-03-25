import { Zap, Bell, Smartphone, Flame, DownloadIcon } from "lucide-react";
import React from "react";

const MobileApp = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Belajar dimana saja, kapan saja
              </h2>
              <p className="text-xl text-gray-600">
                Download aplikasi Quizzy dan mulai belajar dari smartphone-mu.
                Tetap produktif bahkan saat dalam perjalanan!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Mode Offline</h3>
                  <p className="text-gray-600">
                    Tetap bisa belajar tanpa koneksi internet
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Notifikasi Pintar</h3>
                  <p className="text-gray-600">
                    Pengingat jadwal belajar yang bisa disesuaikan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Sinkronisasi Otomatis</h3>
                  <p className="text-gray-600">
                    Progress tersimpan di semua perangkat
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <DownloadIcon />
                <div className="text-left">
                  <div className="text-xs">Download di</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <DownloadIcon />
                <div className="text-left">
                  <div className="text-xs">Download di</div>
                  <div className="text-sm font-semibold">Play Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 border-8 border-black shadow-xl">
              <div className="aspect-[9/19] bg-gray-100 rounded-[2rem] overflow-hidden">
                {/* Mock mobile screen content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Flame className="w-3 h-3 text-orange-500" />
                      </div>
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 bg-orange-100 rounded-xl"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-orange-50 rounded-lg"></div>
                      <div className="h-16 bg-orange-50 rounded-lg"></div>
                      <div className="h-16 bg-orange-50 rounded-lg"></div>
                      <div className="h-16 bg-orange-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
