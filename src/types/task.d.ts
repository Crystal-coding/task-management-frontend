export interface Task {
  id: number;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  status: 'To Do' | 'In Progress' | 'Completed';
  userId: number;
}