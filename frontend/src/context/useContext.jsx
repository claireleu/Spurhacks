import { useContext } from "react";
import { PointsContext, HeartsContext, ModeContext } from "./Context";

const usePoints = () => {
    const context = useContext(PointsContext);
    if (!context) {
        throw new Error("useOrders must be used in the OrdersProvider");
    }
    return context;
};

const useHearts = () => {
    const context = useContext(HeartsContext);
    if (!context) {
        throw new Error("useOrders must be used in the OrdersProvider");
    }
    return context;
};

const useMode = () => {
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error("useOrders must be used in the OrdersProvider");
    }
    return context;
};

export { usePoints, useHearts, useMode }