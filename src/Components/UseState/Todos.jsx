import React, { useState } from 'react'
import EditTodo from './EditTodo'

export default function Todos() {
    const [inputTask, setInputTask] = useState("")      //Step- 6
    const [tasks, setTasks] = useState([        // Step -3
        {
            id:0,
            task: 'Task 1',
            completed : false,
            isEditing: false,
        },
        {
            id:1,
            task: 'Task 2',
            completed : false,
            isEditing: false,
        },
        {
            id:2,
            task: 'Task 3',
            completed : false,
            isEditing: false,
        },
    ])

    const onChangeInput = (e) => {
        setInputTask(e.target.value)
        // setInputTask("")
    }

    const onAddTask = ()=>{         // Step -8
        console.log("Clicked")
        console.log(inputTask)
        // setInputTask("")
        if (inputTask === "") {
            alert("Enter a Task")
        }
        else {
            let newTask = [
                ...tasks, {
                    id: tasks.length,
                    task: inputTask,
                    completed : false,
                    isEditing: false,
                }
            ]
            setTasks(newTask)
            setInputTask("")
        }
    }

    const onDeleteTask =(id) => {       // Step - 10
        let newTasks = tasks.filter(
            (todos)=> {
                return(
                    todos.id !== id
        )}
        )
        setTasks(newTasks)
    }

    const onStyles = () => {

    }

    const handleToggleComplete = (id) => {  // Step - 12
        let updatedTasks = [...tasks]
        updatedTasks[id].completed = !updatedTasks[id].completed
        setTasks(updatedTasks)
    }


  return (
    <div>
      <h1>My Tasks List</h1>
      <div>
        <input value={inputTask} onChange={onChangeInput} type='text' placeholder='Enter a Task'/> {/* Step-1 */}
        <button onClick={onAddTask}>Add Task</button>{/* Step-1 */}
{/* Step-5 ---> onAddTask */}       {/* Step-7 ---> value, onChange in input field */}

      </div>
      <h3>Added Tasks</h3>
      <ul>
        {/* <li>Task 1 <button>❌</button></li> */} {/* Step-2 */}
        {/* <li>Task 2 <button>❌</button></li> */} {/* Step-2 */}
        {
            tasks.map(                                  
                (todos) => {todos.isEditing ? <EditTodo/> :
                (<li key={todos.id} onClick={onStyles}><input type='checkbox' onClick={() => handleToggleComplete(todos.id)}/>
                <span style= {{textDecoration:todos.completed ? 'line-through': "none"}}>
                    {todos.task} 
                </span>
                    {/* Step-11 ---> checkbox and hangleToggleComplete and style in span */}
                <button onClick={() => {onEditTask(todos.id)}}>Edit</button>
                <button onClick={() => { onDeleteTask(todos.id)}}>❌</button></li>
            )})
        }           {/* Step-4 */}      {/* Step-9 ---> onDeleteTask */}
        
      </ul>
      <h3>Completed Tasks</h3>
      
    </div>
  )
}
