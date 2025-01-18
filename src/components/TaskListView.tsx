import React from "react";
import mockTasks from "../utils/mockTasks";
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

const rows = mockTasks.map((task) => ({
  id: task.id.toString(),
  title: task.title,
  priority: task.priority,
  status: task.status,
  dueDate: task.dueDate
}))

console.log(rows)

const TaskListView: React.FC = () => {
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
        page={1}
        pageNumberText="Page Number"
        pageSize={10}
        pageSizes={[
          10,
          20,
          30
        ]}
        size="md"
        totalItems={rows.length}
      />
    </div >
  );
};

export default TaskListView;