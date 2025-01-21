import React from 'react';
import { Modal } from '@carbon/react';
import { deleteTask } from '../api/taskApi';

interface DeleteTaskProps {
  taskId: number;
  onDeleteResult: (taskId: number, success: boolean) => void;
}


const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, onDeleteResult }) => {
  const handleConfirmDelete = async () => {
    try {
      await deleteTask(taskId); // 调用后端 API
      onDeleteResult(taskId, true); // 通知成功
    } catch (error) {
      console.error('Delete failed:', error);
      onDeleteResult(taskId, false); // 通知失败
    }
  };

  return (
    <Modal
      open={true}
      modalHeading="Confirm Deletion"
      modalLabel="Task Deletion"
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      onRequestClose={() => onDeleteResult(taskId, false)} // 取消时通知失败
      onRequestSubmit={handleConfirmDelete} // 确认删除时调用
    >
      Are you sure you want to delete this task?
    </Modal>
  );
};

export default DeleteTask;
