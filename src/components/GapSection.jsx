import { motion } from 'framer-motion';

const gapCards = [
  { title: 'Clinic Locked', text: 'Appointments and schedules create friction.' },
  { title: 'Zero Engagement', text: 'Conventional therapy lacks motivation.' },
  { title: 'Not Built For India', text: 'Accessibility and affordability gaps persist.' },
  { title: 'No Habit Design', text: 'Therapy rarely fits daily routines.' },
];

const GapSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Eye Therapy Was Never Designed for Daily Life.</h3>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">Clinics solve appointments. NainTaara solves consistency.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {gapCards.map((c, i) => (
            <motion.div key={c.title} whileHover={{ y: -8 }} className="glass-card p-6 rounded-2xl">
              <div className="text-teal-300 font-semibold mb-2">{i + 1}</div>
              <div className="font-semibold mb-2">{c.title}</div>
              <div className="text-sm text-slate-300">{c.text}</div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4">
              <h4 className="font-semibold mb-2">Traditional Therapy</h4>
              <ul className="text-sm text-slate-300 list-disc ml-5">
                <li>clinic visits</li>
                <li>boring routines</li>
                <li>expensive hardware</li>
                <li>no engagement</li>
                <li>difficult consistency</li>
              </ul>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">NainTaara</h4>
              <ul className="text-sm text-slate-300 list-disc ml-5">
                <li>mobile-first</li>
                <li>game-based</li>
                <li>daily streaks</li>
                <li>affordable</li>
                <li>habit-focused</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
