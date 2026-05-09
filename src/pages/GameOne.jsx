import { useState, useEffect, useRef } from "react";
import axios from "axios";

const getRandomPos = () => ({
  x: Math.random() * 240 + 20,
  y: Math.random() * 240 + 20,
});

const GameOne = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30s rounds
  const [target, setTarget] = useState(getRandomPos());
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  useEffect(() => {
    if (timeLeft <= 0 && running) {
      endGame();
    }
  }, [timeLeft, running]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setTarget(getRandomPos());
    setRunning(true);
  };

  const hitTarget = () => {
    if (!running) return;
    setScore((s) => s + 1);
    setTarget(getRandomPos());
  };

  const endGame = async () => {
    setRunning(false);
    clearInterval(timerRef.current);

    // send demo progress to backend demo endpoint
    try {
      await axios.post('/api/demo/save-progress', {
        gameName: 'Focus Runner',
        score,
        duration: 30,
      });
    } catch (err) {
      console.error('Failed to save demo progress', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">

      <h1 className="text-4xl font-bold text-white mb-4">Focus Runner</h1>

      <div className="text-slate-300 mb-6">Time Left: {timeLeft}s • Score: {score}</div>

      {!running ? (
        <button onClick={startGame} className="px-6 py-3 bg-teal-300 text-black rounded-2xl font-semibold">Start 30s</button>
      ) : (
        <div className="relative w-[320px] h-[320px] bg-black/20 rounded-2xl flex items-center justify-center">
          <div className="absolute top-2 left-2 text-xs text-slate-300">Tap the moving target</div>

          <div
            onClick={hitTarget}
            className="absolute bg-gradient-to-br from-teal-300 to-purple-500 rounded-full shadow-lg cursor-pointer"
            style={{ width: 64, height: 64, transform: `translate(${target.x}px, ${target.y}px)` }}
          />

        </div>
      )}

    </div>
  );
};

export default GameOne;