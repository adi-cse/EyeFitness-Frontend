import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = () => {

  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    fetch('/api/demo/progress')
      .then((r) => r.json())
      .then(setProgress)
      .catch(() => setProgress(null));
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Eye Fitness
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <ProgressCard
            title="Daily Streak"
            value={`${progress?.streak ?? '—'} Days`}
          />

          <ProgressCard
            title="Eye Score"
            value={`${progress ? progress.xp : '—'}`}
          />

          <ProgressCard
            title="Games Played"
            value={`${progress ? progress.lastWeek?.length ?? '—' : '—'}`}
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <GameCard
            title="Focus Eye Game"
            description="Improve focus and eye coordination"
            buttonText="Play Now"
            onClick={() => navigate("/game1")}
          />

          <GameCard
            title="Color Match Vision"
            description="Train visual response and tracking"
            buttonText="Play Now"
            onClick={() => navigate("/game2")}
          />

        </div>

        <div className="mt-10 bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Last 7 days — Eye Activity</h3>
          {progress ? (
            <Line
              data={{
                labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                datasets: [
                  {
                    label: 'Points',
                    data: progress.lastWeek,
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6,182,212,0.2)',
                  },
                ],
              }}
            />
          ) : (
            <div className="text-gray-500">No progress data available.</div>
          )}
        </div>

      </div>
    </>
  );
};

export default Dashboard;