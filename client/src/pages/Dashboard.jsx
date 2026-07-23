import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import DashboardStats from '../components/DashboardStats';
import {filterTasks} from '../utils/taskFilters'
import useTasks from '../hooks/useTasks';
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from '../layouts/Sidebar';
import TaskSectionHeader from "../components/TaskSectionHeader";

const Dashboard = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        tasks,
        formData,
        loading,
        editTaskId,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        resetForm
      } = useTasks(); 
  
  const filteredTasks = filterTasks(
  tasks,
  searchTerm,
);
    const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user") || "null")

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    navigate("/login")
};
    const handleEditTask = (task) => {
  handleEdit(task);
  setIsModalOpen(true);

  }

  const handleFormSubmit = async (e) => {
  const success = await handleSubmit(e);

  if (success) {
    setIsModalOpen(false);
  }
};

const handleCloseModal = () => {
  resetForm();
  setIsModalOpen(false);
};
  
  return (
     <div
        className="h-screen flex overflow-hidden dashboard-bg">

      <Sidebar onLogout={handleLogout} />

     <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

      <DashboardHeader
          user={user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      <DashboardStats tasks={tasks}
      onAddTask={() => setIsModalOpen(true)}/>

        <TaskSectionHeader />

        <TaskList
          tasks={filteredTasks}
          onEdit={handleEditTask}
          onDelete={handleDelete}/>

          {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-[95%] sm:w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

      <button
        onClick={handleCloseModal}
        className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700"
      ><FiX />
      </button>

      <TaskForm
        handleSubmit={handleFormSubmit}
        formData={formData}
        handleChange={handleChange}
        loading={loading}
        editTaskId={editTaskId}
      />

          </div>
        </div>
      )}
        </div>
     </div>
  )
}

export default Dashboard