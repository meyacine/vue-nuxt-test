<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Display a simple chart on VueJS
        </v-card-title>
        <v-card-text>
          <Chart :data="bpisData.bpi" :title="'Coin index'"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
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
      bpisData: new Bpi()
    }
  },
  async created () {
    try {
      const { data } = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31')
      this.bpisData = new Bpi(data) // this technique allows us to be typed on the runtime
    } catch (error) {
      throw new Error('Can not fetch data form API')
    }
  }
}
</script>
