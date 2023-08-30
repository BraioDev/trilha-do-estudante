import React, { createContext, useContext, useState } from 'react';

const BackgroundColorContext = createContext();

export function useBackgroundColor() {
    return useContext(BackgroundColorContext);
}

export function BackgroundColorProvider({ children }) {
    const [bodyBackgroundColor, setBodyBackgroundColor] = useState('var(--cinza)');

    const setBackgroundColor = (color) => {
        setBodyBackgroundColor(color);
    };

    const contextValue = {
        bodyBackgroundColor,
        setBackgroundColor,
    };

    return (
        <BackgroundColorContext.Provider value={contextValue}>
            {children}
        </BackgroundColorContext.Provider>
    );
}

