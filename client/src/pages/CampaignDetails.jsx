
import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {ethers} from 'ethers'
import { useStateContext } from '../context'
import {customButton,Loader} from '../components'
import { calculateBarPercentage,daysLeft } from '../utils'
import {thirdweb} from '../assets'

const CampaignDetails = () => {
    const {state} =useLocation()
    const navigate = useNavigate()
    const {donate,getDonations,contract,address}=useStateContext()
    const [isLoading,setIsLoading]=React.useState(false)
    const [amount,setAmount]=React.useState('')
    const [donations,setDonations]=React.useState([])
    const remainingDays=daysLeft(state.deadline)

    const fetchDonators= async()=>{
        const data = await getDonations(state.pId)
        setDonations(data)
    }
useEffect(()=>{
    if(contract) fetchDonators()
},[contract,address])

const handleDonate=async()=>{
    setIsLoading(true)
    await donate(state.pId,amount)
    navigate('/')
    setIsLoading(false)
}

  return (
    <div>
        {isLoading && <Loader/>}
        <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
            <div className='flex-1 flex-col'>
                <img src={state.image} alt='campaign' className='w-full h-[410px] object-cover rounded-xl'/>
                <div className='relative w-full h-[5px] bg-[#3a3a43] mt-2'>
                    <div className='absolute h-full bg-[#4acd8d]' style={{width:`${calculateBarPercentage(state.target,state.amountCollected)}%`,maxWidth:'100%'}}>
                </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default CampaignDetails