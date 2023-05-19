import React from 'react'
import { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { money } from '../assets'
import CustomButton from '../components/customButton.jsx'
import {checkIfImage} from '../utils/index.js'
import FormField from '../components/FormField.jsx'
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
            <FormField 
            labelName='Your Name'
            placeholder='Enter your name'
            inputType='text'
            value={form.name}
            handleChange={(e)=> handleFormChange('name',e)}
           />
           <FormField 
           labelName='Enter Campaign Details'
           placeholder="Enter Title"
           inputType='text'
           value={form.title}
           handleChange={(e)=> handleFormChange('title',e)}
           />
           <FormField 
           labelName="Enter Campaign details"
              placeholder="Enter Description"
                inputType='text'
                isTextArea
                value={form.description}
                handleChange={(e)=> handleFormChange('description',e)}
              />
              <div className='w-full justify-start items-center p-4 bg-['
            </div>
        </form>
    </div>
  )
}

export default CreateCampaign