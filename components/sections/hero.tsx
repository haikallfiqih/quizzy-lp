import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Check, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { DuoButton } from "@/components/ui/duo-button";
import { Progress } from "@radix-ui/react-progress";

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

const Hero = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [xpEarned, setXpEarned] = useState(0);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    const correct = index === 1; // B. 56 is the correct answer
    setIsCorrect(correct);
    if (correct) {
      setXpEarned(20);
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} className="max-w-lg relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 relative">
              <span className="block">Belajar lebih</span>
              <span className="block text-orange-500 mt-2">
                seru dengan Quizzy
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-600">
              Raih prestasi akademik sambil bermain. Selesaikan tantangan,
              kumpulkan XP, dan buka pencapaian baru setiap hari.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <DuoButton
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white"
              >
                Mulai Gratis
              </DuoButton>
              <DuoButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2"
              >
                Lihat Demo
              </DuoButton>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm text-gray-500">Siswa Aktif</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500,000+</div>
                  <div className="text-sm text-gray-500">Soal Selesai</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Matematika</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>Level 1</span>
                      <span>•</span>
                      <span>20 XP</span>
                    </div>
                  </div>
                </div>
                <Progress value={30} className="w-20 h-2" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Berapakah hasil dari 8 × 7?
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Pilih jawaban yang benar
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {["54", "56", "58", "60"].map((answer, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 text-left relative overflow-hidden
                      ${
                        selectedAnswer === index
                          ? isCorrect && selectedAnswer === index
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-orange-500"
                      }`}
                      onClick={() => handleAnswerClick(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="text-lg">{answer}</span>
                      {selectedAnswer === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                          {isCorrect && selectedAnswer === index ? (
                            <Check className="w-5 h-5 text-orange-500" />
                          ) : (
                            <motion.div
                              animate={{ rotate: 45 }}
                              className="w-5 h-0.5 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                          )}
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {isCorrect && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-orange-100 p-4 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        <span className="text-orange-700 font-medium">
                          Hebat! Jawaban benar!
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-600">
                        <Zap className="w-4 h-4" />
                        <span className="font-medium">+{xpEarned} XP</span>
                      </div>
                    </motion.div>
                  )}
                  {isCorrect === false && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-100 p-4 rounded-xl"
                    >
                      <p className="text-red-700 font-medium">
                        Jawaban yang benar adalah 56
                      </p>
                      <p className="text-sm text-red-600 mt-1">
                        Jangan menyerah, coba lagi!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <DuoButton
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200"
                  disabled={selectedAnswer !== null}
                >
                  Periksa Jawaban
                </DuoButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
