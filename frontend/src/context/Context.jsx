import { createContext } from "react";

const PointsContext = createContext();
PointsContext.displayName = "PointsContext"

const HeartsContext = createContext();
HeartsContext.displayName = "HeartsContext"

const ModeContext = createContext();
ModeContext.displayName = "HeartsContext"

export { PointsContext, HeartsContext, ModeContext }