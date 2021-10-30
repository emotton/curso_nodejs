import React from 'react';
import alunos from '../../data/alunos';

/*eslint-disable */
export default props => {
    const li1 = <li>{alunos[0].id} - {alunos[0].nome} - {alunos[0].nota}</li>
    const lis = alunos.map((aluno) => {
        return <li key={aluno.id}>{aluno.id} - {aluno.nome} - {aluno.nota}</li>
    })
    return (
        <div>
            <ul style={{ listStyle: "none"}}>
                {lis}
            </ul>
        </div>
    )
}