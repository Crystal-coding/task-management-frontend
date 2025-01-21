import axios from "axios";
import { Task, TaskApi } from "../types/task"

function parseTasks(taskApi: TaskApi[]): Task[] {
  return taskApi.map((task) => ({
    id: task.id,
    title: task.title,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate,
    userId: task.userId,
  }));
}

// 从后端获取数据
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get("/task");
    return parseTasks(response.data);
  }
  catch (error) {
    console.error(`[fetchTasks] Failed to fetch tasks from API: ${error}`);
    return []
  }
};


// delete task
export const deleteTask = async (taskId: number): Promise<boolean> => {
  try {
    // 发送 DELETE 请求，使用任务 ID 动态构造 URL
    await axios.delete(`/task/${taskId}`);
    return true; // 返回成功状态
  } catch (error) {
    console.error(`[deleteTask] Failed to delete task with ID ${taskId}: ${error}`);
    return false; // 返回失败状态
  }
};
