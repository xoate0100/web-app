import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export function createChart(elementId: string, config: Record<string, unknown>): any {
  const canvas = document.getElementById(elementId) as HTMLCanvasElement;
  return new ChartJS(canvas, config as any);
}

export { ChartJS as Chart };
