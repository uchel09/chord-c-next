import React from 'react'
import HomeSection2 from './_routes/section2';
import HomeSection1 from './_routes/section1';

const Home = () => {
  return (
    <div className="w-[90%] mx-auto my-2">
      <HomeSection1 />
      <HomeSection2 />
    </div>
  );
}

export default Home