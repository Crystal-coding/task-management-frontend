import React, { useEffect, useState } from "react";
import './TaskListView.css'
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
  Button
} from '@carbon/react';
import { fetchTasks as apiFetchTasks } from "../api/taskApi";
import { Task } from "../types/task";
import mockTasks from "../utils/mockTasks";
import DeleteTask from "./DeleteTask";


const headers = [
  {
    header: 'Title',
    key: 'title'
  },
  {
    header: 'Priority',
    key: 'priority'
  },
  {
    header: 'Status',
    key: 'status'
  },
  {
    header: 'Due Date',
    key: 'dueDate'
  },
  {
    header: 'Action',
    key: 'action'
  }
];


const TaskListView: React.FC = () => {

  // set initial states
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState(10);

  // delete
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  // get tasks from api
  const fetchTasks = async () => {
    // const data = await apiFetchTasks();
    const data = mockTasks;
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = tasks.slice(startIndex, endIndex);


  const handlePaginationChange = ({ page, pageSize }: { page: number; pageSize: number }) => {
    setCurrentPage(page);    // 更新当前页码
    setPageSize(pageSize);   // 更新每页条目数
  };

  const handleDelete = (taskId: number) => {
    setCurrentTaskId(taskId);
    setShowDeleteModal(true);
    console.log('deleted item');

  }

  const handleDeleteResult = (taskId: number, success: boolean) => {
    if (success) {
      // 从任务列表中移除被删除的任务
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } else {
      // 提示删除失败
      alert('Failed to delete the task. Please try again.');
    }
    // 无论成功与否，关闭 DeleteTask 模态框
    setShowDeleteModal(false);
    setCurrentTaskId(null);
  };



  const rows = currentData.map((task) => ({
    id: task.id.toString(),
    title: task.title,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate,
    action: (
      <Button kind="ghost" size="sm" onClick={() => handleDelete(task.id)}>
        Delete
      </Button>)
  }))

  return (
    <div className="task-container">
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        page={currentPage}
        pageNumberText="Page Number"
        pageSize={pageSize}
        pageSizes={[10, 20, 30]}
        size="md"
        totalItems={tasks.length}
        onChange={handlePaginationChange}
      />

      {showDeleteModal && currentTaskId !== null && (
        <DeleteTask
          taskId={currentTaskId}
          onDeleteResult={handleDeleteResult}
        />
      )}

    </div >
  );
};

export default TaskListView;