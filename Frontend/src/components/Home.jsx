import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="w-full relative">
        <img 
          src="https://www.shutterstock.com/image-photo/group-poor-pakistani-children-holding-260nw-2314389153.jpg" 
          alt="Home Banner" 
          className="w-full h-[450px] object-cover" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Link to="/donate">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300">Donate Food</button>
          </Link>
          <Link to="/request">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300">Request Food</button>
          </Link>
        </div>
      </div>
      <div className=' bg- bg-gray-300 h-[150px]'>
        <p className=' text-2xl font-bold scroll-px-3.5 text-white pt-11'>
          “Cutting food waste is a delicious way of saving money,</p>
          <p className=' text-2xl font-bold px-3.5 text-white'>  helping to feed the world and protect the planet.”
        </p>
      </div>
      <div>
        <p className=' text-3xl font-bold  underline text-center pt-5'>Our Works</p>
        <p className=' text-4xl text-center pt-3'> "Look what we can do together."</p>

      </div>
      <div className='flex justify-center gap-6 py-8 bg-white'>
        {["https://kishor-23.github.io/food-donate/img/p1.jpeg",
          "https://kishor-23.github.io/food-donate/img/p4.jpeg",
          "https://kishor-23.github.io/food-donate/img/p3.jpeg"
        ].map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg w-[400px] h-[270px] flex items-center justify-center bg-gray-100 group">
            <img
              src={src}
              alt={"Work " + (idx + 1)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-90 group-hover:translate-y-4 group-hover:translate-x-2"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
