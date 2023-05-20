import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x3E0ea1E05F50D841f6E4AaCd37C28cD1a9d0B844');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
        const data = await createCampaign({
            args: [
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ]
        });
        console.log("contract call success", data)
} 
catch (error) {
        console.log("contract call failure", error)
}
  }
    return(
        <StateContext.Provider value={{address,
            contract,
            connect,
            createCampaign: publishCampaign,
        }}>{children}
        </StateContext.Provider>   
    )
}

export const useStateContext=()=>useContext(StateContext)

