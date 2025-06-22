import logo from "../assets/duoslango-logo.png";
import bird from "../assets/duoslango.png";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "./components";
import { usePoints } from "../context/Points";

const HomeButton = ({ label, icon, to }) => {
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

  return (
    <BackgroundContainer>
      <div className="absolute top-5 right-5 font-Jersey-15 text-3xl text-white bg-black bg-opacity-30 px-4 py-2 rounded-lg">
        
      </div>
      <div className="relative w-[90vw] max-w-[700px] h-fit rounded-3xl border-4 border-white bg-gradient-to-b from-porsche-500 to-burnt-sienna-400 flex items-center p-8 shadow-lg">
        <img
          src={logo}
          alt="Duoslango logo"
          className="h-[110px] object-contain z-10"
        />
        <img
          src={bird}
          alt="Duoslango"
          className="absolute bottom-0 right-8 h-[140px] object-contain z-20"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div className="flex flex-row mt-8 mb-8 gap-2">
        <HomeButton label={"Endurance"} to="/endurance" />
        <HomeButton label={"Rush"} to="/rush"/>
      </div>
      <div className="py-3 px-5 rounded-2xl w-fit flex justify-center bg-amber-50">
        <p className="italic text-burning-sand-500 text-3xl font-mono text-center">
          "eh put a saying here"
        </p>
      </div>
    </BackgroundContainer>
  );
}

export default Home;
