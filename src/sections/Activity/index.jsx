import React from 'react';

import axiosInstance from '../../helpers/axiosClient';
import ActivityCard from './ActivityCard';

const Activity = () => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get('https://dummyapi.io/data/v1/post/60d21baa67d0d8992e610da7/comment?limit=6')
      .then((res) => {
        console.log(res);
        // setComments(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className='w-full'>
      <div className='flex w-[92.5%] justify-between items-end mb-3'>
        <h1 className='text-lg lg:text-2xl'>Activity</h1>
        <a href="#" className='text-sm hover:underline'>View Timeline <span className='hidden lg:block'>/ Filter Activities</span></a>
      </div>
      <div className='h-1 w-full bg-[#F4E3CF] hidden lg:block'></div>
      <div className='grid grid-cols-1 gap-y-3 lg:border-b border-[#F4E3CF] py-3'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
}

export default Activity;