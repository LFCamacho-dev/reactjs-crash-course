import { Task } from "./Task"

export const Tasks = ({tasks, onDelete, onSetReminder}) => {

  return (
    <>
        {tasks.map((task) => {
            return(
                <Task key={task.id} task={task} onDelete={onDelete} onSetReminder={onSetReminder}/>
            )
        })}

    </>
  )

}
