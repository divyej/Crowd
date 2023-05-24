
import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {ethers} from 'ethers'
import { useStateContext } from '../context'
import CustomButton from '../components/customButton'
import CountBox from '../components/CountBox'
import Loader from '../components/loader'
import { calculateBarPercentage,daysLeft } from '../utils'
import {thirdweb} from '../assets'

const CampaignDetails = () => {
    const {state} =useLocation()
    const navigate = useNavigate()
    const {donate,getDonations,contract,address}=useStateContext()
    const [isLoading,setIsLoading]=React.useState(false)
    const [amount,setAmount]=React.useState('')
    const [donators,setDonators]=React.useState([])
    const remainingDays=daysLeft(state.deadline)

    const fetchDonators= async()=>{
        const data = await getDonations(state.pId)
        setDonators(data)
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
        <div className='flex md:w-[150px] w-full flex-wrap justify-between '>
            <CountBox title="Days Left" value={remainingDays}/>
            <CountBox title={`Raised of ${state.target}`} value={state.amountCollected}/>
            <CountBox title="Total Backers" value={donators.length}/>
            </div>
        </div>
        <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
            <div className='flex-[2] flex flex-col gap-[40px]'>
                <div>
                    <h4 className='font-epilogue font-semibold text-[18px] text-white uppercase'>Creator</h4>
                    <div className='mt-[20px] flex flex-row items-center flex-wrap gap-[14px]'>
                        <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer'>
                            <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain'/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CampaignDetails