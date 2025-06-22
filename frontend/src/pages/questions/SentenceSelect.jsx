import React from "react";
import crying from "../../assets/crying.png";

export const SentenceSelect = () => {
  return (
    <div className="bg-[#fff4ec] flex flex-row justify-center w-full">
      <div className="bg-[#fff4ec] w-[1440px] h-[1024px] relative">

        {/* Check Button */}
        <div className="absolute w-[272px] h-[90px] top-[870px] left-[1080px]">
          <div className="relative w-[270px] h-[90px] rounded-[30px]">
            <div className="absolute w-[270px] h-[90px] top-0 left-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(223,208,196,1)_100%)]" />
            <div className="absolute w-[132px] top-[17px] left-[75px] font-Jersey-15 font-normal text-[#b69e92] text-[55px] tracking-[0] leading-[normal]">
              CHECK
            </div>
          </div>
        </div>

        {/* Close Icon */}
        <div className="absolute top-[52px] left-[82px] font-Jersey-15 font-normal text-[#a6a6a6] text-[80px] tracking-[0] leading-[normal] whitespace-nowrap">
          X
        </div>

        {/* Answer Options */}
        <div className="flex flex-col w-[827px] h-[280px] items-center justify-center gap-5 absolute top-[493px] left-[306px]">
          {/* Option 1 */}
          <div className="w-[730.73px] relative h-20">
            <div className="relative w-[729px] h-20">
              <div className="absolute w-[720px] h-20 top-0 left-1 bg-white rounded-xl border-2 border-solid border-neutral-200 shadow-[0px_2px_0px_#e5e5e5]" />
              <p className="w-[729px] h-12 top-[21px] left-0 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px]">
                Bro that fit is giving Ohio energy ngl, looking kinda skibidi toilet if you ask me
              </p>
            </div>
          </div>

          {/* Option 2 */}
          <div className="w-[730.73px] relative h-20">
            <div className="relative w-[729px] h-20">
              <div className="absolute w-[720px] h-20 top-0 left-1 bg-white rounded-xl border-2 border-solid border-neutral-200 shadow-[0px_2px_0px_#e5e5e5]" />
              <p className="w-[729px] h-[43px] top-[19px] left-0 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px]">
                Yo my rizz was unmatched, I was giving sigma energy the whole time
              </p>
            </div>
          </div>

          {/* Option 3 */}
          <div className="w-[722px] relative h-20">
            <div className="relative w-[720px] h-20 bg-white rounded-xl border-2 border-solid border-neutral-200 shadow-[0px_2px_0px_#e5e5e5]">
              <p className="w-[688px] h-[43px] top-[17px] left-2.5 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px]">
                Just been mewing all day to get that sigma jawline, gotta lock in and looksmax fr fr
              </p>
            </div>
          </div>
        </div>

        {/* Prompt Section (Top Bubble) */}
        <div className="absolute w-[942px] h-[296px] top-[161px] left-[249px]">
          <div className="inline-flex top-0 left-0 flex-col items-end absolute">
            <div className="relative w-[686px] h-[169px]">
              <div className="inline-flex items-center gap-2.5 px-[26px] py-3.5 absolute top-[57px] left-[122px] bg-white rounded-[15px] border-2 border-solid border-neutral-200">
                <p className="relative w-fit mt-[-2.00px] font-Jersey-15 font-normal text-[#e0734f] text-6xl tracking-[0] leading-[39px] whitespace-nowrap">
                  What did you do today?
                </p>
              </div>
              <img className="absolute w-[114px] h-[114px] top-7 left-0 object-cover" alt="Image" src={crying} />
            </div>
          </div>
        </div>

        {/* User Input Section (Bottom Bubble) */}
        <div className="absolute w-[942px] h-[169px] top-[296px] left-[249px]">
          <div className="inline-flex top-0 left-0 flex-col items-start absolute">
            <div className="relative w-[686px] h-[169px]">
              <div className="inline-flex items-center gap-2.5 px-[26px] py-3.5 absolute top-[57px] left-[122px] bg-white rounded-[15px] border-2 border-solid border-neutral-200 min-h-[100px]">
                <div className="relative w-[530px] h-[60px] border-b-2 border-solid border-[#afafaf]" />
              </div>
              <div className="absolute w-[114px] h-[114px] top-7 left-0 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-orange-300 rounded-full flex items-center justify-center">
                  <div className="text-orange-800 text-2xl">👤</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SentenceSelect;