import { motion } from 'framer-motion';

const features = [
  'Eye Training Games',
  'Lazy Eye Therapy',
  'Eye Coordination Exercises',
  'Myopia Management',
  '20-20-20 Smart Reminders',
  'Parent Dashboard',
  'AI Progress Tracking',
  'Daily Rewards & Streaks',
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Powerful Features Built For Daily Use</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f} whileHover={{ scale: 1.03 }} className="glass-card p-5 rounded-2xl shadow-md">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-300 to-purple-500 mb-3 flex items-center justify-center text-black font-bold">{idx + 1}</div>
              <div className="font-semibold mb-1">{f}</div>
              <div className="text-sm text-slate-300">{f} to help build habits and track progress.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
