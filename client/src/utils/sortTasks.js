export const sortTasks = (tasks, sortBy) => {
  const sortedTasks = [...tasks];

  switch (sortBy) {
    case "oldest":
      return sortedTasks.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

    case "dueDate":
      return sortedTasks.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );

    case "recent":
    default:
      return sortedTasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
  }
};