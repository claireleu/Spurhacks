import background from "../assets/background.png";
import fullHeart from "../assets/fullHeart.png";
import emptyHeart from "../assets/emptyHeart.png";

const BackgroundContainer = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center select-none px-10 py-5"
            style={{ backgroundImage: `url(${background})` }}>
            {children}
        </ div>
    )
}

const Heart = ({ className, filled = false, pulse = false }) => {
    return (
        <div className={`hover:scale-103 transition-all w-16 h-16 ${className} ${pulse && "animate-pulse duration-1000 ease-in-out"}`}>
            <img 
                src={filled ? fullHeart : emptyHeart } 
                alt="heart" 
                className={"w-full h-full object-contain"}
            />
        </div>
    )
}

export { BackgroundContainer, Heart }