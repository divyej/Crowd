import React from 'react'
import { useState,useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaigns from '../components/DisplayCampaigns'


const Home = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [campaigns,setCampaigns]=useState([])
    const {address,contract,getCampaigns}= useStateContext()

    const loadCampaigns=async()=>{
        setIsLoading(true)
        const data = await getCampaigns()
        setCampaigns(data)
        setIsLoading(false)
    }

    useEffect(()=>{ 
        if(contract) loadCampaigns()
    },[address,contract])


  return (
    <DisplayCampaigns 
    title='All Campaigns'
    campaigns={campaigns}
    isLoading={isLoading}
    />

  )
}

export default Home