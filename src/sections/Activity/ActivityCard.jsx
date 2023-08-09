import React from 'react';

const ActivityCard = () => {
  return (
    <div className='flex flex-row w-full mb-2'>
      <div className='w-32 h-full bg-[#F4E3CF] mr-3'/>
      <div className='flex flex-col text-left'>
        <h1 className='font-bold'>John Stainior <span className='text-sm font-light'>commented</span></h1>
        <p className='text-xs mb-2'>Well, I am liking it how it captures the audi...</p>
        <div className='inline-flex text-xs'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className='w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z" clipRule="evenodd" />
          </svg>
          2 seconds ago
        </div>
      </div>
    </div>
  )
};

export default ActivityCard;