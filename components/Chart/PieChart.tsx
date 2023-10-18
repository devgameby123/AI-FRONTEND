// Importing necessary modules
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registering Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

interface Sentiment{
  cmt_id:number
  Positive:number
  Negative:number
}

// Props for the PieChart component
type Props = {
  width: number;
  height: number;
  Data:Sentiment
};

// Functional component for the PieChart
function PieChart({ width, height,Data }: Props) {

  const data = {
    labels: ['Nagative', 'Positive'],
    datasets: [
      {
        label: '# of Votes',
        data: [Data.Negative,Data.Positive],
        backgroundColor: [
          'rgba(255, 0, 0, 0.7)',
          'rgba(0, 255, 42, 1)',
        ],
        borderColor: [
          'rgba(255, 0, 0, 0.7)',
          'rgba(0, 255, 42, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: true, 
      },
    },
  };

  return (
    <Pie width={width} height={height} data={data} options={options} />
  );
}

// Exporting the PieChart component
export default PieChart;
