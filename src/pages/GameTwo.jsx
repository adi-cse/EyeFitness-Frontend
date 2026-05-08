import { useState } from "react";

const GameTwo = () => {

  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold text-blue-900 mb-5">
        Color Match Game
      </h1>

      <h2 className="text-2xl mb-10">
        Score: {score}
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div
          onClick={() => setScore(score + 1)}
          className="w-28 h-28 bg-red-500 rounded-2xl cursor-pointer"
        ></div>

        <div className="w-28 h-28 bg-green-500 rounded-2xl"></div>

        <div className="w-28 h-28 bg-yellow-500 rounded-2xl"></div>

        <div className="w-28 h-28 bg-blue-500 rounded-2xl"></div>

      </div>

    </div>
  );
};

export default GameTwo;