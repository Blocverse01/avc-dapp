import { useState } from "react";
import Rough_Diamond_ABI from "../data/contract-abis/roughDiamondSale.json";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { ethers } from "ethers";

export default function useRoughDiamondMinter() {
  const [quantity, setQuantity] = useState("");
  const mintingFee = ethers.utils.parseEther(import.meta.env.VITE_MINT_FEE || "1");
  const maxPerWallet = import.meta.env.VITE_MAX_PER_WALLET || 3;
  const { config } = usePrepareContractWrite({
    addressOrName: import.meta.env.VITE_SALE_OPERATOR_ADDRESS,
    contractInterface: Rough_Diamond_ABI,
    functionName: "buyNFTs",
    args: [quantity],
    overrides: {
      value: !isNaN(parseInt(quantity, 10)) ? mintingFee.mul(parseInt(quantity, 10)) : mintingFee,
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite({
    ...config,
    onError(error) {
      console.log(error);
      throw Error("Could not mint your NFTs");
    },
    onSuccess(data) {
      console.log("Success", data);
    },
  });
  const mint = () => {
    const numberishQuantity = parseInt(quantity, 10);
    if (isNaN(numberishQuantity)) {
      throw Error("Enter a valid amount");
    }
    if (numberishQuantity < 1) {
      throw Error("Enter an amount greater than zero");
    }
    write();
  };
  const info = {
    maxPerWallet,
    mintingFee
  }
  return { isLoading, mint, isSuccess, setQuantity, quantity, info };
}
