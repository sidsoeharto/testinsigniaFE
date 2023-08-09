import React from 'react';

const Navbar = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false); 
  const { user } = props;

  return (
    <>
      <nav className="hidden lg:flex flex-col w-full justify-between">
        <div className="flex w-full items-center justify-between mb-3">
          <h1 className="font-light text-3xl"><span className="font-semibold">Social</span>Network</h1>
          <input
            className="bg-[#F4E3CF] text-[#763138] px-3 py-2 w-96 placeholder:text-[#763138]"
            type="text"
            placeholder='Find...'
          />
          <button className="inline-flex items-center bg-[#F4E3CF] text-[#763138] font-semibold px-4 py-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
            </svg>
            Upload
          </button>
          <div className="flex">
            <button className="inline-flex items-center justify-center bg-[#F4E3CF] text-[#763138] font-semibold w-12 h-12 mr-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
              </svg>
            </button>
            <div className="flex flex-col text-left">
              <h2 className="text-lg">{user.firstName}</h2>
              <h2 className="text-sm">{user.lastName}</h2>
            </div>
          </div>
        </div>
        <div className='border-y-2 border-[#F4E3CF] justify-start'>
          <ul className='inline-flex items-center py-3 font-semibold space-x-3 text-lg w-full'>
            <li>
              <div className="flex items-center">
                Videos
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>People</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>Documents</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>Events</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>Communities</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>Favorites</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mx-1" aria-hidden="true">
                  /
                </div>
                <span className='ml-2'>Channels</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='flex lg:hidden flex-col w-full justify-between'>
        <div className="flex w-full items-center justify-between mb-3">
          <button onClick={() => setShowModal(true)}>
            <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 15 15" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" />
            </svg>
          </button>
          <h1 className="font-light text-xl"><span className="font-semibold">Social</span>Network</h1>
          <div>
            <button className="-mt-1 mr-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="" onClick={() => setShowProfile(true)}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
              </svg>
            </button>
          </div>
        </div>
        <input
          className="bg-[#F4E3CF] text-[#763138] px-3 py-2 w-full placeholder:text-[#763138]"
          type="text"
          placeholder='Find...'
        />
      </nav>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl p-3 text-[#763138]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F4E3CF] outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 mx-6 border-b border-solid border-gray-600/50 rounded-t">
                  <h3 className="text-xl text-center font-semibold">
                    Main Menu
                  </h3>
                </div>
                <div className="relative p-6 flex flex-col min-w-[80vw] flex-auto items-start gap-y-3">
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Videos</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>People</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Documents</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Events</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Communities</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Favorites</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Channels</a>
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-8">
                <button onClick={() => setShowModal(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={'#F4E3CF'} strokeWidth={16} className='w-8 h-8' viewBox="0 0 24 24">
                    <g> 
                      <path fill="none" d="M0 0h24v24H0z" /> 
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-[#763138]"></div>
        </>
      ) : null}
      {
        showProfile ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl p-3 text-[#763138]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F4E3CF] outline-none focus:outline-none">
                <div className="flex flex-col items-center justify-center p-5 mx-6 border-b border-solid border-gray-600/50 rounded-t">
                  <img src={user.picture} className='w-32 h-32 -mt-16 mb-4 rounded-lg border border-[#F4E3CF]'/>
                  <h3 className="text-xl text-center font-semibold">
                    {`${user.firstName} ${user.lastName}`}
                  </h3>
                  <h3 className="text-sm text-center mb-4">
                    UI/UX Designer
                  </h3>
                  <button className='inline-flex w-full items-center justify-center mx-auto bg-[#763138] text-[#F4E3CF] px-3 py-2'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Start Upload
                  </button>
                </div>
                <div className="relative p-6 flex flex-col min-w-[80vw] flex-auto items-start justify-between gap-y-3">
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>My Profile</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Edit Profile</a>
                  <a className='flex w-full text-lg font-medium hover:bg-red-600/25 py-3 px-2'>Security</a>
                </div>
                <div className="flex items-center justify-center border-t border-solid border-gray-600/25 bg-red-200/25 rounded-b">
                  <button
                    className="inline-flex items-center font-semibold px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowProfile(false)}
                  >
                    Log Out
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className='w-6 h-6 ml-2' xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17 16L22 12L17 8V11H9V13H17V16Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-8">
                <button onClick={() => setShowProfile(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={'#F4E3CF'} strokeWidth={16} className='w-8 h-8' viewBox="0 0 24 24">
                    <g> 
                      <path fill="none" d="M0 0h24v24H0z" /> 
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-[#763138]"></div>
        </>
        : null
      }
    </>
  )
}

export default Navbar