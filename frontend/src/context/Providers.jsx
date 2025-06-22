import { useState, useCallback } from "react"
import { PointsContext, HeartsContext } from "./Context";

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

const HeartsProvider = ({ children }) => {
    const [hearts, setHearts] = useState(3)

    const value = {
        hearts,
        setHearts
    }

    return (
        <HeartsContext.Provider value={value}>
            {children}
        </HeartsContext.Provider>
    )
}

const Providers = ({ children }) => {
    return (
        <PointsProvider>
            <HeartsProvider>
                {children}
            </HeartsProvider>
        </PointsProvider>
    );
};

export default Providers;
