export class Chart {
  constructor(canvasId, data) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.data = data;
  }

  drawBarChart() {
    let maxValue = 0;
    for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i];
        if (item.value > maxValue) {
            maxValue = item.value;
        }
    }

    const chartHeight = this.canvas.height -  40 ;


    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      const x = 40 + i * (80)
      const barHeight = (item.value / maxValue) * chartHeight;
      const y = this.canvas.height - 20 - barHeight;

      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(x, y, 60, barHeight);
      this.ctx.fillText(item.label, x + 20 / 2, this.canvas.height - 5);
      }
  }

}
