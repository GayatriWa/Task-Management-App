const TaskForm = ({handleSubmit,handleChange,formData,loading,editTaskId}) => {
  return (
   <>
    <form onSubmit={handleSubmit}  className="p-4 sm:p-6">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
          {editTaskId ? "Edit Task" : "Add New Task"}
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Task Title
        </label>

        <input type="text" 
        placeholder='Enter Task Title'
        name='title'
        value={formData.title} 
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />

        <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
          Description
        </label>

        <textarea placeholder='Enter Task Description' 
       className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        name='description'
        value={formData.description}
        onChange={handleChange}
        rows="4"></textarea>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                Status
              </label>

              <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              name='status'
              value={formData.status}
              onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              </div>

            {/* Priority */}
            <div>

            <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                Priority
              </label>

              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                name="priority"
                value={formData.priority}
                onChange={handleChange} >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              </div>

        </div>
        
        <div className="flex justify-center mt-6">
          <button type='submit'
              disabled={loading}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"> {loading
              ? (editTaskId ? "Updating..." : "Adding...")
              : (editTaskId ? "Update Task" : "Add Task")}
          </button> 
        </div>
      </form>
   </>
  )
}

export default TaskForm