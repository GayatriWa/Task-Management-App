const TaskForm = ({handleSubmit,handleChange,formData,loading,editTaskId}) => {
  return (
   <>
    <form onSubmit={handleSubmit} className='mt-6 space-y-4'>

        <input type="text" 
        placeholder='Enter Task Title'
        name='title'
        value={formData.title} 
        onChange={handleChange}
        className='w-full rounded-lg border p-2' />

        <textarea placeholder='Enter Task Description' 
        className='w-full rounded-lg border p-2'
        name='description'
        value={formData.description}
        onChange={handleChange}
        rows="4"></textarea>

        <select className='w-full rounded-lg border p-2'
        name='status'
        value={formData.status}
        onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          className="w-full rounded-lg border p-2"
          name="priority"
          value={formData.priority}
          onChange={handleChange} >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type='submit'
        disabled={loading}
        className='bg-blue-600 rounded-lg text-white px-4 py-2'> {loading
    ? (editTaskId ? "Updating..." : "Adding...")
    : (editTaskId ? "Update Task" : "Add Task")}</button> 
      </form>
   </>
  )
}

export default TaskForm