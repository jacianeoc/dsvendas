// ver mais sobre apexcharts depois, gostei do negocio
import axios from 'axios';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import {BASE_URL} from 'utils/requests';

//criando um tipo para os dados do grafico 
type ChartData = {
  labels: string[];
  series: number[];
}

//integrando no grafico de donut no back-end
export function DonutChart() {

  //criando o state 
  const [chartData, setChartData] = useState<ChartData>({labels:[], series:[]});


  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      setChartData({labels:myLabels, series:mySeries});
    });
  }, []);


const options = {
    legend: {
        show: true
    }
}
// a estrutura que se retorna no apex charts é um component
  return (
    <Chart
      options={{...options, labels: chartData.labels}}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );

}