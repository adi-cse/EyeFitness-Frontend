import { motion } from 'framer-motion';

const tests = [
  { name: 'Radhika — Parent', quote: 'My son loves the games and actually asks to play daily. Streaks changed everything.' },
  { name: 'Ishan — Student', quote: 'Fun, short and I can see progress. I feel more focussed.' },
  { name: 'Dr. Meera — Optometrist', quote: 'A promising approach to improve adherence using playful exercises.' },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">What People Are Saying</h3>
        <div className="flex flex-col sm:flex-row gap-6 items-stretch">
          {tests.map((t, i) => (
            <motion.div key={t.name} whileHover={{ y: -6 }} className="glass-card p-6 rounded-2xl flex-1">
              <div className="font-semibold mb-2">{t.name}</div>
              <div className="text-sm text-slate-300">“{t.quote}”</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
