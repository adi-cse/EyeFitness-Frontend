import { useState } from "react";

const GameOne = () => {

  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold text-blue-900 mb-5">
        Focus Eye Game
      </h1>

      <h2 className="text-2xl mb-10">
        Score: {score}
      </h2>

      <div
        onClick={handleClick}
        className="w-24 h-24 bg-blue-500 rounded-full cursor-pointer animate-bounce"
      ></div>

    </div>
  );
};

export default GameOne;