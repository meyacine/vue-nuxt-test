<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Display a simple chart on VueJS
        </v-card-title>
        <v-card-text>
          <Chart/>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Chart from '~/components/Chart.vue'

export default {
  components: {
    Chart
  }
}
</script>
