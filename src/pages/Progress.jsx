import Navbar from "../components/Navbar";

const Progress = () => {
  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-blue-900 mb-10">
          Progress Report
        </h1>

        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h2 className="text-2xl mb-5">
            Weekly Eye Fitness Report
          </h2>

          <p className="text-gray-600">
            Great progress this week.
            Keep training daily.
          </p>

        </div>

      </div>
    </>
  );
};

export default Progress;