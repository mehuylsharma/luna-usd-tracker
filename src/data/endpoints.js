export const CoinData = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
}

export const ChartData = (id, days = 365, currency) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
}
  
