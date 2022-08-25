import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { ethers } from "ethers";
import { useState } from "react";
import Rough_Diamond_ABI from "../data/contract-abis/roughDiamondSale.json";
import { getTokensToMint } from "../util/get-available-NFTs";
import WalletConnect from "./WalletConnect";
import { formatError } from "../util/format-errors";
import { useAccount, useProvider, useSigner } from "wagmi";
import BouncingDotsLoader from "./BouncingDotsLoader";

export default function MintingModal({ open, setOpen, refreshGatePass }) {
  const [quantity, setQuantity] = useState("");
  const [mintState, setMintState] = useState("Mint");
  const { address } = useAccount();
  const { data: signer, isError, isLoading: loadingSigner } = useSigner();
  const provider = useProvider();
  const mintingFee = ethers.utils.parseEther(import.meta.env.VITE_MINT_FEE || "1");
  const maxPerWallet = import.meta.env.VITE_MAX_PER_WALLET || 3;
  const platformContractAddress = import.meta.env.VITE_SALE_OPERATOR_ADDRESS;
  const nftContract = import.meta.env.VITE_NFT_ADDRESS;
  const explorerURL = import.meta.env.VITE_EXPLORER_URL;
  const info = {
    maxPerWallet,
    mintingFee,
  };
  const buttonColors = {
    Mint: "",
    Ready: "bg-purple-500 ring-purple-900 ring-4",
    Approve: "bg-purple-700 ring-purple-600 ring-4",
    Minting: "bg-purple-900 ring-purple-300 ring-4",
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
        throw Error("Max Mint of 5 NFTs");
      }
      if (!signer && !loadingSigner) {
        throw Error("Connect your wallet to mint");
      }
      const platformOperator = new ethers.Contract(import.meta.env.VITE_SALE_OPERATOR_ADDRESS, Rough_Diamond_ABI);
      /* try {
        const isWhitelisted = await platformOperator.connect(provider).whitelistedAddresses(
          address
        );
        if (!isWhitelisted) {
          throw Error("Your address is not whitelisted for this sale");
        }
      } catch (err) {
        throw Error("Sale Begins on 26th Aug 2022");
      }  */
      setMintState("Ready");
      const nfts = await getTokensToMint(numberishQuantity);
      setMintState("Approve");
      const tx = await platformOperator.connect(signer).buyNFTs(nfts, {
        value: mintingFee.mul(numberishQuantity),
      });
      setMintState("Minting");
      const receipt = await tx.wait();
      if (receipt.status && receipt.blockNumber) {
        Swal.fire({
          title: "Success!",
          text: `You have successfully minted ${quantity} Rough Diamonds!`,
          icon: "success",
          confirmButtonText: "Yayy 🎉",
        });
        refreshGatePass();
        setMintState("Mint");
        return;
      }
      throw Error("Couldn't mint NFTs");
    } catch (err) {
      console.log(err);
      const message = formatError(err);
      Swal.fire({
        title: "Something went wrong!",
        text: message,
        icon: "error",
      });
      setMintState("Mint");
    }
  };
  return (
    <section
      style={{ backdropFilter: open ? "blur(5px)" : "none" }}
      className={`overflow-hidden ${
        open ? "fixed inset-0 transition-all duration-300 flex justify-center items-center z-[9999]" : "h-0"
      }`}
    >
      <div className="Collection__mint-modal__content relative z-[9999]">
        <div className="text-right">
          <button onClick={() => setOpen(false)} className="text-2xl md:text-4xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="min-h-[20vh] lg:min-h-[160px] h-fit flex max-w-xl mx-auto justify-center items-center py-5">
          <div className="grid flex-1 grid-cols-1 gap-6 lg:gap-8 text-slate-200">
            <h3 className="text-center font-semibold text-xl font-hero lg:text-[38px] md:text-center border-b border-slate-300">
              Ghost Diamonds Public Mint
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <h3>
                Minting Fee:{" "}
                <span className="font-semibold">{ethers.utils.formatEther(info.mintingFee.toString())} MATIC</span>
              </h3>
              <h3>
                Max NFTs Per Wallet: <span className="font-semibold">{info.maxPerWallet}</span>
              </h3>
              <h3>
                NFTs Available for Mint: <span className="font-semibold">{import.meta.env.VITE_NFT_SUPPLY}</span>
              </h3>
              <h3 className="break-words truncate overflow-ellipsis">
                Contract Address:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 underline"
                  href={`${explorerURL}/token/${nftContract}`}
                >
                  {nftContract}
                </a>
              </h3>
            </div>
            <div className="flex items-center">
              <input
                max={info.maxPerWallet}
                value={quantity}
                onChange={handleChange}
                className="mr-3 rounded-md px-3 text-base lg:text-lg h-[46px] md:h-[60px] w-full outline-none border-slate-300 bg-dark text-white"
                placeholder="How Many NFTs?"
              />{" "}
              {!signer && (
                <span className="flex-shrink-0">
                  <WalletConnect />
                </span>
              )}
              {signer && (
                <button
                  disabled={mintState !== "Mint"}
                  onClick={async () => await mintNFTs()}
                  type="button"
                  className={`Collection-group__buy-btn mt-0 text-base lg:text-lg h-[46px] md:h-[60px] ${buttonColors[mintState]} transition duration-500 ease-in-out`}
                >
                  {mintState} {mintState !== "Mint" && <BouncingDotsLoader />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
