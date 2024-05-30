import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const data = [90, 80, 60, 20, 30, 50, 40, 30, 100, 10];
const labels = ['HTML', 'CSS', 'JS','TS','React', 'Node','Vite','SQL','Python','Rust'];

export default function BarChart(){
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;
  
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Visual Expertise',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};
