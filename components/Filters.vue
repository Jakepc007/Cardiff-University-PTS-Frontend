<template>
  <div>
    <div class="flex">
      <div
        v-for="(status, index) in statuses"
        :key="index"
        class="filter-container"
      >
        <input
          v-model="checkedStatuses"
          :value="status"
          type="checkbox"
          @change="filterStatus(status, $event)"
        />
        <div>{{ status }}</div>
        <div>{{ records.filter((r) => r.status === status).length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    records: {
      type: Array,
      default() {
        return []
      }
    }
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
  computed: {
    ...mapState({
      statuses: (state) => state.records.statuses,
      checkedStatuses: (state) => state.records.filter.statuses
    })
  },
  methods: {
    ...mapActions({ updateFilterStatus: 'records/updateFilterStatus' }),
    filterStatus(status, event) {
      const checked = event.target.checked
      this.updateFilterStatus({ status, checked })
    }
  }
}
</script>

<style>
.flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 10%;
  padding-right: 10%;
  gap: 1rem;
}

.filter-container {
  text-align: center;
  padding: 0.5rem;
  background: rgb(255, 236, 236);
  border: 1px solid rgb(128, 128, 128);
  border-radius: 0.5rem;
  background: white;
}
</style>
