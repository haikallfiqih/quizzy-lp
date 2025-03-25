import React from "react";
import { motion } from "framer-motion";
import { DuoButton } from "./duo-button";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-2 py-1"
              >
                <span className="text-xl font-bold text-orange-600">
                  Quizzy
                </span>
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center">
            <DuoButton variant="ghost" asChild className="text-sm">
              <Link href="/login">Masuk</Link>
            </DuoButton>
            <DuoButton className="text-sm bg-orange-500 hover:bg-orange-600 text-white p-2 sm:px-6">
              <Link href="/register">Mulai Belajar</Link>
            </DuoButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
