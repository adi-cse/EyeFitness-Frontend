import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await API.post(
        "/auth/signup",
        formData
      );

      navigate("/login");

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
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-4 border rounded-xl mb-5"
          onChange={handleChange}
        />

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
          Signup
        </button>

      </form>
    </div>
  );
};

export default Signup;