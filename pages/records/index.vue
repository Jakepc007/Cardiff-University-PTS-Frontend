<template>
  <div class="container">
    <Filters :records="records" />
    <RecordList :records="filtered" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RecordList from '@/components/RecordList'
import Filters from '@/components/Filters'

export default {
  components: {
    RecordList,
    Filters
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('alerts/fetchAlert')
      await store.dispatch('records/fetchRecords')
      await store.dispatch('records/fetchFiltered')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  },
  data() {
    return {
      filterActive: false
    }
  },
  computed: {
    ...mapState({
      records: (state) => state.records.records,
      filtered: (state) => state.records.filtered
    })
  },
  methods: {}
}
</script>

<style scoped>
.container {
  width: 50%;
}

.checkbox {
  margin-bottom: 1rem;
}

.flex > div {
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 600;
  padding: 1rem;
}
</style>
