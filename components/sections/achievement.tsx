import React from "react";
import { motion } from "framer-motion";
import { AwardIcon, Brain, Flame, Trophy, Zap } from "lucide-react";

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

const achievements = [
  {
    icon: Flame,
    title: "7 Hari Streak!",
    description: "Belajar 7 hari berturut-turut",
    progress: 5,
    total: 7,
    xp: 100,
  },
  {
    icon: Brain,
    title: "Master Matematika",
    description: "Selesaikan 50 soal matematika",
    progress: 30,
    total: 50,
    xp: 200,
  },
  {
    icon: Trophy,
    title: "Top 100 Leaderboard",
    description: "Masuk 100 besar nasional",
    progress: 80,
    total: 100,
    xp: 500,
  },
];

const Achievement = () => {
  return (
    <motion.div
      className="py-24 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Buka achievements spesial dan tunjukkan prestasimu!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-orange-100 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <AwardIcon className="w-7 h-7 text-orange-500" />
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-orange-100 rounded-full">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="font-medium text-orange-700">
                    {achievement.xp} XP
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-500 mb-6">{achievement.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">
                    {achievement.progress}/{achievement.total}
                  </span>
                </div>
                <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{
                      width: `${
                        (achievement.progress / achievement.total) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
