import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const PeopleCard = (props) => {
  const { colSpan, rowSpan, showTitle, user } = props;
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div 
      className={`w-64 lg:w-full h-full min-h-[10rem] bg-[#F4E3CF] flex flex-col justify-between bg-blend-overlay font-semibold`} 
      style={{
        gridColumn: colSpan && isDesktop ? `span ${colSpan} / span ${colSpan}` : 'auto',
        gridRow: rowSpan && isDesktop ? `span ${rowSpan} / span ${rowSpan}` : 'auto',
        backgroundImage: `url(${user.picture})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='flex-1'></div>
      <div className='flex flex-col w-full text-[#763138] px-3 py-2'>
        <h1 className='text-left text-lg font-bold'>{`${user.firstName} ${user.lastName}`}</h1>
        {
          (showTitle && isDesktop) &&
          <div className='flex justify-between w-full text-sm'>
            <h1>User Interface Designer</h1>
            <h3>187887 views</h3>
          </div>
        }
      </div>
    </div>
  )
}

export default PeopleCard;