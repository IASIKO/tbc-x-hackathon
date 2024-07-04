import Image from "next/image";
import React from "react";
import completedIcon from "../../../public/assets/icons/completedIcon.svg";
import startIcon from "../../../public/assets/icons/starIcon.svg";

const ModuleRoadComp = () => {
  return (
    <main className="p-8 pt-0">
      <section>
        <div className="flex flex-col items-center p-6 text-center">
          <h1 className="text-[40px] font-bold">Financing basics</h1>
        </div>
        <div className="pt-8 flex flex-col items-center gap-8">
          <button className="w-[100px] h-[70px] rounded-[50%] bg-green-500 flex flex-col items-center justify-center hover:scale-105 shadow-[0_6px_0] shadow-green-700">
            <Image
              src={completedIcon}
              alt="Completed icon"
              className="w-[50px] h-[50px]"
            />
          </button>
          <button className="w-[100px] h-[70px] rounded-[50%] bg-green-500 flex flex-col items-center justify-center mr-20  hover:scale-105 shadow-[0_6px_0] shadow-green-700">
            <Image
              src={completedIcon}
              alt="Completed icon"
              className="w-[50px] h-[50px]"
            />
          </button>
          <button className="w-[100px] h-[70px] rounded-[50%] bg-gray-400 flex flex-col items-center justify-center mr-40  hover:scale-105 shadow-[0_6px_0] shadow-gray-500">
            <Image
              src={startIcon}
              alt="Completed icon"
              className="w-[50px] h-[50px]"
            />
          </button>
          <button className="w-[100px] h-[70px] rounded-[50%] bg-gray-400 flex flex-col items-center justify-center mr-10  hover:scale-105 shadow-[0_6px_0] shadow-gray-500">
            <Image
              src={startIcon}
              alt="Completed icon"
              className="w-[50px] h-[50px]"
            />
          </button>
          <button className="w-[100px] h-[70px] rounded-[50%] bg-gray-400 flex flex-col items-center justify-center mr-40  hover:scale-105 shadow-[0_6px_0] shadow-gray-500">
            <Image
              src={startIcon}
              alt="Completed icon"
              className="w-[50px] h-[50px]"
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ModuleRoadComp;
