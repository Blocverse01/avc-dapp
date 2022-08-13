import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { ethers } from "ethers";
import { useState } from "react";
import Rough_Diamond_ABI from "../data/contract-abis/roughDiamondSale.json";
import { useSigner } from "wagmi";
import { getTokensToMint } from "../util/get-available-NFTs";

export default function MintingModal({ open, setOpen }) {
  const [quantity, setQuantity] = useState("");
  const [minting, setMinting] = useState(false);
  const { data: signer, isError, isLoading: loadingSigner } = useSigner();
  const mintingFee = ethers.utils.parseEther(import.meta.env.VITE_MINT_FEE || "1");
  const maxPerWallet = import.meta.env.VITE_MAX_PER_WALLET || 3;
  const info = {
    maxPerWallet,
    mintingFee,
  };
  const handleChange = ({ target: { value: amount } }) => {
    setQuantity(amount);
  };
  const mintNFTs = async () => {
    try {
      const numberishQuantity = parseInt(quantity, 10);
      if (isNaN(numberishQuantity)) {
        throw Error("Enter a valid amount");
      }
      if (numberishQuantity < 1) {
        throw Error("Enter an amount greater than zero");
      }
      if (numberishQuantity > maxPerWallet) {
        throw Error("Max Mint of 3 NFTs");
      }
      if (!signer && !loadingSigner) {
        throw Error("Connect your wallet to mint");
      }
      const platformOperator = new ethers.Contract(
        import.meta.env.VITE_SALE_OPERATOR_ADDRESS,
        Rough_Diamond_ABI,
        signer
      );
      setMinting(true);
      const nfts = await getTokensToMint(numberishQuantity);
      const tx = await platformOperator.buyNFTs(nfts, {
        value: mintingFee.mul(numberishQuantity),
      });
      const receipt = await tx.wait();
      if (receipt.status && receipt.blockNumber) {
        Swal.fire({
          title: "Success!",
          text: `You have successfully minted ${quantity} Rough Diamonds!`,
          icon: "success",
          confirmButtonText: "Yayy 🎉",
        });
        setMinting(false);
        return;
      }
      throw Error("Couldn't mint NFTs");
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error, Something went wrong!",
        text: "Minting failed, be sure you have enough MATIC for minting",
        icon: "error",
      });
      setMinting(false);
    }
  };
  return (
    <section
      style={{ backdropFilter: open ? "blur(5px)" : "none" }}
      className={`overflow-hidden ${
        open ? "fixed inset-0 transition-all duration-300 flex justify-center items-center z-[9999]" : "h-0"
      }`}
    >
      <div className="Collection__mint-modal__content">
        <div className="text-right">
          <button onClick={() => setOpen(false)} className="text-2xl md:text-4xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="min-h-[20vh] lg:min-h-[160px] h-fit flex max-w-xl mx-auto justify-center items-center py-5">
          <div className="grid grid-cols-1 gap-6 lg:gap-8 flex-1 text-slate-200">
            <h3 className="text-center font-semibold text-xl font-hero lg:text-[38px] md:text-center border-b border-slate-300">
              Rough Diamonds Whitelist Mint
            </h3>
            <div>
              <h3 className="mb-2">Minting Fee: {ethers.utils.formatEther(info.mintingFee.toString())} MATIC</h3>
              <h3>Max NFTs Per Wallet: {info.maxPerWallet}</h3>
            </div>
            <div className="flex items-center">
              <input
                max={info.maxPerWallet}
                value={quantity}
                onChange={handleChange}
                className="mr-3 rounded-md px-3 text-base lg:text-lg h-[46px] md:h-[60px] w-full outline-none border-slate-300 bg-dark text-white"
                placeholder="How Many NFTs?"
              />{" "}
              <button
                onClick={async () => await mintNFTs()}
                type="button"
                className="Collection-group__mint-btn mt-0 text-base lg:text-lg h-[46px] md:h-[60px]"
              >
                Mint {minting && <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
