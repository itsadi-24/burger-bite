import React from 'react';
import Img1 from '@/public/images/f1.jpg';
import Img2 from '@/public/images/f2.jpg';
import Img3 from '@/public/images/f3.jpg';
import Image from 'next/image';

const Features = () => {
  return (
    <div className=' pt-[5rem] pb-[3rem] '>
      <h1 className='heading'>
        burgers made with <br /> love and
        <span className=' text-red-600'> Care</span>
      </h1>
      {/* Cards  */}
      <div className=' w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        {/* 1st Card  */}
        <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
          <div className=' p-6 rounded-lg transition-all hover:bg-white duration-500 hover:scale-110'>
            <Image src={Img1} alt='burger' className=' rounded-3xl' />
            <h1 className=' mt-[1.5rem] text-[24px] font-semibold text-black'>
              Our Burger
            </h1>
            <p className=' mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deleniti, unde odio. Doloribus temporibus rem similique magni
              repudiandae debitis, tempora veniam, optio facere id possimus
              voluptatibus nam, reiciendis tempore exercitationem eveniet.
            </p>
          </div>
        </div>
        {/* 2nd card  */}
        <div
          data-aos='zoom-in'
          data-aos-anchor-placement='top-center'
          aos-delay='200'
        >
          <div className=' p-6 rounded-lg transition-all hover:bg-white duration-500 hover:scale-110 lg:translate-y-[3rem]'>
            <Image src={Img2} alt='burger' className=' rounded-3xl' />
            <h1 className=' mt-[1.5rem] text-[24px] font-semibold text-black'>
              Your opinion is important
            </h1>
            <p className=' mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deleniti, unde odio. Doloribus temporibus rem similique magni
              repudiandae debitis, tempora veniam, optio facere id possimus
              voluptatibus nam, reiciendis tempore exercitationem eveniet.
            </p>
          </div>
        </div>
        {/* 3rd card  */}
        <div
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
          aos-delay='400'
        >
          <div className=' p-6 rounded-lg transition-all hover:bg-white duration-500 hover:scale-110'>
            <Image src={Img3} alt='burger' className=' rounded-3xl' />
            <h1 className=' mt-[1.5rem] text-[24px] font-semibold text-black'>
              Chicken burgers
            </h1>
            <p className=' mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deleniti, unde odio. Doloribus temporibus rem similique magni
              repudiandae debitis, tempora veniam, optio facere id possimus
              voluptatibus nam, reiciendis tempore exercitationem eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
