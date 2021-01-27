<script>
import { Line } from 'vue-chartjs'

const borderColor = '#077187'
const pointBorderColor = '#0E1428'
const pointBackgroundColor = '#AFD6AC'
const backgroundColor = '#74A57F'

const options = {
  responsive: true,
  maintainAspectRatio: false
}

export default {
  extends: Line,
  props: {
    data: {},
    title: null
  },
  watch: {
    data (d) {
      const dates = Object.keys(d)
      const totals = Object.values(d)
      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              label: this.title,
              data: totals,
              borderColor,
              pointBorderColor,
              pointBackgroundColor,
              backgroundColor
            }
          ]
        },
        options
      )
    }
  }
}
</script>
