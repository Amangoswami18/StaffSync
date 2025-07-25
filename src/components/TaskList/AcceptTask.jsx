import React from 'react'
import { motion } from 'framer-motion'

const AcceptTask = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.03 }}
      className="flex-shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl 
        bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#be123c] 
        shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          📁 {data.category}
        </span>
        <span className="text-xs opacity-80">{data.taskDate}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug drop-shadow-sm">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-3 opacity-90 leading-relaxed">
        {data.taskDescription}
      </p>

      <div className="flex justify-between gap-3 mt-6">
        <button className="w-1/2 bg-green-500 hover:bg-green-600 transition-all px-3 py-2 rounded-full text-xs font-semibold shadow">
          ✅ Completed
        </button>
        <button className="w-1/2 bg-red-700 hover:bg-red-800 transition-all px-3 py-2 rounded-full text-xs font-semibold shadow">
          ❌ Failed
        </button>
      </div>
    </motion.div>
  )
}

export default AcceptTask
