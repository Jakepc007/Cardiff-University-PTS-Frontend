<!--            _id.vue page

    Acts as the home page, takes in the baseURL's 
    appended value as the ID.

    Not a splash page, and logic may need to be 
    updated to allow for an ID-less route  

    author: Jake Morris -->

<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <div outlined tile>
          <RecordList :records="records" />
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        {{ currentRoute }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RecordList from '@/components/RecordList'

export default {
  layout: 'default',
  components: {
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
