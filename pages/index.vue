<template>
  <div>
    <Alert :alert="alert" />
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <div class="pa-12" outlined tile>
          Record list
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="ma-12" outlined tile>
          Record info
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Alert from '@/components/Alert'

export default {
  layout: 'default',
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
  computed: mapState({
    alert: (state) => state.alerts.alert
  })
}
</script>
