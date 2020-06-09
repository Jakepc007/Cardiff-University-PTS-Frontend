<template>
  <div>
    <RecordList :records="records" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RecordList from '@/components/RecordList'

export default {
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
      records: (state) => state.records.records
    })
  }
}
</script>

<style></style>
