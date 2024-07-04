import Image from "next/image";
import cardImage from "../../public/assets/images/card-image.png";

const LearnComp = () => {
  return (
    <main className="p-8 pt-16">
      <section>
        <div className="flex flex-col items-center p-6 text-center">
          <h1 className="text-[40px] font-bold">Choose your module</h1>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform sm:hover:scale-105 cursor-pointer xl:mt-[150px]">
            <Image
              src={cardImage}
              alt="card image"
              className="w-[200px] h-[200px] object-cover rounded-t-lg"
              priority
            />
            <h2 className="p-2 text-[24px] font-bold">Basics</h2>
          </div>
          <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform sm:hover:scale-105 cursor-pointer xl:mt-[150px]">
            <Image
              src={cardImage}
              alt="card image"
              className="w-[200px] h-[200px] object-cover rounded-lg"
              priority
            />
            <h2 className="p-2 text-[24px] font-bold">Basics</h2>
          </div>
          <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform sm:hover:scale-105 cursor-pointer xl:mt-[150px]">
            <Image
              src={cardImage}
              alt="card image"
              className="w-[200px] h-[200px] object-cover rounded-t-lg"
              priority
            />
            <h2 className="p-2 text-[24px] font-bold">Basics</h2>
          </div>
          <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform sm:hover:scale-105 cursor-pointer xl:mt-[150px]">
            <Image
              src={cardImage}
              alt="card image"
              className="w-[200px] h-[200px] object-cover rounded-t-lg"
              priority
            />
            <h2 className="p-2 text-[24px] font-bold">Basics</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnComp;
