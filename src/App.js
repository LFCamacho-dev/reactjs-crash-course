import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";


function App() {

    const [showAddTask, setShowAddTask ]= useState(false)

    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Food Shopping",
            "day": "Feb 5th at 2:30pm",
            "reminder": false
        }
    ])

    /** Add New Task */
    const addTask = (task) => {
        // console.log(task);
        const id = Date.now()
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }



    /** Delete Tasks */
    const deleteTask = (id) => {
        console.log('delete', id);
        setTasks(tasks.filter(task => task.id !== id))
    }
    
    /** Toggle Reminder */
    const toggleReminder = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }



  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        { tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onSetReminder={toggleReminder}/> : <p>No Tasks To Show</p> }
    </div>
  );
}

export default App;
