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
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('records/fetchCurrentRecord', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the record'
      })
    }
  },
  computed: {
    ...mapState({
      record: (state) => state.records.record
    }),
    paramId() {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped></style>
