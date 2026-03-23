export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;  // Format: 'YYYY-MM-DD'
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
}