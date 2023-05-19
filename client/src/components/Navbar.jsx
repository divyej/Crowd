import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {logo,menu,search,thirdweb} from '../assets'
import {navlinks} from '../constants'
import CustomButton from './customButton'


const address= '0x1234567890123456789012345678901234567890'
const Navbar = () => {
    const navigate = useNavigate();
    const [isActive,setIsActive] = useState('dashboard')
    const [toggle,setToggle]=useState(false)
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
            <input type="text" placeholder='Search for aids' className="flex w-full font-epilogue text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"/>
            <div className="w-[72px] h-[30px] rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
            <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
            </div>
     </div>
            
        <div className="sm:flex flex-row justify-end gap-4">
          <CustomButton
          btnType="button"
          title={
            address? 'create campaign':'connect'}
            styles={
                address? 'bg-[#4ac94d]':'bg-[#4b5264]'
            }
            handleClick={()=>{if (address) navigate('/create-campaign')
            else connect()}}
          />
          
           <Link to='/profile'>
            
            <div className="w-{52px} h-[52px] rounded-full bg-[#1c1c24] flex justify-center items-center cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
            </div>
            </Link>
            </div>
        </div>
  )
}

export default Navbar