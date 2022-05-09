import React from 'react';

export default function Header(props) {
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  }); 

  return (
      <div className="header">
          <div className="symbol">
              <div className="upper-text">SYMBOL:</div> 
              {props.data.symbol.toUpperCase()}/USD
          </div>
          <div className="cur-price">
              <div className="upper-text">CURRENT PRICE:</div> 
              <span id="cur-price">{formatter.format(props.data.market_data.current_price.usd)}</span>
          </div>
          <div className="change-24h">
              <div className="upper-text">24H CHANGE:</div> 
              <span style={props.data.market_data.price_change_percentage_24h_in_currency.usd > 0 ? {color: 'green'} : {color: 'red'}} id="change-24h">{(props.data.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2)}%</span>
          </div>
          <div className="low-24h">
              <div className="upper-text">24H LOW:</div> 
              {formatter.format(props.data.market_data.low_24h.usd)}
          </div>
          <div className="high-24h">
              <div className="upper-text">24H HIGH:</div> 
              {formatter.format(props.data.market_data.high_24h.usd)}
          </div>
      </div>
  );
};