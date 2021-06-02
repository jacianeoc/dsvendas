// ver mais sobre apexcharts depois, gostei do negocio
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/formart';
import { BASE_URL } from 'utils/requests';

type seriesData = {
  name: string;
  data: number[];
}
type ChartData = {
  //label vai ser um objeto que vai ter dados categoricos
  labels: {  
    categories: string[];

  },
  series: seriesData[];
}

export function BarChart() {
  const [chartData, setChartData] = useState<ChartData>(
    {labels: {
      categories:[]
    },
    series: [
      {
          name: "",
          data: []                   
      }
  ]});
  
  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
    .then(response => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => round( 100 * (x.deals/x.visited), 1));

      setChartData({labels: {
        categories: myLabels
      },
      series: [
        {
            name: "% Success",
            data: mySeries                   
        }
    ]});
    });
  }, []);

  const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
  };

// a estrutura que se retorna no apex charts é um component
  return (
    <Chart
      options={{...options, xaxis: chartData.labels}}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );

}