import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: import.meta.env.VITE_ALCHEMY_ID,
  network: Network[import.meta.env.VITE_APP_NETWORK || "MATIC_MAINNET"],
};
const alchemy = new Alchemy(config);
const nftAddress = import.meta.env.VITE_NFT_ADDRESS || "";

export async function getNFTs() {
  const nfts = await alchemy.nft.getNftsForOwner(
    import.meta.env.VITE_NFT_WALLET_ADDRESS
  );
  const roughDiamonds = nfts.ownedNfts.filter(
    (nft) => nft.contract.address.toLowerCase() == nftAddress.toLowerCase()
  );
  return roughDiamonds.map((nft) => parseInt(nft.tokenId));
}

export function getRandomTokens(tokenIds, number) {
  let _arr = [...tokenIds];
  return [...Array(number)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
}

export async function getTokensToMint(number) {
  const nfts = await getNFTs();
  return getRandomTokens(nfts, number);
}
