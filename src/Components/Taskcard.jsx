import { useState } from 'react';

// FORMATEO DE FECHAS: '2026-10-26' → '26/10/2026'
function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-')
    return `${day}/${month}/${year}`
}

function Taskcard({ materia, docente, tarea, fecha, estado }) {
    const [estadoActual, setEstadoActual] = useState(estado);

    function cambiarEstado() {
        setEstadoActual(
            estadoActual === 'Completada'
                ? 'Pendiente'
                : 'Completada'
        );
    }

    return (
        <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">
                {materia}
            </h3>

            <p>Docente: {docente}</p>
            {tarea && <p>Tarea: {tarea}</p>}
            <p>Fecha: {formatDate(fecha)}</p>

            <p className="mt-2">
                Estado:{' '}
                <span
                    className={
                        estadoActual === 'Completada'
                            ? 'text-blue-400 font-semibold'
                            : 'text-gray-300 font-semibold'
                    }
                >
                    {estadoActual}
                </span>
            </p>

            <button
                onClick={cambiarEstado}
                className={`mt-3 px-4 py-2 rounded text-white ${
                    estadoActual === 'Completada'
                        ? 'bg-gray-100 hover:bg-blue-600'
                        : 'bg-blue-500 hover:bg-gray-300'
                }`}
            >
                {estadoActual === 'Completada'
                    ? 'Marcar como pendiente'
                    : 'Marcar como completada'}
            </button>
        </div>
    );
}

export default Taskcard;