import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='home'>
      <div className="hero">
        <h1>Crypto Marketplace</h1>
      </div>

      <div className='crypto-table'>
          <div className='table-layout'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{ textAlign: 'center' }}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
          </div>
          {displayCoin.map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>

              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>

              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Home;
