<template>
  <div>
    <v-card outlined class="filter">
      <div class="filter-title">Filters:</div>
      <div class="grid filter-content">
        <div
          v-for="(status, index) in statuses"
          :key="index"
          class="filter-container"
        >
          <input
            v-model="checkedStatuses"
            :value="status"
            type="checkbox"
            @change="filterStatus(status)"
          />
          <span>{{ status }}</span>
          <span class="amount">{{
            records.filter((r) => r.status === status).length
          }}</span>
        </div>
      </div>
      <div class="btn-container">
        <button class="search-btn" @click="search">Search</button>
      </div>
    </v-card>
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
  computed: {
    ...mapState({
      statuses: (state) => state.records.statuses,
      checkedStatuses: (state) => state.records.filter.statuses
    })
  },
  methods: {
    ...mapActions({ updateFilterStatus: 'records/updateFilterStatus' }),
    filterStatus(status) {
      this.updateFilterStatus(status)
    },
    search() {
      this.$store.dispatch('records/fetchFiltered')
    }
  }
}
</script>

<style>
.filter {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
}

.filter-title {
  background: rgb(255, 33, 33);
  color: white;
  font-weight: 600;
  padding: 0.25rem;
}

.filter-content {
  padding: 1rem;
}

.amount {
  color: rgb(255, 33, 33);
  float: right;
}

.search-btn {
  background: rgb(255, 33, 33);
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: 0.25s;
}

.-blur {
  filter: blur(4px);
}

.search-btn:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.212);
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.filter-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: rgb(255, 236, 236);
  background: white;
  border-bottom: 1px solid gray;
}
</style>
