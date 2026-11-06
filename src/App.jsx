import { useState } from 'react';
import { tasks as initialTasks } from './data/tasks';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TaskFilter from './Components/TaskFilter';
import ActivityForm from './components/ActivityForm';
import './App.css';

function App() {
    const [taskList, setTasks] = useState(initialTasks);

    // Esta función se la pasamos al formulario
    const addTask = (newTask) => {
        setTasks([...taskList, newTask]);
    };

    // Elimina la tarea con el id indicado (se llama solo tras confirmar)
    const deleteTask = (id) => {
        setTasks(taskList.filter((task) => task.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {/* Sin mx-auto: el contenido queda a la izquierda */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                <ActivityForm onAddTask={addTask} />

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Mis tareas
                </h2>

                <TaskFilter tasks={taskList} onDeleteTask={deleteTask} />
            </main>

            <Footer />
        </div>
    );
}

export default App;