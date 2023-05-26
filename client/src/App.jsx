import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CreateCampaign from './pages/CreateCampaign.jsx'
import CampaignDetails from './pages/CampaignDetails.jsx'
import Profile from './pages/Profile.jsx'

const App = () => {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row '> 
    <div className='hidden sm:flex mr-10 relative'>
      <Sidebar/>
    </div>
    <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
    <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-campaign' element={<CreateCampaign/>}/>
      <Route path='/campaign-details/:id' element={<CampaignDetails/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     </div>
     </div>
  )
}

export default App