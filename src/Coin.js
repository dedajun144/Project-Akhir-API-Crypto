import React from "react";
import "./Coin.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Coin({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="Crypto" />
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rp. {price}</p>
          <p className="coin-volume"> Mkt Cap:Rp. {volume.toLocaleString()}</p>
          {priceChange < 0 ? <p className="coin-percent red">{priceChange.toFixed(2)}%</p> : <p className="coin-percent green">{priceChange.toFixed(2)}%</p>}
          <p className="coin-marketcap">Mkt Cap: Rp {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
