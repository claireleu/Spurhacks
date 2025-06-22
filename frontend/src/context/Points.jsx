import { createContext, useContext, useState, useCallback } from "react";

const PointsContext = createContext();
export const usePoints = () => useContext(PointsContext);

const PointsProvider = ({ children }) => {
    const [highscore, setHighScore] = useState(0)
    const [points, setPoints] = useState(0)

    const addPoints = useCallback((amount) => {
        setPoints(prev => prev + amount);
    }, []);

    const subtractPoints = useCallback((amount) => {
        setPoints(prev => Math.max(0, prev - amount));
    }, []);

    const resetPoints = useCallback(() => {
        setPoints(0);
    }, []);

    const updateHighScore = useCallback((newScore) => {
        setHighScore(prev => Math.max(prev, newScore));
    }, []);

    const value = {
        points,
        highscore,
        addPoints,
        subtractPoints,
        resetPoints,
        updateHighScore
    };

    return (
        <PointsContext.Provider value={value}>
            {children}
        </PointsContext.Provider>
    );
};

export default PointsProvider
