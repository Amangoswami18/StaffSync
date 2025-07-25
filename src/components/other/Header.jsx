import React from 'react'

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  const getUsername = () => {
    if (!data) return 'Aman' 
    return data.firstName
  }

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-medium text-gray-300">
          Hello 👋
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          {getUsername()}
        </h2>
      </div>
      <button
        onClick={logOutUser}
        className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-md text-white font-semibold text-sm sm:text-base"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
