import React, { createContext, useContext, useState } from 'react';

const ProgressoCursoContext = createContext();

export function ProgressoCursoProvider({ children }) {
    const [progressoCurso, setProgressoCurso] = useState({ aulasConcluídas: 0 });

    return (
        <ProgressoCursoContext.Provider value={{ progressoCurso, setProgressoCurso }}>
            {children}
        </ProgressoCursoContext.Provider>
    );
}

export function useProgressoCurso() {
    return useContext(ProgressoCursoContext);
}
