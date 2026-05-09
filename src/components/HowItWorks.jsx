import { motion } from 'framer-motion';

const steps = [
  { title: 'Open the app daily', desc: 'A 1–2 minute check-in to start your session.' },
  { title: 'Play 5-minute eye games', desc: 'Short, delightful games designed by optometrists.' },
  { title: 'Build healthier vision habits', desc: 'Track streaks, earn rewards, improve consistency.' },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} whileHover={{ y: -6 }} className="glass-card p-6 rounded-2xl flex-1">
              <div className="text-teal-300 font-semibold mb-2">Step {i + 1}</div>
              <div className="font-semibold text-lg mb-2">{s.title}</div>
              <div className="text-sm text-slate-300">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
