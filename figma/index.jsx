import React from "react";
import { BuildingBlocks } from "./BuildingBlocks";
import duoslango12 from "./duoslango-1-2.png";
import duoslangoLogo1 from "./duoslango-logo-1.png";

export const LaunchPage = () => {
  const handleSelectClick = () => {
    console.log("SELECT button clicked!");
  };

  return (
    <div className="bg-[#d29d83] flex flex-row justify-center w-full">
      <div className="bg-[#d29d83] w-[1440px] h-[1024px]">
        <div className="relative h-[1024px] bg-[url(/dtop-background-1.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-[1300px] h-[500px] top-[69px] left-[70px] rounded-[50px] border-[5px] border-solid border-black shadow-[0px_0px_0px_5px_#ffffff]">
            <img
              className="absolute w-[1208px] h-[191px] top-[149px] left-[41px] object-cover"
              alt="Duoslango logo"
              src={duoslangoLogo1}
            />

            <img
              className="absolute w-[439px] h-[356px] top-[139px] left-[779px] object-cover"
              alt="Duoslango"
              src={duoslango12}
            />
          </div>

          <div
            className="absolute w-[323px] h-[100px] top-[597px] left-[345px] cursor-pointer"
            onClick={handleSelectClick}
          >
            <div className="absolute w-[323px] h-[100px] top-0 left-0">
              <div className="relative w-[337px] h-[116px] -top-2 -left-2 rounded-[50px] border-8 border-solid border-white shadow-[0px_4px_4px_#916955]">
                <div className="absolute w-[228px] top-2.5 left-[27px] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
                  SELECT
                </div>
              </div>
            </div>

            <BuildingBlocks
              className="!h-[90px] !rounded-[50px] !absolute bg-[url(/image.svg)] !left-[214px] !w-[100px] !top-[5px]"
              type="icon"
            />
          </div>

          <div className="absolute w-[695px] h-[203px] top-[589px] left-[683px] bg-[#d29d83] rounded-[50px] border-8 border-solid border-white shadow-[0px_4px_4px_#916955]">
            <div className="-top-px left-[50px] absolute w-[226px] [text-shadow:4px_6px_4px_#00000040] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
              MOD 1
            </div>

            <div className="-top-px left-[340px] absolute w-[226px] [text-shadow:4px_6px_4px_#00000040] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
              MOD 2
            </div>

            <div className="top-[79px] left-[50px] absolute w-[226px] [text-shadow:4px_6px_4px_#00000040] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
              MOD 3
            </div>

            <div className="top-[79px] left-[340px] absolute w-[226px] [text-shadow:4px_6px_4px_#00000040] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
              MOD 4
            </div>
          </div>

          <div className="absolute w-[266px] h-[116px] top-[589px] left-[62px] rounded-[50px] border-8 border-solid border-white shadow-[0px_4px_4px_#916955]">
            <div className="absolute -top-px left-9 [-webkit-text-stroke:1px_#ffffff] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
              START
            </div>
          </div>

          <div className="absolute w-[1440px] h-[189px] top-[835px] left-0 bg-white">
            <p className="absolute top-[52px] left-[397px] [font-family:'Roboto_Mono-MediumItalic',Helvetica] font-medium italic text-[#d29d83] text-[50px] tracking-[0] leading-[normal]">
              “eh put a saying here”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};