import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-64 -top-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#06333a] to-[#071028] opacity-60 blur-3xl transform -rotate-12 animate-blob" />
        <div className="absolute right-[-200px] top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#0ff1d8] to-[#8b5cf6] opacity-10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Your Eyes Need Daily Exercise Too.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              Gamified eye training, myopia management, and daily vision
              wellness designed for modern screen life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="mt-4 text-sm text-slate-400"
            >
              Turning eye therapy into a daily habit.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00f0d6] to-[#7ee0ff] text-black rounded-2xl font-semibold shadow-lg"
              >
                Start Training
              </Link>

              <button className="inline-flex items-center px-5 py-3 border border-white/10 rounded-2xl text-sm text-slate-200">
                Watch Demo
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center text-xs text-slate-400">
              <span className="glass-card px-3 py-2 rounded-full">Backed by science</span>
              <span className="glass-card px-3 py-2 rounded-full">Built for modern screen life</span>
              <span className="glass-card px-3 py-2 rounded-full">Designed for India</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.18, type: "spring", stiffness: 80 }}
              className="relative w-[300px] sm:w-[360px] md:w-[420px]"
            >
              <div className="glass-card rounded-3xl p-4 shadow-xl">
                <img
                  src={heroImg}
                  alt="NainTaara app preview"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Floating UI elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -left-6 -top-6 w-20 h-14 glass-card rounded-2xl flex flex-col justify-center items-center text-xs"
              >
                <div className="text-xs text-teal-300 font-semibold">🔥 Streak</div>
                <div className="text-sm font-bold">14</div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-6 bottom-0 w-28 h-12 glass-card rounded-2xl flex items-center justify-center text-xs"
              >
                XP +24
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
