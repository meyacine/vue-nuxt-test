<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" ref="draggableContainer" id="draggable-container">
      <v-card @mousedown="dragMouseDown">
        <v-card-title class="headline">
          Display a simple chart on VueJS
        </v-card-title>
        <v-card-text>
          <Chart :data="bpisData.bpi" :title="'Coin index'"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import Chart from '~/components/Chart.vue'
import { Bpi } from '~/model/bpi.model'

export default {
  components: {
    Chart
  },
  data () {
    return {
      bpisData: new Bpi(),
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  async created () {
    try {
      const { data } = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31')
      this.bpisData = new Bpi(data) // this technique allows us to be typed on the runtime
    } catch (error) {
      throw new Error('Can not fetch data form API')
    }
  },
  methods: {
    dragMouseDown (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
</script>
<style>
#draggable-container {
  position: absolute;
  top: 10rem;
}
</style>
