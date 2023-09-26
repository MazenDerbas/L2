import { Chart } from '../src/javascript/chart.js'

const chartData = [
  { label: 'A', value: 50 },
  { label: 'B', value: 75 },
  { label: 'C', value: 30 },
  { label: 'D', value: 90 }
]

const containerId = 'barChart'

const myChart = new Chart(containerId, chartData)

myChart.drawBarChart()
