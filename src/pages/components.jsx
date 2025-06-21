import background from "../assets/background.png";

const BackgroundContainer = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center select-none p-5"
            style={{ backgroundImage: `url(${background})` }}>
            {children}
        </ div>
    )
}

export { BackgroundContainer }