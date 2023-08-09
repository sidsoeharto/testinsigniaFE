import React from 'react';
import DocumentCard from './DocumentCard';

const MoreDocumentCard = () => {
  return (
    <div 
      className={`w-64 lg:w-full h-full min-h-[10rem] mr-16 lg:mr-0 border border-[#F4E3CF] flex flex-col justify-center items-center`} 
      style={{
        gridColumn: 'auto',
        gridRow: 'auto',
      }}
    >
      <div className='flex items-center justify-center w-full'>
        <div className='rounded-full px-2 py-2 border-4 border-[#F4E3CF] mr-2'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </div>
        <h3 className='w-24 text-sm text-left'>Share your document</h3>
      </div>
    </div>
  )
}

const Documents = ({ posts }) => {
  return (
    <div className='lg:col-span-2'>
      <div className='flex w-[92.5%] justify-between items-end mb-3'>
        <h1 className='text-lg lg:text-2xl'>Documents</h1>
        <a href="#" className='text-xs lg:text-sm hover:underline'>Browse all documents</a>
      </div>
      <div className='max-w-[100vw] w-full grid grid-rows-1 grid-flow-col lg:grid-cols-3 lg:grid-rows-3 gap-3 overflow-x-scroll lg:overflow-x-hidden'>
        {
          posts.map((post, index) => (
            index !== 0
              ? <DocumentCard key={index} showTitle={false} data={post}/>
              : <DocumentCard key={index} colSpan={2} rowSpan={2} showTitle={true} data={post}/>
          ))
        }
        <MoreDocumentCard />
      </div>
    </div>
  );
};

export default Documents;