<template>
  <div>
    <Alert :alert="alert" />
    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" cols="12" sm="6">
        <v-card class="pa-2" outlined tile>
          Column
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  layout: 'default',
  components: {
    Alert
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3000/alert')
      return {
        alert: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  }
}
</script>
