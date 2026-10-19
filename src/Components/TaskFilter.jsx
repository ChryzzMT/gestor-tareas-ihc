
import { useState } from 'react';
import Taskcard from './Taskcard';

function TaskFilter({ tasks }) {
    const [busqueda, setBusqueda] = useState('');
    const [estado, setEstado] = useState('');

    const tareasFiltradas = tasks.filter((task) =>
        (
            task.docente.toLowerCase().includes(busqueda.toLowerCase()) ||
            task.materia.toLowerCase().includes(busqueda.toLowerCase())
        ) &&
        (estado === '' || task.estado === estado)
    );

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-white"
                />

                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-white"
                >
                    <option value="">Todos los estados</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Completada">Completada</option>
                </select>
            </div>

            <p className="text-sm text-gray-600 mb-4">
                Tareas encontradas: {tareasFiltradas.length}
            </p>

            {tareasFiltradas.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {tareasFiltradas.map((task) => (
                        <Taskcard key={task.id} {...task} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 py-6 text-center">
                    No se encontraron tareas.
                </p>
            )}
        </section>
    );
}

export default TaskFilter;
