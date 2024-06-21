// Update CoinContextProvider
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();
const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [coinList, setCoinList] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-Fx6htVKyzCCCjPxpQVZ9NNty' }
        };
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => {
                setAllCoin(response);
                const coinListResponse = response.map(coin => ({
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    image: coin.image,
                    current_price: coin.current_price
                }));
                setCoinList(coinListResponse);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin, currency, setCurrency, coinList
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
