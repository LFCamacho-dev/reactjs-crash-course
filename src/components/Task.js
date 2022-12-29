
import { FaTimes } from 'react-icons/fa'

export const Task = ({task, onDelete, onSetReminder}) => {
    

  return (

    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onSetReminder(task.id)}>
        <h3>{task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )

}
