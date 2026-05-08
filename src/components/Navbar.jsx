import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-900">
        NainTaara
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/progress">Progress</Link>
      </div>

    </div>
  );
};

export default Navbar;