import logo from "./assets/duoslango-logo.png";
import bird from "./assets/duoslango.png";
import background from "./assets/background.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Home() {

  const handleSelectClick = () => {
    console.log("SELECT button clicked!");
  };

  return (
    <div className="bg-[#d29d83] h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col h-2/3 w-auto">
        <div className="bg-[url(background)] h-1/5">
          <img
            className="h-full w-auto"
            alt="Duoslango logo"
            src={logo}
          />
          <img
            className="absolute w-1/3 object-cover"
            alt="Duoslango"
            src={bird}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
