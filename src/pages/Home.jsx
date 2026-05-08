import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">

        <h1 className="text-6xl font-bold text-blue-900 mb-5">
          Fitness App For Your Eyes
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Daily eye exercises, lazy eye games,
          progress tracking and healthy screen habits.
        </p>

        <Link
          to="/signup"
          className="bg-blue-900 text-white px-8 py-4 rounded-2xl text-lg"
        >
          Start Training
        </Link>

      </div>
    </>
  );
};

export default Home;