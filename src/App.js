import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(()=> {

    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }


    getTasks()


  }, []) 

  // fetch tassk tasks


  const fetchTasks = async() => {
    
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()    

    return data
  }


    // fetch one task

  const fetchTask = async(id) => {
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()    

    return data
  }



  // add task
  const addTask = async (task) => {


    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = {id, ...task }
    // setTasks([...tasks, newTask])


    const data = await res.json()

    setTasks([...tasks, data])

  }

  const deleteTask = async (id) => {
    console.log('delete', id);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)

    const updTask = {...taskToToggle, 
    reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))

  }
  
  return (
    <div className="App">
      
      <Header 
        link1_title="Hello" 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      <div className="container">
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h1 className="text-grey-600 p-6 text-2xl font-bold py-6">No tasks</h1>}
      </div>
      

      <Footer />

    </div>
  );
}

export default App;
