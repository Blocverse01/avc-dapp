const errorCheckpoints = {
    "Not whitelisted": "Your address is not whitelisted for this sale",
    "need to buy at least 1 NFT": "You need to buy at least 1 NFT",
    "max buy amount exceeded": "You can't buy more than the max amount",
    "Presale NFTs exhausted": "All presale NFTs have been sold",
    "insufficient funds": "You don't have enough MATIC to complete minting",
    "Invalid token encountered": "Invalid token encountered",
    "Failed to send Ether": "Couldn't send MATIC for NFT",
}

export function formatError(err) {
    const verbose = err.data?.message || err.message;
    if (verbose) {
        for (var x in errorCheckpoints) {
            if (verbose.includes(x)) {
                return errorCheckpoints[x];
            }
            return verbose;
        }
    }
}