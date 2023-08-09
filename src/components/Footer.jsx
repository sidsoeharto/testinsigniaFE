import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col border-t border-[#F4E3CF] mt-8 py-3 justify-center items-center lg:justify-start lg:items-start font-semibold'>
      <div className='flex mb-4'>
        <button className="inline-flex items-center justify-center bg-[#F4E3CF] text-[#763138] font-semibold w-8 h-8 mr-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className='w-3 h-3' xmlns="http://www.w3.org/2000/svg">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </button>
        <button className="inline-flex items-center justify-center bg-[#F4E3CF] text-[#763138] font-semibold w-8 h-8 mr-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className='w-3 h-3' xmlns="http://www.w3.org/2000/svg">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </button>
        <button className="inline-flex items-center justify-center bg-[#F4E3CF] text-[#763138] font-semibold w-8 h-8 mr-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" className='w-3 h-3' xmlns="http://www.w3.org/2000/svg">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </button>
      </div>
      <ul className='hidden lg:inline-flex items-center py-3 font-semibold space-x-3 text-sm mb-4'>
        <li>
          <div className="flex items-center">
            About
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>For Business</span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>Suggestions</span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>Help & FAQs</span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>Contacts</span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>Pricing</span>
          </div>
        </li>
      </ul>
      <div className='flex flex-wrap items-center justify-center font-light mb-3 gap-x-3 gap-y-1 lg:hidden'>
        <div className="flex items-center">
          About
        </div>
        <div className="flex items-center">
          <span className='ml-2'>For Business</span>
        </div>
        <div className="flex items-center">
          <span className='ml-2'>Suggestions</span>
        </div>
        <div className="flex items-center">
          <span className='ml-2'>Help & FAQs</span>
        </div>
        <div className="flex items-center">
          <span className='ml-2'>Contacts</span>
        </div>
        <div className="flex items-center">
          <span className='ml-2'>Pricing</span>
        </div>
      </div>
      <div className='text-left text-sm mb-2'>
        <h4>© Copyright 2013 companyname inc.</h4>
      </div>
      <ul className='inline-flex items-center font-semibold space-x-3 text-sm'>
        <li>
          <div className="flex items-center">
            Privacy
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="mx-1" aria-hidden="true">
              /
            </div>
            <span className='ml-2'>Terms</span>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;