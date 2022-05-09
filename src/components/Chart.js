import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDays } from '../data/labels';
import { ChartData } from '../data/endpoints';
export default function Chart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [days, setDays] = useState(1); 
  const [historicData, setHistoricData] = useState([]);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(ChartData('terra-luna', days, 'usd'));
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

    return (
        <div className="chart">
            <Line className="graph"
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in USD`,
                    borderColor: "#ECB365",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div className="btns">
              {chartDays.map((day) => (
                <button
                  className="chart btn"
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    console.log(day.value)
                  }}
                  selected={day.value === days}
                >{day.label}</button>
              ))} 
            </div>
        </div>
    )
}