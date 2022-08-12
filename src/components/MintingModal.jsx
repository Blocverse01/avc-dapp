import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRoughDiamondMinter from "../hooks/useRoughDiamondMinter";
import Swal from "sweetalert2";
import { ethers } from "ethers";

export default function MintingModal({ open, setOpen }) {
  const { isLoading, isSuccess, mint, setQuantity, quantity, info } = useRoughDiamondMinter();
  const handleChange = ({ target: { value: amount } }) => {
    setQuantity(amount);
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
                type="button"
                className="Collection-group__mint-btn mt-0 text-base lg:text-lg h-[46px] md:h-[60px]"
              >
                Mint {quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
