import React from 'react';

const ChannelCard = ({ title }) => {
  return (
    <div 
      className={`w-48 lg:w-full h-full min-h-[8rem] bg-[#F4E3CF] flex flex-col justify-between items-end`} 
    >
      <div className='flex-1' />
      <div className='flex flex-col w-full text-[#763138] p-2 font-semibold'>
        <h1 className='text-left'>{title}</h1>
      </div>
    </div>
  )
};

export default ChannelCard;