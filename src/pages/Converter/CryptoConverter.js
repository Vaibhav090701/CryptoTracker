// CryptoConverter.js
import React, { useContext, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './CryptoConverter.css';

const CryptoConverter = () => {
    const { coinList } = useContext(CoinContext);
    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleConvert = () => {
        const fromCoinData = coinList.find(coin => coin.id === fromCoin);
        const toCoinData = coinList.find(coin => coin.id === toCoin);

        if (fromCoinData && toCoinData) {
            const result = (amount * fromCoinData.current_price) / toCoinData.current_price;
            setConvertedAmount(result);
        }
    };

    return (
        <div className="converter">
            <h1>Crypto Converter</h1>
            <div className="converter-controls">
                <select value={fromCoin} onChange={(e) => setFromCoin(e.target.value)}>
                    <option value="">Select From</option>
                    {coinList.map(coin => (
                        <option key={coin.id} value={coin.id}>{coin.name}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Amount"
                />
                <select value={toCoin} onChange={(e) => setToCoin(e.target.value)}>
                    <option value="">Select To</option>
                    {coinList.map(coin => (
                        <option key={coin.id} value={coin.id}>{coin.name}</option>
                    ))}
                </select>
                <button onClick={handleConvert}>Convert</button>
            </div>
            {convertedAmount > 0 && (
                <div className="conversion-result">
                    {amount} {fromCoin} = {convertedAmount.toFixed(4)} {toCoin}
                </div>
            )}
        </div>
    );
};

export default CryptoConverter;
