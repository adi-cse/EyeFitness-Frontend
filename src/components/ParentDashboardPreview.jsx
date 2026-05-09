import { useEffect, useState } from 'react';
import axios from 'axios';

const ParentDashboardPreview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/demo/progress').then(res => setData(res.data)).catch(() => null);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Parent Dashboard Preview</h3>

        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-slate-400">Child</div>
              <div className="font-semibold text-lg">{data?.child?.name || '—'}</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-slate-400">Streak</div>
              <div className="font-semibold text-lg">{data?.streak ?? '—'}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-black/20 rounded">Consistency<br /><span className="font-bold">{data?.child?.consistency ?? '—'}%</span></div>
            <div className="p-4 bg-black/20 rounded">XP<br /><span className="font-bold">{data?.xp ?? '—'}</span></div>
            <div className="p-4 bg-black/20 rounded">Avg (7d)<br /><span className="font-bold">{data?.lastWeek ? Math.round(data.lastWeek.reduce((a,b)=>a+b,0)/data.lastWeek.length) : '—'}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentDashboardPreview;
