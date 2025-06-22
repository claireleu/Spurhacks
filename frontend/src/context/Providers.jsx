import { useState, useCallback, useEffect } from "react"
import { PointsContext, HeartsContext, ModeContext } from "./Context";

const PointsProvider = ({ children }) => {
    const [highscore, setHighScore] = useState(0)
    const [points, setPoints] = useState(0)

    const addPoints = useCallback((amount) => {
        setPoints(prev => prev + amount);
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

const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('gameMode');
        return savedMode || 'rush';
    });

    useEffect(() => {
        localStorage.setItem('gameMode', mode);
    }, [mode]);

    const value = {
        mode,
        setMode
    }
    return (
        <ModeContext.Provider value={value}>
            {children}
        </ModeContext.Provider>
    )
}

const Providers = ({ children }) => {
    return (
        <PointsProvider>
            <HeartsProvider>
                <ModeProvider>
                    {children}
                </ModeProvider>
            </HeartsProvider>
        </PointsProvider>
    );
};

export default Providers;
