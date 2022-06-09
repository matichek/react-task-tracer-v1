import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder task' : 'task'}`} 
    onDoubleClick={() => onToggle(task.id)} 
    >
      <FaTimes className="text-indigo-800 float-right cursor-pointer text-2xl" onClick={() => onDelete(task.id)} />
      <h3 className="text-indigo-700 text-4xl mb-4 font-bold">{task.text}</h3>
      <p className="text-indigo-900 text-sm">{task.day}</p>
    </div>
  )
}

export default Task