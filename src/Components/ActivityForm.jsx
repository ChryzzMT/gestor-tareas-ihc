import { useState } from "react"

// VALIDACIÓN DE ESTADOS: mismos textos que tasks.js y TaskCard
const ESTADOS = ['Inactivo', 'Pendiente', 'En progreso', 'Completada']

const initialForm = {
    nombre_materia: '',
    docente: '',
    tarea: '',
    fecha: '',
    estado: 'Inactivo'
}

function ActivityForm({ onAddTask }) {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})

    function changeForm(event) {
        const { id, value } = event.target

        setForm({
            ...form,
            [id]: value
        })
    }

    // VALIDACIONES
    function validate() {
        const newErrors = {}

        if (!form.nombre_materia.trim()) {
            newErrors.nombre_materia = 'Escribe el nombre de la materia'
        }

        if (!form.docente.trim()) {
            newErrors.docente = 'Escribe el nombre del docente'
        }

        // Más de 10 caracteres sin contar espacios
        if (form.tarea.replace(/\s/g, '').length <= 10) {
            newErrors.tarea = 'La descripción debe tener más de 10 caracteres (sin contar espacios)'
        }

        if (!form.fecha) {
            newErrors.fecha = 'Selecciona una fecha'
        }

        // El estado debe coincidir con los que ya existen
        if (!ESTADOS.includes(form.estado)) {
            newErrors.estado = 'Estado no válido'
        }

        return newErrors
    }

    function preventSubmit(event) {
        event.preventDefault()

        const newErrors = validate()
        setErrors(newErrors)

        // Si hay errores, no se envía nada
        if (Object.keys(newErrors).length > 0) return

        const newTask = {
            id: Date.now(),
            materia: form.nombre_materia,   // llave que lee TaskCard
            docente: form.docente,
            tarea: form.tarea,
            fecha: form.fecha,              // ISO, igual que tasks.js
            estado: form.estado
        }

        onAddTask(newTask)   // se comunica con App

        setForm(initialForm)
        setErrors({})
    }

    return (
        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Nueva tarea</h2>

            <form onSubmit={preventSubmit}>
                <label htmlFor="nombre_materia" className="block mt-4 mb-1">Nombre materia</label>
                <input id="nombre_materia" type="text" value={form.nombre_materia}
                       onChange={changeForm}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left" />
                {errors.nombre_materia && <p className="text-red-600 text-sm">{errors.nombre_materia}</p>}

                <label htmlFor="docente" className="block mt-4 mb-1">Nombre docente</label>
                <input id="docente" type="text" value={form.docente}
                       onChange={changeForm}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left" />
                {errors.docente && <p className="text-red-600 text-sm">{errors.docente}</p>}

                <label htmlFor="tarea" className="block mt-4 mb-1">Descripcion de la tarea</label>
                <input id="tarea" type="text" value={form.tarea}
                       onChange={changeForm}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left" />
                {errors.tarea && <p className="text-red-600 text-sm">{errors.tarea}</p>}

                <label htmlFor="fecha" className="block mt-4 mb-1">Fecha</label>
                <input id="fecha" type="date" value={form.fecha}
                       onChange={changeForm}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left" />
                {errors.fecha && <p className="text-red-600 text-sm">{errors.fecha}</p>}

                <label htmlFor="estado" className="block mt-4 mb-1">Estado</label>
                <select id="estado" value={form.estado}
                        onChange={changeForm}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left">
                    {ESTADOS.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                    ))}
                </select>
                {errors.estado && <p className="text-red-600 text-sm">{errors.estado}</p>}

                <button type="submit"
                        className="mt-4 px-5 py-3 bg-blue-600 text-white rounded-lg">
                    Agregar tarea
                </button>
            </form>
        </section>
    )
}

export default ActivityForm