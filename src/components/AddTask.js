import { useState } from "react"

export const AddTask = ({onAdd}) => {

    const [text, setText ] = useState('')
    const [day, setDay ] = useState('')
    const [reminder, setReminder ] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()

        if( !text ) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }


  return (

    <form onSubmit={onSubmitForm} className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input
              type="text"
              value={text}
              onChange={(e) => {setText(e.target.value)} }
              placeholder="Add Task" />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input
              type="text"
              value={day}
              onChange={(e) => {setDay(e.target.value)} }
              placeholder="Add Day & Time" />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => {setReminder(e.currentTarget.checked)} }
              />
        </div>

        <input className="btn btn-block" type="submit" value='Save Task'/>

    </form>

  )
}
