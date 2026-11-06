import { useState } from 'react';
import Taskcard from './Taskcard';

function TaskFilter({ tasks, onDeleteTask }) {
    const [busqueda, setBusqueda] = useState('');
    const [estado, setEstado] = useState('');
    // Tarea que el estudiante quiere eliminar (null = ninguna, modal cerrado)
    const [tareaAEliminar, setTareaAEliminar] = useState(null);

    const tareasFiltradas = tasks.filter((task) =>
        (
            task.docente.toLowerCase().includes(busqueda.toLowerCase()) ||
            task.materia.toLowerCase().includes(busqueda.toLowerCase())
        ) &&
        (estado === '' || task.estado === estado)
    );

    const confirmarEliminacion = () => {
        onDeleteTask(tareaAEliminar.id);
        setTareaAEliminar(null);
    };

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
                        <div key={task.id}>
                            <Taskcard {...task} />
                            <button
                                onClick={() => setTareaAEliminar(task)}
                                className="mt-2 w-full border border-red-300 text-red-600 rounded-lg py-2 hover:bg-red-50"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 py-6 text-center">
                    No se encontraron tareas.
                </p>
            )}

            {/* Cuadro de confirmación */}
            {tareaAEliminar && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            ¿Eliminar tarea?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            ¿Estás seguro de que quieres eliminar la tarea de{' '}
                            <strong>{tareaAEliminar.materia}</strong>? Esta acción no se puede deshacer.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setTareaAEliminar(null)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmarEliminacion}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                            >
                                Sí, eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default TaskFilter;