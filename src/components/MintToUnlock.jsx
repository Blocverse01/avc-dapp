import { faLock as faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MintToUnlock() {
  return (
    <div className="Mint_To_Unlock Collection-group">
      <div className="flex justify-center">
        <FontAwesomeIcon icon={faLock} className="text-5xl lg:text-[6rem]" />
      </div>
      <h3 className="text-center lg:text-lg font-semibold mt-3">
        Mint a Ghost diamond NFT to unlock exclusive Music EP
      </h3>
    </div>
  );
}

export default MintToUnlock;
