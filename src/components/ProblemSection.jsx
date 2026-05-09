import { motion } from 'framer-motion';

const ProblemSection = () => {
  const cards = [
    { title: 'Screen Addiction', text: 'Time-on-screen is increasing across ages.' },
    { title: 'Rising Myopia', text: 'Myopia rates are rising in children.' },
    { title: 'Boring Therapy', text: 'Traditional treatments lack engagement.' },
    { title: 'Poor Consistency', text: 'Hard to build a daily habit with clinics.' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Screen Time Is Rising. Eye Health Is Falling.</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">Modern screen-life demands new tools — engaging, daily-first eye care built for families.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl shadow-lg text-left"
            >
              <div className="text-sm text-teal-300 font-semibold mb-2">{i + 1}</div>
              <div className="font-semibold text-lg mb-2">{c.title}</div>
              <div className="text-sm text-slate-300">{c.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
