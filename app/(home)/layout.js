import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"


const BaseLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col bg-gray-50 min-h-screen">
      <header className="w-full h-[60px] bg-white fixed shadow-md flex items-center justify-between">
        <Navbar />
      </header>
      <section className={`flex-1 w-full h-[100%] bg-white mx-auto mt-[55px] py-4 px-4`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default BaseLayout;
