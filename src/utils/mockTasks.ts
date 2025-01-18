import { Task } from '../types/task'

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Fix authentication bug",
    priority: "High",
    dueDate: "2025-01-18",
    status: "In Progress",
    userId: 1,
  },
  {
    id: 2,
    title: "Add dashboard feature",
    priority: "Medium",
    dueDate: "2025-01-19",
    status: "To Do",
    userId: 2,
  },
  {
    id: 3,
    title: "Update API documentation",
    priority: "Low",
    dueDate: "2025-01-20",
    status: "Completed",
    userId: 3,
  },
  {
    id: 4,
    title: "Resolve database performance issues",
    priority: "High",
    dueDate: "2025-01-21",
    status: "In Progress",
    userId: 4,
  },
  {
    id: 5,
    title: "Prepare release notes",
    priority: "Low",
    dueDate: "2025-01-22",
    status: "To Do",
    userId: 5,
  },
  {
    id: 6,
    title: "Implement new authentication method",
    priority: "High",
    dueDate: "2025-01-23",
    status: "To Do",
    userId: 6,
  },
  {
    id: 7,
    title: "Write unit tests for API",
    priority: "Medium",
    dueDate: "2025-01-24",
    status: "In Progress",
    userId: 7,
  },
  {
    id: 8,
    title: "Optimize frontend rendering",
    priority: "High",
    dueDate: "2025-01-25",
    status: "To Do",
    userId: 8,
  }

]

export default mockTasks;
