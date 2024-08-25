const HomeSection1 = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <h1 className="w-full text-center text-[28px]  block md:hidden gap-3 font-bold font-Poppins text-[#2962ff]">
        Selamat Datang di Chord C
      </h1>
      <p className=" w-full text-center text-[20px] italic block md:hidden font-bold">
        Bingung Chordnya fales dan susah ??
      </p>
      <div className="w-full md:w-1/2 order-2 md:order-1 ">
        <div className="w-[80%] flex-col flex justify-center h-full  mx-auto bg-white">
          <h1 className="text-[35px] hidden md:block gap-3 font-bold font-Poppins text-[#2962ff]">
            Selamat Datang di Chord C
          </h1>
          <p className="text-[24px] hidden md:block italic font-bold">
            Bingung Chordnya fales dan susah ??
          </p>
          <p className="text-[20px] md:text-[24px]">Kamu di website yang tepat !!!</p>
          <p className="text-[20px] md:text-[24px]">
            Chord kami disesuaikan dan nyaman untuk pemula
          </p>
          <p className="text-[20px] md:text-[24px] mt-3">
            {" "}
            Cari Penyanyi atau lagu kesukaanmu{" "}
          </p>
          <p className="text-[20px] md:text-[24px] mt-3 font-bold italic">
            {" "}
            Lets Go genjreeeenggg!!!{" "}
          </p>
        </div>
      </div>
      <div className="w-full order-1 md:order-2 md:w-1/2 justify-center items-center">
        <img
          src="/home-section-chord.svg"
          alt="home-img"
          className="w-full lg:w-[70%]"
        />
      </div>
    </div>
  );
};

export default HomeSection1;
