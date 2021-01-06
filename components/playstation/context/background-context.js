import { createContext, useState } from 'react';

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const [activeGame, setActiveGame] = useState('explore');

    return (
        <BackgroundContext.Provider value={{ activeGame, setActiveGame }}>
            {children}
        </BackgroundContext.Provider>
    )
}