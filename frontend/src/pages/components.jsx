import background from "../assets/background.png";
import heartImg from "../assets/heart.png";

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
        <div className={`hover:scale-103 transition-all ${className} ${pulse && "animate-pulse duration-1000 ease-in-out"}`}>
            <img 
                src={heartImg} 
                alt="heart" 
                className={`w-full h-full object-contain ${filled ? 'opacity-100' : 'opacity-50'}`}
            />
        </div>
    )
}



export { BackgroundContainer, Heart }