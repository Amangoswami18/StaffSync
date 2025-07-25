import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] p-5 rounded-xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 shadow-lg text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h3 className="bg-white text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
          📁 {data.category}
        </h3>
        <h4 className="text-xs font-medium">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl sm:text-2xl font-bold">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm mt-2 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full bg-green-600 hover:bg-green-700 transition-all rounded-full font-medium py-2 px-4 text-xs">
          ✅ Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
