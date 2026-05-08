import { useState, useContext } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      setUser(data);

      navigate("/dashboard");

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]"
      >

        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Welcome Back
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-4 border rounded-xl mb-5"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-4 border rounded-xl mb-5"
          onChange={handleChange}
        />

        <button
          className="w-full bg-blue-900 text-white py-4 rounded-xl"
        >
          Login
        </button>

        <p className="mt-5 text-center">
          No account?
          <Link
            to="/signup"
            className="text-blue-900 ml-2"
          >
            Signup
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;