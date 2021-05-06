// ver mais sobre apexcharts depois, gostei do negocio
import Chart from 'react-apexcharts';
export function DonutChart() {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}
// a estrutura que se retorna no apex charts é um component
  return (
    <Chart
      options={{...options, labels: mockData.labels}}
      series={mockData.series}
      type="donut"
      height="240"
    />
  );

}