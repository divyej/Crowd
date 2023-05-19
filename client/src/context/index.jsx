import React from "react";
import { useContext,createContext } from "react";
import { useAddress,useContract,useMetamask,useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider=({children})=>{
    
    const {contract}=useContract("0x3E0ea1E05F50D841f6E4AaCd37C28cD1a9d0B844")
    const {mutateAsync:createCampaign}=useContractWrite(contract,'createCampaign')
    const address=useAddress()
    const connect=useMetamask()

    const publishCampaign=async(form)=>{
    try {
        const data= await createCampaign ([
            address,//owner
            form.title,//title
            form.description,//description
            form.target,
            new Date(form.deadline).getTime()/1000,
            form.image
        ])
        console.log("success",data)
    }
    catch (error) {
        console.log("error",error)
    }
    }
    return(
        <StateContext.Provider value={{address,contract,connect,
            createCampaign:publishCampaign
        }}>{children}</StateContext.Provider>   
    )
}
export const useStateContext=()=>useContext(StateContext)