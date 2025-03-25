import React from "react";
import { motion } from "framer-motion";
import { Crown, Gift, Medal, Target } from "lucide-react";

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

const dailyChallenges = [
  {
    icon: Target,
    title: "Latihan Harian",
    description: "Selesaikan 5 soal hari ini",
    reward: "50 XP",
    progress: 3,
    total: 5,
  },
  {
    icon: Crown,
    title: "Streak Challenge",
    description: "Pertahankan streak 3 hari",
    reward: "Power-up Item",
    progress: 2,
    total: 3,
  },
  {
    icon: Medal,
    title: "Perfect Score",
    description: "Dapatkan nilai 100 di quiz apapun",
    reward: "Badge Spesial",
    progress: 90,
    total: 100,
  },
];

const Challenge = () => {
  return (
    <motion.div
      className="relative overflow-hidden py-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-white to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Tantangan Harian
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Selesaikan tantangan harian untuk mendapatkan bonus XP dan rewards
            spesial!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dailyChallenges.map((challenge) => (
            <motion.div
              key={challenge.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl duration-300" />
              <div className="relative bg-white rounded-2xl p-6 border border-orange-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <challenge.icon className="w-6 h-6 text-orange-500 transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-500 mb-4 transition-colors duration-300">
                  {challenge.description}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm transition-colors duration-300">
                    <span>Progress</span>
                    <span className="font-medium">
                      {challenge.progress}/{challenge.total}
                    </span>
                  </div>
                  <div className="h-2 bg-orange-100 rounded-full overflow-hidden transition-colors duration-300">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-colors duration-300"
                      style={{
                        width: `${
                          (challenge.progress / challenge.total) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Gift className="w-4 h-4 text-orange-500  transition-colors duration-300" />
                    <span className="text-orange-600 font-medium  transition-colors duration-300">
                      Reward: {challenge.reward}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Challenge;
