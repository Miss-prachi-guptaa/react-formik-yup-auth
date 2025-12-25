import React from "react";

import { motion } from "framer-motion";
import { FaTasks, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white">
          Welcome Back, Prachi 👋
        </h1>
        <p className="text-indigo-100 mt-2">
          Let’s make today productive 🚀
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* DSA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-pink-500 to-rose-500 p-5 rounded-xl shadow-lg cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <FaTasks className="text-white text-3xl" />
            <div>
              <h2 className="text-pink-100">DSA Challenges</h2>
              <p className="text-white text-3xl font-bold">12</p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-emerald-500 to-green-600 p-5 rounded-xl shadow-lg cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <FaProjectDiagram className="text-white text-3xl" />
            <div>
              <h2 className="text-green-100">Projects</h2>
              <p className="text-white text-3xl font-bold">5</p>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-sky-500 to-blue-600 p-5 rounded-xl shadow-lg cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-white text-3xl" />
            <div>
              <h2 className="text-blue-100">Messages</h2>
              <p className="text-white text-3xl font-bold">8</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h2 className="text-white font-semibold text-xl mb-4">
          🔥 Recent Activity
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="hover:text-purple-400 transition">
            ✅ Completed "Binary Search Tree" DSA challenge
          </li>
          <li className="hover:text-green-400 transition">
            📁 Submitted "Portfolio Website" project
          </li>
          <li className="hover:text-blue-400 transition">
            💬 Commented on "React Hooks" discussion
          </li>
        </ul>
      </motion.div>

    </div>
  );
};



