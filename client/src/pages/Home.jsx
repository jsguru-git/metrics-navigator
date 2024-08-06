import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import { getBalance } from '../utils/evm.utils';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()
    const [balance, setBalance] = useState(0)

    useEffect(() => {        
        (async () => {
            await getUser()
            if (user.ethereum_wallet_address) {
                const _balance = await getBalance(user.ethereum_wallet_address);
                setBalance(_balance);
            }
        })();              
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? 'user Ethereum balance' : 'Please login first'}
                    </div>
                    <div className="mb-12">
                        Address: {user.ethereum_wallet_address}
                    </div>
                    <div className="mb-12">
                        Balance: {balance} ETH
                    </div>
                </div>
            </h2>
        </div>
    )
}
