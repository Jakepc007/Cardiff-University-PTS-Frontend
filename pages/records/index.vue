<template>
  <div class="container">
    <Filters :records="records" />
    <RecordList :records="records" />
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
      await store.dispatch('records/findRecords')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch any data from the server'
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
      records: (state) => state.records.paged
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin-top: 3rem;

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
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
