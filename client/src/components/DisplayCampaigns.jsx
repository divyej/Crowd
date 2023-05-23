import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './loader'
const DisplayCampaigns = ({title,isLoading,campaigns}) => {

    const navigate = useNavigate()
    
  return (
    <div> 
        <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>{title}</h1>
        <div className='flex flex-wrap gap-[25px] mt-[20px]'>
            {isLoading && <Loader />}
            {!isLoading && campaigns.length>0 && campaigns.map((campaign,i)=><FundCard key={campaign.id} {...campaign} handleClick={()=>handleNavigate(campaign) }
            />)}

          
    
    </div>
    
    </div>


  )
}

export default DisplayCampaigns