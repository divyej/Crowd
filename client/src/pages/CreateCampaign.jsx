import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { money } from '../assets'
import CustomButton from '../components/customButton.jsx'
import {checkIfImage} from '../utils/index.js'
const CreateCampaign = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form,setForm]=useState({
        name:'',
        title:'',
        description:'',
        deadline:'', 
        image:''   
    })
    const handleFormChange=(fieldName,e)=>{
        setForm({...form,[fieldName]:e.target.value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
    }
  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
        <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
            <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start Campaign</h1>
        </div>
        <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
            <div className='flex flex-wrap gap-[40px]'>
            
            </div>
        </form>
    </div>
  )
}

export default CreateCampaign