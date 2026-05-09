import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const MiniGamesShowcase = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get('/api/demo/games')
      .then((res) => {
        if (!mounted) return;
        const payload = res && res.data ? res.data : [];
        // normalize payload to an array
        const list = Array.isArray(payload) ? payload : payload?.games ?? [];
        setGames(list);
      })
      .catch((err) => {
        console.error('Failed to load demo games', err);
        if (mounted) setError(err);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">Loading games…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-red-400">Failed to load games.</div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/3">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Mini Game Showcase</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(games) && games.length > 0 ? (
            games.map((g) => (
              <motion.div key={g.id ?? g.name} whileHover={{ scale: 1.02 }} className="glass-card p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">{g.name}</div>
                  <div className="text-xs text-slate-300">{g.type}</div>
                </div>
                <div className="h-36 bg-gradient-to-br from-black/10 to-transparent rounded-md flex items-center justify-center text-slate-400">Preview / animation</div>
                <div className="mt-3 text-sm text-slate-300">Max Score: {g.maxScore}</div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-slate-400 col-span-full">No demo games available.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MiniGamesShowcase;
