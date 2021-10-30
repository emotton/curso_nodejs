export default function ComParametro(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            <p>{props.nota}</p>
        </div>
    );
};