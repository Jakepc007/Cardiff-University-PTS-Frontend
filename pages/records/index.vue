<template>
  <div class="container">
    <div class="flex">
      <div class="red--text" @click="updateFilter('Just a thought')">
        {{ gfbs()[0] }}
      </div>
      <div
        type="checkbox"
        class="green--text"
        :class="{ e: 1 === 1 }"
        @click="updateFilter('Preparing documents')"
      >
        {{ gfbs()[1] }}
      </div>

      <div
        class="yellow--text text--darken-3"
        @click="updateFilter('Ready for submission')"
      >
        {{ gfbs()[2] }}
      </div>
      <div class="blue--text" @click="updateFilter('Awarded')">
        {{ gfbs()[3] }}
      </div>
    </div>
    <input v-model="filterActive" type="checkbox" class="checkbox" /> Activate
    filter
    <RecordList :records="filterActive ? filtered : records" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import RecordList from '@/components/RecordList'

export default {
  components: {
    RecordList
  },
  async asyncData({ store, error }) {
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
  data() {
    return {
      filterActive: false
    }
  },
  computed: {
    ...mapState({
      records: (state) => state.records.records,
      filtered: (state) => state.records.filtered
    }),
    ...mapGetters({ gfbs: 'records/getStatusLengths' })
  },
  methods: {
    updateFilter(status) {
      this.$store.dispatch('records/updateFilterStatus', status)
    }
  }
}
</script>

<style scoped>
.container {
  width: 50%;
}
.flex {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  gap: 1fr;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
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
