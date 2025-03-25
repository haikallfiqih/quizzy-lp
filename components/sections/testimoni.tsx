import React from "react";

const Testimoni = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dipercaya oleh ribuan siswa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan komunitas pembelajar yang terus berkembang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"></div>
              <div>
                <h4 className="font-semibold">Ahmad Rizki</h4>
                <p className="text-gray-500">Siswa SMA Kelas 12</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Quizzy membantu saya mempersiapkan UTBK dengan cara yang
              menyenangkan. Fitur gamifikasi membuat belajar jadi tidak
              membosankan!"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
              <div>
                <h4 className="font-semibold">Sarah Amelia</h4>
                <p className="text-gray-500">Siswa SMA Kelas 11</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Sistem pembelajaran adaptif sangat membantu. Soal-soal yang
              diberikan selalu sesuai dengan kemampuan saya."
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
              <div>
                <h4 className="font-semibold">Budi Santoso</h4>
                <p className="text-gray-500">Siswa SMA Kelas 10</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Fitur streak dan reward membuat saya termotivasi untuk belajar
              setiap hari. Hasilnya, nilai saya meningkat!"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
            <p className="text-gray-600">Siswa Aktif</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">500K+</div>
            <p className="text-gray-600">Soal Selesai</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
            <p className="text-gray-600">Tingkat Kepuasan</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">4.8/5</div>
            <p className="text-gray-600">Rating Pengguna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
