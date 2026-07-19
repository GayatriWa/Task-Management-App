import React from 'react'

const DashboardStats = ({tasks}) => {

    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter((task)=>
        task.status === "Pending"
    ).length

    const inProgressTasks = tasks.filter((task)=>
    task.status === "In Progress"
    ).length

    const completedTasks = tasks.filter((task)=>
    task.status === "Completed"
    ).length

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6'>
        <div className='bg-blue-500 text-white p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Total Task:</h3>
            <p className='text-3xl font-bold mt-2'>{totalTasks}</p>
        </div>

        <div className='bg-yellow-500 text-white p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Pending :</h3>
            <p className='text-3xl font-bold mt-2'>{pendingTasks}</p>
        </div>

        <div className='bg-purple-500 text-white p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>In Progress :</h3>
            <p className='text-3xl font-bold mt-2'> {inProgressTasks}</p>
        </div>
        

        <div className='bg-green-500 text-white p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Completed :</h3>
            <p className='text-3xl font-bold mt-2'> {completedTasks}</p>
        </div>
        
    </div>
  )
}

export default DashboardStats