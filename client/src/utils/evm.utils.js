import { formatEther, ethers } from 'ethers';

const rpcUrl = 'https://mainnet.infura.io/v3/97497915ea964c738248c79200c748ea';

export const getBalance = async (wallet) => {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const balance = await provider.getBalance(wallet);
    return formatEther(balance);
}
