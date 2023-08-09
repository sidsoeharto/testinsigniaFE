import React from 'react';
import ChannelCard from './ChannelCard';

const Channels = () => {
  const channels = [
    'Google',
    'Dribbble',
    'Microsoft',
    'Behance',
    'Weather Channel',
    'Gurus',
    'iMedia',
    'Creativeye',
    'Khan Studios',
    'Yahoo',
  ];

  return (
    <div className='w-full row-span-2'>
      <div className='flex w-[92.5%] justify-between items-end mb-3'>
        <h1 className='text-lg lg:text-2xl'>Channels</h1>
        <a href="#" className='text-xs lg:text-sm hover:underline'>Browse all channels</a>
      </div>
      <div className='h-1 w-full bg-[#F4E3CF] hidden lg:block'></div>
      <div className='w-full grid grid-cols-2 gap-3 lg:border-b border-[#F4E3CF] py-3'>
        {
          channels.map((channel, index) => (
            <ChannelCard key={index} title={channel} />
          ))
        }
      </div>
    </div>
  );
}

export default Channels;