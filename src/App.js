import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import { CoinData, ChartData } from './data/endpoints';
import './stylesheets/app.css';

function App() {
  const [priceData, setPriceData] = useState({});
  const [chartData, setChartData] = useState({});

  const getData = async () => {
    try {
      const resp = await axios.get(CoinData('terra-luna'));
      setPriceData(resp);
    } catch (err) {
      console.error(err);
    }
  }

  const getChartData = async () => {
    try {
      const resp = await axios.get(ChartData('terra-luna', 365, 'usd'));
      setChartData(resp);
      console.log(resp)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
    getChartData();
    setInterval(() => {
      getData();
    }, 3000);
  }, []); 

  return (
    <div className="app">
      {priceData.data ? 
        <Header data={priceData.data}/> : 
        ''
      }
      <div className="info">
        {chartData.data ? 
          <Chart data={chartData.data} /> : 
          ''
        }
        {priceData.data ? 
          <Sidebar data={priceData.data} /> : 
          ''
        }
      </div>
    </div>
  );
}

export default App;
