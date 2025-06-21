import React from "react";
import b022Fea3A92Afffe3Fdad0Fef279333 from "./2b-02-2fea-3a-9-2afffe-3fdad-0fef-279333.png";
import { Word } from "./Word";

export const FillTheBlank = () => {
  return (
    <div className="bg-[#fff4ec] flex flex-row justify-center w-full">
      <div className="bg-[#fff4ec] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[272px] h-[90px] top-[870px] left-[1080px]">
          <div className="relative w-[270px] h-[90px] rounded-[30px]">
            <div className="absolute w-[270px] h-[90px] top-0 left-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(225,225,225,1)_100%)]" />

            <div className="absolute w-[132px] top-[17px] left-[75px] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-[#a6a6a6] text-[55px] tracking-[0] leading-[normal]">
              CHECK
            </div>
          </div>
        </div>

        <div className="absolute top-[52px] left-[82px] [font-family:'Jersey_10-Regular',Helvetica] font-normal text-[#a6a6a6] text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
          X
        </div>

        <div className="flex flex-col w-[1099px] items-center gap-[82px] px-0 py-px absolute top-[332px] left-[163px]">
          <div className="relative w-[933px] h-[226px]">
            <div className="absolute w-[597px] h-16 top-[104px] left-[336px]">
              <div className="flex w-[551px] items-center justify-center gap-0.5 relative top-[5px]">
                <div className="relative w-fit [font-family:'Jersey_15-Regular',Helvetica] font-normal text-[#3c3c3c] text-6xl tracking-[0] leading-[39px] whitespace-nowrap">
                  Erm what the
                </div>

                <div className="relative w-[166px] h-14 border-b-2 [border-bottom-style:solid] border-[#afafaf]" />

                <div className="relative w-fit [font-family:'Jersey_15-Regular',Helvetica] font-normal text-[#3c3c3c] text-6xl tracking-[0] leading-[39px] whitespace-nowrap">
                  .
                </div>
              </div>
            </div>

            <img
              className="absolute w-[304px] h-[226px] top-0 left-0"
              alt="Element"
              src={b022Fea3A92Afffe3Fdad0Fef279333}
            />
          </div>

          <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
            <Word
              className="!flex-[0_0_auto]"
              divClassName="!text-[45px] !font-normal ![font-family:'Jersey_15-Regular',Helvetica]"
              state="visible"
              text="sigma"
            />
            <Word
              className="!flex-[0_0_auto]"
              divClassName="!text-[45px] !font-normal ![font-family:'Jersey_15-Regular',Helvetica]"
              state="visible"
              text="sus"
            />
            <Word
              className="!flex-[0_0_auto]"
              divClassName="!text-[45px] !font-normal ![font-family:'Jersey_15-Regular',Helvetica]"
              state="visible"
              text="skibidi"
            />
            <Word
              className="!flex-[0_0_auto]"
              divClassName="!text-[45px] !font-normal ![font-family:'Jersey_15-Regular',Helvetica]"
              state="visible"
              text="toilet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* correct box */
export const CorrectBox = () => {
    return (
      <div className="w-[1440px] h-[211px]">
        <div className="fixed w-[1442px] h-[211px] top-0 left-0">
          <div className="relative w-[1440px] h-[211px] bg-[url(/rectangle-9.svg)] bg-[100%_100%]">
            <div className="absolute w-[270px] h-[90px] top-[55px] left-[1080px] bg-[#73da5e] rounded-[30px]">
              <div className="absolute w-[184px] top-[17px] left-[43px] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[55px] tracking-[0] leading-[normal]">
                CONTINUE
              </div>
            </div>
            <div className="absolute w-[90px] h-[90px] top-[55px] left-[150px]">
              <div className="relative h-[90px] bg-white rounded-[45px]">
                <img
                  className="absolute w-[43px] h-8 top-8 left-6"
                  alt="Vector"
                  src={vector1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* incorrect box */

  export const IncorrectBox = () => {
    return (
      <div className="w-[1440px] h-[211px]">
        <div className="fixed w-[1442px] h-[211px] top-0 left-0">
          <div className="relative w-[1440px] h-[209px] bg-[url(/group-5.png)] bg-[100%_100%]">
            <div className="absolute w-[270px] h-[90px] top-[55px] left-[1080px] bg-[#f43b48] rounded-[30px]">
              <div className="absolute w-[184px] top-[17px] left-[43px] [font-family:'Jersey_15-Regular',Helvetica] font-normal text-white text-[55px] tracking-[0] leading-[normal]">
                CONTINUE
              </div>
            </div>
            <div className="absolute w-[90px] h-[90px] top-[55px] left-[150px] bg-white rounded-[45px]">
              <img
                className="absolute w-[35px] h-[35px] top-7 left-7"
                alt="Vector"
                src={vector}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };