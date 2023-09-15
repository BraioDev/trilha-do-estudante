import { useProgressoCurso } from './index';

export default function Curso() {
    const { progressoCurso, setProgressoCurso } = useProgressoCurso();

    const handleAulaConcluída = () => {
        setProgressoCurso({
            ...progressoCurso,
            aulasConcluídas: progressoCurso.aulasConcluídas + 1,
        });
    };

    return (
        <div>
            <p>Aulas concluídas: {progressoCurso.aulasConcluídas}</p>
            <button onClick={handleAulaConcluída}>Concluir aula</button>
        </div>
    );
}
