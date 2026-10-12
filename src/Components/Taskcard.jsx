function Taskcard(props) {
    return (
        <div>
            <h3>Materia: {props.materia}</h3>
            <p>Docente: {props.docente}</p>
            <p>Fecha: {props.fecha}</p>
            <p>Estado: {props.estado}</p>
        </div>
    );
}

export default Taskcard;