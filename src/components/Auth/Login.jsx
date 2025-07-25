import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1a1a1a] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] w-full max-w-md p-10 rounded-3xl shadow-[0_4px_60px_rgba(0,255,180,0.2)] border border-emerald-500 backdrop-blur-sm"
      >
        <h2 className="text-center text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
          Welcome Back
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 group">
            <label className="text-sm text-gray-300 font-medium">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@example.com"
              className="cursor-pointer bg-[#0e0e0e] border border-emerald-600 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 hover:ring-2 hover:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-sm text-gray-300 font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="cursor-pointer bg-[#0e0e0e] border border-emerald-600 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 hover:ring-2 hover:ring-cyan-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="cursor-pointer mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all py-3 rounded-xl font-semibold text-white tracking-wide shadow-xl hover:shadow-emerald-700/50"
          >
             Log In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
