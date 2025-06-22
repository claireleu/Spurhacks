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

    const getPoints = useCallback(() => points, [points]);
    const getHighScore = useCallback(() => highscore, [highscore]);

    const value = {
        highscore,
        setHighScore,
        points,
        setPoints,
        addPoints,
        subtractPoints,
        getPoints,
        getHighScore
    };

    return (
        <PointsContext.Provider value={value}>
            {children}
        </PointsContext.Provider>
    );
}; 

export default PointsProvider
