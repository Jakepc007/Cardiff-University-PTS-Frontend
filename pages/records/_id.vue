<!--            _id.vue page

    Acts as the home page, takes in the baseURL's 
    appended value as the ID.



    author: Jake Morris -->

<template>
  <v-container class="container" fluid>
    <RecordDisplay :record="record" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import RecordDisplay from '@/components/RecordDisplay'

export default {
  layout: 'default',
  components: {
    RecordDisplay
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('records/fetchRecord', 2)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  },
  computed: {
    ...mapState({
      record: (state) => state.records.record
    })
  }
}
</script>
