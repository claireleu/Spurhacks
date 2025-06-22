import { useState, useCallback, useEffect } from "react"
import { PointsContext, HeartsContext, ModeContext } from "./Context";

const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(() => {
        const savedPoints = localStorage.getItem('points');
        return savedPoints ? parseInt(savedPoints, 10) : 0;
    });

    const [highscore, setHighScore] = useState(() => {
        const savedHighScore = localStorage.getItem('highscore');
        return savedHighScore ? parseInt(savedHighScore, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('points', points);
        if (points > highscore) {
            setHighScore(points);
            localStorage.setItem('highscore', points);
        }
    }, [points, highscore]);

    const addPoints = useCallback(() => {
        setPoints(prev => prev + 1);
    }, []);

    const resetPoints = useCallback(() => {
        setPoints(0);
    }, []);

    const value = {
        points,
        highscore,
        addPoints,
        resetPoints,
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
