<template>
  <div>
    <Alert :alert="alert" />
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <div class="pa-12" outlined tile>
          <RecordList />
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        Record info
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Alert from '@/components/Alert'
import RecordList from '@/components/RecordList'

export default {
  layout: 'default',
  components: {
    Alert,
    RecordList
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('alerts/fetchAlert')
      await store.dispatch('records/fetchRecords')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  },
  computed: mapState({
    alert: (state) => state.alerts.alert,
    records: (state) => state.records.records
  })
}
</script>
