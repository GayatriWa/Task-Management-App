export const filterTasks = (
  tasks,
  searchTerm,
) => {
  return tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });
};