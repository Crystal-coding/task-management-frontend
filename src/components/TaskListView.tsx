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
  Pagination
} from '@carbon/react';
import { fetchTasks as apiFetchTasks } from "../api/taskApi";
import { Task } from "../types/task";


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
  }
];


const TaskListView: React.FC = () => {

  // set initial states
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState(10);

  // get tasks from api
  const fetchTasks = async () => {
    const data = await apiFetchTasks();
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


  const rows = currentData.map((task) => ({
    id: task.id.toString(),
    title: task.title,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate
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
    </div >
  );
};

export default TaskListView;