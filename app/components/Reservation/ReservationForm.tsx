import React from 'react';
import { GrRestaurant } from 'react-icons/gr';

const ReservationForm = () => {
  return (
    <div className=' bg-green-700 p-6 rounded-lg'>
      <GrRestaurant className=' w-20 h-20 text-white mt-8 mx-auto' />
      <h1 className=' text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-2 text-center'>
        Reservation
      </h1>
      <p className=' uppercase text-2xl md:text-[25px] text-white font-semibold text-center'>
        Book your Table
      </p>
      {/* inputs  */}
      <div className=' mt-8'>
        <div className=' flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[80%] mx-auto space-x-4 justify-between'>
          <select
            className=' px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'
            name='people'
            id='people'
          >
            <option value='1' className=' text-black'>
              1 People
            </option>
            <option value='2' className=' text-black'>
              2 People
            </option>
            <option value='3' className=' text-black'>
              3 People
            </option>
            <option value='4' className=' text-black'>
              4 People
            </option>
          </select>
          <input
            type='date'
            className=' px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'
          />
        </div>
        <input
          type='time'
          className=' px-10 py-2.5 bg-transparent block w-[80%] mx-auto mt-4 rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'
        />
        <div className=' mt-8 w-[80%] mx-auto text-center'>
          <button className=' px-8 py-3 rounded-lg mb-12 text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
