import React from "react";
import { Icon } from "./Icon";
import duoslango11 from "./duoslango-1-1.png";
import duoslangoLogo1 from "./duoslango-logo-1.png";
import group1 from "./group-1.png";

export const LaunchPage = () => {
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
              className="absolute w-[439px] h-[356px] top-[139px] left-[784px] object-cover"
              alt="Duoslango"
              src={duoslango11}
            />
          </div>

          <div className="absolute w-[1440px] h-[189px] top-[835px] left-0 bg-white">
            <p className="absolute top-[52px] left-[397px] [font-family:'Roboto_Mono-MediumItalic',Helvetica] font-medium italic text-[#d29d83] text-[50px] tracking-[0] leading-[normal]">
              “eh put a saying here”
            </p>
          </div>

          <div className="absolute w-[321px] h-[100px] top-[607px] left-[345px]">
            <div className="h-[100px]">
              <div className="relative w-[323px] h-[100px]">
                <div className="absolute w-[323px] h-[100px] top-0 left-0">
                  <div className="relative w-[337px] h-[116px] -top-2 -left-2 rounded-[50px] border-8 border-solid border-white shadow-[0px_4px_4px_#916955]">
                    <div className="absolute w-[228px] top-2.5 left-[27px] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
                      SELECT
                    </div>
                  </div>
                </div>

                <div className="absolute w-[100px] h-[90px] top-[5px] left-[214px] rounded-[50px] rotate-90">
                  <Icon className="!absolute !w-[90px] !h-[100px] !top-[-5px] !left-[5px] !-rotate-90" />
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute w-[274px] h-[124px] top-[599px] left-[58px]"
            alt="Group"
            src={group1}
          />
        </div>
      </div>
    </div>
  );
};