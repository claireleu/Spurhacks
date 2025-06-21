import { useNavigate } from 'react-router-dom';
import bird from '../assets/duoslango.png';
import { BackgroundContainer } from './components';

const Heart = () => {
    return (
        <div className='hover:scale-105 transition-all'>
            <svg width="49" viewBox="0 0 98 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="14" width="14" height="28" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="84" y="14" width="14" height="28" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="84" width="14" height="28" transform="rotate(90 84 0)" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="42" width="14" height="28" transform="rotate(90 42 0)" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="14" y="42" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="28" y="56" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="70" y="42" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="42" y="14" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="56" y="56" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
                <rect x="42" y="70" width="14" height="14" fill="#D9D9D9" fill-opacity="0.8" />
            </svg>
        </div>

    )
}

const GameOverButton = ({ label, icon, to }) => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => {
          if (to) {
            setTimeout(() => {
              navigate(to);
            }, 200);
          }
          if (label === 'Restart') {
            window.location.reload();
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

function GameOver() {
    return (
        <BackgroundContainer>
            <div className="flex flex-col justify-center items-center relative w-[90vw] max-w-[700px] h-fit rounded-3xl border-4 border-white bg-radial from-muddy-waters-500 to-cape-palliser-600 p-8 gap-5 shadow-lg">
                <h1 className="text-white text-center w-full font-Jersey-15 text-7xl">Lesson Over</h1>
                <div className='flex flex-row h-1/3 gap-3'>
                    <Heart />
                    <Heart />
                    <Heart />
                </div>
            </div>
            <div className="flex flex-row mt-8 mb-8 gap-2">
                <GameOverButton label={"Restart"} />
                <GameOverButton label={"Quit"} to="/"/>
            </div>

            <img
                src={bird}
                alt="Duoslango"
                className="absolute bottom-0 left-0 object-contain z-20 scale-x-[-1]"
                style={{ pointerEvents: "none" }}
            />
        </BackgroundContainer>
    );
}

export default GameOver; 