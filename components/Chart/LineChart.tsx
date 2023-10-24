// Importing necessary modules
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
import { Line } from 'react-chartjs-2';

ChartJS.defaults.font.size = 18;
ChartJS.defaults.font.weight = 'bold';
ChartJS.defaults.color = 'white';
// Registering Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface Sentiment {
  cmt_id: number;
  Positive: number;
  Negative: number;
}

// Props for the LineChart component
type Props = {
  width: number,
  height: number;
};

const labels: string[] = [];

for (let i = 0; i < 5; i++) {
  const today = new Date();
  today.setDate(today.getDate() - i);
  const dayMonth = `${today.getDate()}/${today.getMonth() + 1}`;
  labels.push(dayMonth);
}

function LineChart({ width, height}: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(60,164,85,1)',
        tension: 0,
        point: {
          radius: 5, // ขนาดของจุด
          backgroundColor: 'rgba(0, 255, 42, 1)', // สีของจุด
          hoverRadius: 8,
          borderWidth:5,
          stlye:'circle',
        },
      },
      {
        label: 'Negative',
        data: [40, 60, 75, 44, 53, 43, 51],
        fill: false,
        borderColor: 'rgba(200,64,64,1)',
        tension: 0,
        point: {
          radius: 5, // ขนาดของจุด
          backgroundColor: 'rgba(255, 0, 0, 0.7)', // สีของจุด
          hoverRadius: 8, // ขนาดของจุดเมื่อโฮเวอร์
          borderWidth:5,
          stlye:'circle',
        },
      },
    ],
  };

  var options = {  
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        font: {
          size: 20
        }
      },

    }
   
  };

  return <Line width={width} height={height} data={data} options={options}/>;
}

// Exporting the LineChart component
export default LineChart;
