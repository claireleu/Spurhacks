import logo from "../assets/duoslango-logo.png";
import bird from "../assets/birdheader.png";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "./components";
import { useMode, usePoints } from "../context/useContext";
import { useEffect } from "react";

const HomeButton = ({ label, icon, to }) => {
  const { setMode } = useMode()

  useEffect(() => {
    setMode("")
  }, [])

  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (to) {
          setTimeout(() => {
            navigate(to);
          }, 200);
        }
      }}
      className={`flex items-center justify-center rounded-full border-4 border-white text-white px-6 py-2 text-5xl tracking-wider font-Jersey-15 
      bg-gradient-to-b from-cape-palliser-400 to-tumbleweed-500 shadow-md mr-4 cursor-pointer 
      hover:from-cape-palliser-400 hover:to-tumbleweed-600 hover:border-burning-sand-200 hover:scale-105 
      active:from-cape-palliser-500 active:to-tumbleweed-700 active:border-burning-sand-300 active:scale-105 transition-all duration-200`}
    >
      {label} {icon}
    </button>
  );
};

function Home() {
  const { points } = usePoints();

  return (
    <BackgroundContainer>
      <div className="absolute top-5 right-5 font-Jersey-15 text-3xl text-white bg-black bg-opacity-30 px-4 py-2 rounded-lg">
        Highscore: {points}
      </div>
      <div className="relative flex-col h-fit w-fit rounded-3xl border-4 border-white bg-gradient-to-b from-porsche-500 to-burnt-sienna-400 flex items-center shadow-lg">
        <img
          src={logo}
          alt="Duoslango logo"
          className="min-h-20 md:min-h-10 lg:min-h-10 w-auto object-contain pt-10 px-8 z-10"
        />
        <img
          src={bird}
          alt="Duoslango"
          className="max-h-30 w-auto object-contain z-20 flex-1/5"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div className="flex flex-row mt-8 mb-8 gap-2">
        <HomeButton label={"REGULAR"} to="/endurance" />
        <HomeButton label={"RUSH"} to="/rush" />
      </div>
    </BackgroundContainer>
  );
}

export default Home;
