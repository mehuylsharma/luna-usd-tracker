import React from 'react';

export default function Sidebar(props) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="sidebar">
            <div className="info-prop">
                Market cap: {' '}
                <span className="info-value">{formatter.format(props.data.market_data.market_cap.usd)}</span>
            </div>
            <div className="info-prop">
                Circulating supply: {' '}
                <span className="info-value">{props.data.market_data.circulating_supply.toFixed(2)}</span>
            </div>
            <div className="info-prop">
                Total supply: {' '}
                <span className="info-value">{props.data.market_data.total_supply.toFixed(2)}</span>
            </div>
            <div className="info-prop">
                Max supply: {' '}
                <span className="info-value">{props.data.market_data.max_supply}</span>
            </div>
            <div className="info-prop">
                All time High: {' '}
                <span className="info-value">{formatter.format(props.data.market_data.ath.usd)}</span>
            </div>
            <div className="info-prop">
                All time Low: {' '}
                <span className="info-value">{formatter.format(props.data.market_data.atl.usd)}</span>
            </div>
        </div>
    )
};