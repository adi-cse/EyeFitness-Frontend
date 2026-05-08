import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

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
            value="12 Days"
          />

          <ProgressCard
            title="Eye Score"
            value="92%"
          />

          <ProgressCard
            title="Games Played"
            value="35"
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

      </div>
    </>
  );
};

export default Dashboard;