import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { alpha, hexToRgb } from '@mui/material';

const data = [90, 80, 60, 20, 30, 50, 40, 30, 100, 10];
const labels = ['HTML', 'CSS', 'JS','TS','React', 'Node','Vite','SQL','Python','Rust'];

export default function BarChart(){
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    const style = getComputedStyle(document.body);
    let primary = style.getPropertyValue('--primary').trim();
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(primary)) {
      primary = '#000000';  // Fallback color in case primary is not a valid color
    }
    
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {

        Chart.defaults.font.family = 'Fredoka';
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Expertise',
                data: data,
                backgroundColor: alpha(hexToRgb(primary), 0.1),
                borderColor: hexToRgb(primary),
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
            responsive: true,
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
