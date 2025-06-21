import amongus from "./assets/amongus.png";
import { Word } from "./components.jsx";

function FillTheBlank() {

    const handleClickOption = () => {
        console.log("Option clicked");
    };

    return (
        <div className="bg-[var(--color-grey)] min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between h-full">

                {/* Top Bar with X and Hearts */}
                <div className="w-full flex justify-between items-center px-4 py-2">
                    <div className="[font-family:'Jersey_10-Regular',Helvetica] font-normal text-gray-400 text-5xl cursor-pointer">
                        X
                    </div>
                    {/* Placeholder for hearts */}
                    <div></div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full my-8">
                    <img
                        className="w-1/2 md:w-1/3 lg:w-1/4 h-auto"
                        alt="Among Us"
                        src={amongus}
                    />
                    <div className="flex items-center justify-center gap-2">
                        <div className="font-['Jersey_15-Regular',Helvetica] font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide">
                            Erm what the
                        </div>
                        <div className="font-['Jersey_15-Regular',Helvetica] font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide">
                            ________
                        </div>
                        <div className="font-['Jersey_15-Regular',Helvetica] font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl">
                            .
                        </div>
                    </div>
                </div>

                {/* Word Bank */}
                <div className="flex flex-wrap items-center justify-center gap-4 my-8">
                    <Word
                        divClassName="text-2xl md:text-3xl font-['Jersey_15-Regular',Helvetica]"
                        text="sigma"
                    />
                    <Word
                        divClassName="text-2xl md:text-3xl font-['Jersey_15-Regular',Helvetica]"
                        text="sus"
                    />
                    <Word
                        divClassName="text-2xl md:text-3xl font-['Jersey_15-Regular',Helvetica]"
                        text="skibidi"
                    />
                    <Word
                        divClassName="text-2xl md:text-3xl font-['Jersey_15-Regular',Helvetica]"
                        text="toilet"
                    />
                </div>

                {/* Check Button */}
                <div className="w-full flex justify-end px-4 py-2">
                    <div className="w-full max-w-xs rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
                        <div className="text-center p-4 font-['Jersey_15-Regular',Helvetica] font-normal text-gray-500 text-3xl md:text-4xl">
                            CHECK
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FillTheBlank;