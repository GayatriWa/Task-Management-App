
const SearchFilter = ({searchTerm, setSearchTerm, statusFilter,setStatusFilter}) => {
  return (
    <>
          <input type="text" 
        placeholder='search Task'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        className='w-full rounded-lg border p-2 mt-6'/>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full rounded-lg border p-2 mt-4">
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

    </>
  )
}

export default SearchFilter