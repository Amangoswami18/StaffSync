import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className="bg-gradient-to-br from-[#121212] to-[#1f1f1f] mt-8 p-8 rounded-2xl shadow-2xl border border-emerald-500 transition-all duration-500">
      <h2 className="text-3xl font-extrabold mb-8 text-white text-center md:text-left tracking-wide animate-pulse">
        📊 All Employee Task Summary
      </h2>

      {/* Table Header */}
      <div className="hidden md:flex bg-gradient-to-r from-red-500 to-red-700 text-white font-bold px-6 py-3 rounded-xl mb-4 shadow-md transition-all duration-300">
        <div className="w-1/5">Employee</div>
        <div className="w-1/5 text-blue-200">New</div>
        <div className="w-1/5 text-yellow-100">Active</div>
        <div className="w-1/5 text-green-200">Completed</div>
        <div className="w-1/5 text-red-200">Failed</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-4">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="group border-2 border-emerald-500 px-6 py-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center bg-[#111] hover:scale-[1.02] hover:border-green-400 transition-transform duration-300 shadow-lg hover:shadow-green-700"
          >
            <div className="md:w-1/5 w-full text-white font-semibold text-lg mb-2 md:mb-0 group-hover:text-emerald-300 transition">
              👤 {elem.firstName}
            </div>
            <div className="md:w-1/5 w-full text-blue-400 font-medium">🆕 {elem.taskCounts.newTask}</div>
            <div className="md:w-1/5 w-full text-yellow-300 font-medium">⚡ {elem.taskCounts.active}</div>
            <div className="md:w-1/5 w-full text-green-400 font-medium">✅ {elem.taskCounts.completed}</div>
            <div className="md:w-1/5 w-full text-red-400 font-medium">❌ {elem.taskCounts.failed}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
