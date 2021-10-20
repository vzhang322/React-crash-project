import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log('tasks:', tasks)
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks
