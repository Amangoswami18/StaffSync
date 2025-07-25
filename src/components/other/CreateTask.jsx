import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';


const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskData = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setNewTask(newTaskData);

    const data = [...userData];

    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTaskData);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });

    setUserData(data);

    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, type: 'spring' }}
      className='p-8 bg-[#111827] mt-8 rounded-xl shadow-2xl border border-emerald-700 backdrop-blur-md'
    >
      <form
        onSubmit={submitHandler}
        className='flex flex-wrap w-full items-start justify-between gap-6'
      >
        {/* Left Side */}
        <div className='w-full md:w-1/2 space-y-4'>
          <div>
            <label className='text-sm text-emerald-300 mb-1 block'>📝 Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded-lg bg-[#1f2937] text-white border border-emerald-600 focus:ring-2 focus:ring-emerald-400 transition-all duration-300 outline-none'
              type='text'
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <label className='text-sm text-emerald-300 mb-1 block'>📅 Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded-lg bg-[#1f2937] text-white border border-emerald-600 focus:ring-2 focus:ring-emerald-400 transition-all duration-300 outline-none'
              type='date'
            />
          </div>
          <div>
            <label className='text-sm text-emerald-300 mb-1 block'>👤 Assign to</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded-lg bg-[#1f2937] text-white border border-emerald-600 focus:ring-2 focus:ring-emerald-400 transition-all duration-300 outline-none'
              type='text'
              placeholder='Employee name'
            />
          </div>
          <div>
            <label className='text-sm text-emerald-300 mb-1 block'>📂 Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded-lg bg-[#1f2937] text-white border border-emerald-600 focus:ring-2 focus:ring-emerald-400 transition-all duration-300 outline-none'
              type='text'
              placeholder='design, dev, etc'
            />
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full md:w-[45%] flex flex-col items-start space-y-4'>
          <label className='text-sm text-emerald-300 mb-1'>📝 Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-3 px-4 rounded-lg bg-[#1f2937] text-white border border-emerald-600 focus:ring-2 focus:ring-emerald-400 transition-all duration-300 outline-none resize-none'
            placeholder='Describe task details...'
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-all text-white py-3 px-6 w-full rounded-full shadow-md text-sm font-semibold'
          >
            <FiSend className='text-lg' /> Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateTask