import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { registerUser } from "../logic/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      registerUser({ email, password });
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message); // Shows the error if email already exists
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-[#121212]">
        <div className="w-full max-w-sm p-6 bg-[#1f1f1f] border border-gray-600 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-500 rounded text-white bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-500 rounded text-white bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 focus:outline-none"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-white">
            Already have an account?{" "}
            <Link to="/wear-it-right/login" className="text-red-600">Login</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
