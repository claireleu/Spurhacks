import { useNavigate } from 'react-router-dom';
import { BackgroundContainer } from './components';
import { Heart } from './components';
import { useMode, usePoints } from '../context/useContext'

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
  const { points } = usePoints()
  const { mode } = useMode()

  return (
    <BackgroundContainer>
      <div className="flex flex-col justify-center items-center relative w-[90vw] max-w-[700px] h-fit rounded-3xl border-4 border-white bg-radial from-muddy-waters-500 to-cape-palliser-600 p-8 gap-5 shadow-lg">
        <h1 className="text-white text-center w-full font-Jersey-15 text-7xl">Lesson Over</h1>
        <h2 className="text-white text-center w-full font-Jersey-15 text-3xl">Questions Answered: {points}</h2>
        <div className='flex flex-row items-center justify-center h-1/3 w-1/2 gap-3'>
          <Heart />
          <Heart className="scale-120" />
          <Heart />
        </div>
      </div>
      <div className="flex flex-row my-8 gap-2">
        <GameOverButton label={"Try Again"} to={`/${mode}`} />
        <GameOverButton label={"Quit"} to="/" />
      </div>
    </BackgroundContainer>
  );
}

export default GameOver; 