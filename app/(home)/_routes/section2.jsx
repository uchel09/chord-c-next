const HomeSection2 = () => {
  return (
    <div className="flex w-full flex-col md:flex-row mt-16 lg:mt-2   ">
      <h1 className="text-center block md:hidden text-[28px]  gap-3 font-bold font-Poppins text-[#2962ff]">
        Tool yang kami gunakan !!!
      </h1>
      <div className="w-full md:w-1/2  flex items-center justify-center">
        <img
          src="/home-section-chord2.svg"
          alt="home-img"
          className="w-full lg:w-[70%]"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="w-[80%] flex-col flex justify-center h-full  mx-auto bg-white">
          <h1 className="hidden md:block text-[35px]  gap-3 font-bold font-Poppins text-[#2962ff]">
            <span>Tool yang kami gunakan !!!</span>
          </h1>
          <p className="text-[20px] italic font-bold">Transpose chord</p>
          <p className="text-[20px]">
            untuk mengganti chord berdasarkan tangga nada
          </p>
          <p className="text-[20px] italic font-bold">Auto scroll</p>
          <p className="text-[20px]">Biar main musik nya lebih nyaman</p>
          <p className="text-[20px] italic font-bold">
            Menu Pencarian <span className="text-base">(Ada di Navbar)</span>
          </p>
          <p className="text-[20px] ">
            Pencarian berdasarkan Penyanyi atau judul lagu serta abjad
          </p>
          <p className="text-[20px] mt-3 font-bold italic">
            Sekali lagi Lets Go genjreeeenggg!!! Wkwkwkk
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
