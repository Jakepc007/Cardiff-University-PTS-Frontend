<template>
  <v-app>
    <Alert :alert="alert" />
    <nuxt />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Alert from '@/components/Alert'

export default {
  theme: 'light',
  components: {
    Alert
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('alerts/fetchAlert')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  },
  computed: {
    ...mapState({
      alert: (state) => state.alerts.alert,
      records: (state) => state.records.records
    }),
    currentRoute() {
      return this.records[this.$route.params.id - 1]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
