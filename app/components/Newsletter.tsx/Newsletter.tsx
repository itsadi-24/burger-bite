import React from 'react';

const Newsletter = () => {
  return (
    <div className=' pt-20 pb-20'>
      <div className=' text-center'>
        <h1 className=' text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase'>
          join our newsletter
        </h1>
        <p className=' text-black text-opacity-70 w-[85%] md:w-[65%] mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic
          fugiat dignissimos. Soluta at magni et accusantium in quae tempora
          praesentium odio culpa repellat. Quaerat necessitatibus praesentium
          quidem eum excepturi.
        </p>
        <div className=' flex items-center space-x-2 mt-12 justify-center'>
          {/* input  */}
          <input
            type='email'
            placeholder='Enter your email'
            className=' px-5 py-4 bg-gray-400 w-[40%] rounded-lg outline-none placeholder:text-black'
          />
          {/* subscribe button  */}
          <button className=' px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200 text-white rounded-md font-bold'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
