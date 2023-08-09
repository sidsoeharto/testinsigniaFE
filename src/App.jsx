import React from 'react'
import axiosInstance from './helpers/axiosClient'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Videos from './sections/Videos'
import Activity from './sections/Activity'
import People from './sections/People'
import Channels from './sections/Channels'
import Documents from './sections/Documents'

function App() {
  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    axiosInstance.get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [])

  React.useEffect(() => {
    axiosInstance.get('https://dummyapi.io/data/v1/post?limit=5')
      .then((res) => setPosts(res.data.data))
      .catch((err) => console.log(err));
  }, [])

  React.useEffect(() => {
    axiosInstance.get('https://dummyapi.io/data/v1/user?limit=5')
      .then((res) => setUsers(res.data.data))
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="w-full min-h-screen">
      <Navbar user={user}/>
      <div className='grid lg:grid-cols-3 mt-4 gap-6 max-w-[100%] overflow-hidden'>
        <Videos posts={posts}/>
        <Activity />
      </div>
      <div className='grid lg:grid-cols-3 lg:grid-rows-2 mt-4 gap-6 max-w-[100%] overflow-hidden'>
        <People users={users}/>
        <Channels />
        <Documents posts={posts}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
