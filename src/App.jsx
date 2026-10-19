
import { tasks } from './data/tasks';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TaskFilter from './Components/TaskFilter';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Mis tareas
                </h2>

                <TaskFilter tasks={tasks} />
            </main>

            <Footer />
        </div>
    );
}

export default App;
