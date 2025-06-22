import background from "../assets/background.png";

const BackgroundContainer = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center select-none px-10 py-5"
            style={{ backgroundImage: `url(${background})` }}>
            {children}
        </ div>
    )
}

const Heart = ({ className, filled=false, pulse=false }) => {
    const fillColor = filled ? "#ef4444" : "#D9D9D9";
    return (
        <div className={`hover:scale-103 transition-all ${className} ${pulse && "animate-pulse duration-1000 ease-in-out"}`}>
            <svg className="w-full h-full" viewBox="0 0 98 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="14" width="14" height="28" fill={fillColor} fillOpacity="0.8" />
                <rect x="84" y="14" width="14" height="28" fill={fillColor} fillOpacity="0.8" />
                <rect x="84" width="14" height="28" transform="rotate(90 84 0)" fill={fillColor} fillOpacity="0.8" />
                <rect x="42" width="14" height="28" transform="rotate(90 42 0)" fill={fillColor} fillOpacity="0.8" />
                <rect x="14" y="42" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
                <rect x="28" y="56" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
                <rect x="70" y="42" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
                <rect x="42" y="14" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
                <rect x="56" y="56" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
                <rect x="42" y="70" width="14" height="14" fill={fillColor} fillOpacity="0.8" />
            </svg>
        </div>
    )
}



export { BackgroundContainer, Heart }