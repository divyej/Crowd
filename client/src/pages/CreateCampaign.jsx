import React from 'react'
import { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { money } from '../assets'
import CustomButton from '../components/customButton.jsx'
import Loader from '../components/loader'
import {checkIfImage} from '../utils/index.js'
import {useStateContext} from '../context/index.jsx'
import FormField from '../components/FormField.jsx'
const CreateCampaign = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const {createCampaign} = useStateContext()
    const [form,setForm]=useState({
        name:'',
        title:'',
        description:'',
        target:'',
        deadline:'', 
        image:''   
    })
    const handleFormChange=(fieldName,e)=>{
        setForm({...form,[fieldName]:e.target.value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        checkIfImage(form.image,async(exists)=>{
            if(exists){
                setIsLoading(true)
                await createCampaign({...form, target:ethers.utils.parseUnits(form.target,18)})
                setIsLoading(false)
                navigate('/')
            }
            else{
                alert("Please upload a valid image")
                setForm({...form,image:''})
            }
        })
    }
  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
        {isLoading && <Loader />}
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
              </div>
              <div className='w-full flex justify-center items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]'>
                <img src={money} alt="money" className='w-[40px] h-[40px] object-contain'/>
                <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You will get the full raised amount</h4>
              </div>
              <div className='flex flex-wrap gap-[40px]'>
                <FormField
                labelName="Goal:"
                placeholder="Eth 0.02"
                inputType='text'
                value={form.target}
                handleChange={(e)=> handleFormChange('target',e)}
                />
                <FormField
                labelName="Deadline:"
                placeholder="DD/MM/YYYY"
                inputType="date"
                value={form.deadline}
                handleChange={(e)=> handleFormChange('deadline',e)}
                />

              </div>
              <FormField
                labelName="Upload Image"
                placeholder="Upload Image"
                inputType='url'
                value={form.image}
                handleChange={(e)=> handleFormChange('image',e)}
                />
                <div className='flex justify-center items-center mt-[40px]'>
                 <CustomButton
                 btnType="submit"
                 title="Submit"
                 styles="bg-[#1dc071]"
                 />

                </div>
            
        </form>
    </div>
  )
}

export default CreateCampaign