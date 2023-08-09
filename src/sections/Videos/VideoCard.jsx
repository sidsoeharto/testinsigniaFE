import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const VideoCard = (props) => {
  const { colSpan, rowSpan, showTitle, video } = props;
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div 
      className={`w-64 lg:w-full h-full min-h-[10rem] bg-[#F4E3CF] flex flex-col justify-between bg-blend-overlay font-semibold`} 
      style={{
        gridColumn: colSpan && isDesktop ? `span ${colSpan} / span ${colSpan}` : 'auto',
        gridRow: rowSpan && isDesktop ? `span ${rowSpan} / span ${rowSpan}` : 'auto',
        backgroundImage: `url(${video.image})`,
        backgroundSize: 'cover'
      }}
    >
      <div className='flex-1'></div>
      <div className='flex flex-col w-full text-[#763138] px-3 py-2'>
        {
          showTitle && <h1 className='text-left text-lg font-bold'>{video.text}</h1>
        }
        <div className='flex justify-between w-full text-sm'>
          <h1>{`${video.owner.firstName} ${video.owner.lastName}`}</h1>
          <h3>{video.likes} views</h3>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;