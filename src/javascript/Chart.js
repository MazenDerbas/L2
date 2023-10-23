/**
 * Represents a basic bar chart that can be drawn on a canvas.
 */
export class Chart {
  #canvas
  #ctx
  #data
  #paddingBottom = 20
  #paddingTop = 40
  #barWidth = 60
  #spaceBetweenBars = 80
  #labelOffsetX = 10
  #labelOffsetY = 1
  /**
   * Constructs a new Chart instance.
   *
   * @param {string} canvasId - The ID of the canvas element where the chart will be drawn.
   * @param {object[]} data - The dataset for the chart.
   */
  constructor (canvasId, data) {
    this.#canvas = document.getElementById(canvasId)
    this.#ctx = this.canvas.getContext('2d')
    this.#data = data
  }

  /**
   * Draws a bar chart on the canvas.
   */
  drawBarChart () {
    const maxValue = this.findMaxValue()
    const chartHeight = this.canvas.height - this.#paddingTop
    // Draw each bar based on its value
    for (let i = 0; i < this.#data.length; i++) {
      const item = this.#data[i]
      const x = this.#paddingTop + i * this.#spaceBetweenBars
      const barHeight = (item.value / maxValue) * chartHeight
      const y = this.canvas.height - this.#paddingBottom - barHeight
      this.#ctx.fillStyle = this.generateRandomColor()
      this.#ctx.fillRect(x, y, this.#barWidth, barHeight)
      this.#ctx.fillText(item.label, x + this.#labelOffsetX, this.#canvas.height - this.#labelOffsetY)
    }
  }

  /**
   * Find the max value.
   *
   * @returns {number} max value
   */
  findMaxValue () {
    let maxValue = 0
    for (let i = 0; i < this.#data.length; i++) {
      const item = this.data[i]
      if (item.value > maxValue) {
        maxValue = item.value
      }
    }
    return maxValue
  }

  /**
   * Generate a random RGB colors.
   *
   * @returns {string} A string representing the random RGB color in the format "rgb(r,g,b)".
   */
  generateRandomColor () {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
  }
}
