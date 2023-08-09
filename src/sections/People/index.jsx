import React from 'react';
import PeopleCard from './PeopleCard';

const MorePeopleCard = () => {
  return (
    <div 
      className={`w-64 lg:w-full h-full min-h-[10rem] mr-16 lg:mr-0 border border-[#F4E3CF] flex flex-col justify-center items-center`} 
      style={{
        gridColumn: 'auto',
        gridRow: 'auto',
      }}
    >
      <div className='flex justify-center w-full'>
        <div className='rounded-full px-2 py-2 border-4 border-[#F4E3CF] mr-2'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
          </svg>
        </div>
        <h3 className='w-16 text-sm text-left'>Show your work</h3>
      </div>
    </div>
  )
}

const People = ({ users }) => {
  return (
    <div className='lg:col-span-2'>
      <div className='flex w-[92.5%] justify-between items-end mb-3'>
        <h1 className='text-lg lg:text-2xl'>People</h1>
        <a href="#" className='text-xs lg:text-sm hover:underline'>View All</a>
      </div>
      <div className='max-w-[100vw] w-full grid grid-rows-1 grid-flow-col lg:grid-cols-3 lg:grid-rows-3 gap-3 overflow-x-scroll lg:overflow-x-hidden'>
        {
          users.map((user, index) => (
            index !== 0
              ? <PeopleCard key={index} showTitle={false} user={user}/>
              : <PeopleCard key={index} colSpan={2} rowSpan={2} showTitle={true} user={user}/>
          ))
        }
        <MorePeopleCard />
      </div>
    </div>
  );
};

export default People;