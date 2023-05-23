import React from 'react'
import { tagType,thirdweb } from '../assets'
import { daysLeft } from '../utils'



const FundCards = ({owner,title,description,target,deadline,amountCollected,image,handleClick}) => {
 
    const remainingDays = daysLeft(deadline)
 
    return (
    <div className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer 'onClick={handleClick}>
        <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
        <div className="flex flex-col p-4">
            <div className="flex justify-between items-center mb-[18px]">
                <img src={tagType} alt="tag" className='W-[17px] h-[17px] object-contain'/>
            </div>
        </div>
        FundCards</div>
  )
}

export default FundCards