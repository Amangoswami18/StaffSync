import React from 'react'
import { motion } from 'framer-motion'

const TaskListNumbers = ({ data }) => {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: 'spring' }
    })
  }

  const cards = [
    {
      label: '🆕 New Tasks',
      value: data.taskCounts.newTask,
      bg: 'from-[#1d4ed8] via-[#2563eb] to-[#3b82f6]',
      ring: 'ring-blue-400'
    },
    {
      label: '✅ Completed',
      value: data.taskCounts.completed,
      bg: 'from-[#059669] via-[#10b981] to-[#34d399]',
      ring: 'ring-green-400'
    },
    {
      label: '⚡ Active',
      value: data.taskCounts.active,
      bg: 'from-[#facc15] via-[#fcd34d] to-[#fde68a]',
      ring: 'ring-yellow-400',
      text: 'text-black'
    },
    {
      label: '❌ Failed',
      value: data.taskCounts.failed,
      bg: 'from-[#dc2626] via-[#ef4444] to-[#f87171]',
      ring: 'ring-red-400'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.06,
            rotate: 1,
            boxShadow: "0 0 25px rgba(255,255,255,0.2)"
          }}
          className={`
            bg-gradient-to-br ${card.bg} p-6 rounded-2xl 
            shadow-lg ring-1 ${card.ring} 
            transition-all duration-300 cursor-pointer
            flex flex-col justify-center items-start
          `}
        >
          <h2 className={`text-5xl font-extrabold ${card.text || 'text-white'}`}>{card.value}</h2>
          <h3 className={`text-lg mt-2 font-semibold ${card.text || 'text-white'}`}>{card.label}</h3>
          <div className="mt-3 h-1 w-full rounded-full bg-white/30">
            <div className="h-1 rounded-full bg-white" style={{ width: `${Math.min(card.value * 10, 100)}%` }}></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TaskListNumbers
