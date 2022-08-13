import { ethers } from "ethers";
import React from "react";
import { useProvider } from "wagmi"
import IERC721 from "../data/contract-abis/IERC721.json";

export default function useNFTGate(contract_address, address) {
    const provider = useProvider();
    const [gatePass, setGatePass] = React.useState(false);
    const fetchGatePass = () => {
        if (address && provider && contract_address) {
            const contract = new ethers.Contract(contract_address, IERC721, provider);
            contract.balanceOf(address).then(balance => {
                setGatePass(balance.gt(0));
            }).catch((err) => console.error(err));
        }
        return true;
    }
    React.useEffect(() => {
        fetchGatePass();
    }, [address, provider, contract_address]);
    return { gatePass, refreshGatePass: fetchGatePass };
}