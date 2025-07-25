import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] p-5 bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-xl text-black shadow-lg">

      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h3 className="bg-white text-red-600 text-xs px-3 py-1 rounded-full font-semibold">
          🆕 {data.category}
        </h3>
        <h4 className="text-xs font-medium">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-5 text-xl sm:text-2xl font-bold">{data.taskTitle}</h2>

      {/* Task Description */}
      <p className="text-sm mt-2 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Accept Task Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full font-medium py-2 px-4 text-xs">
          ✅ Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTask
