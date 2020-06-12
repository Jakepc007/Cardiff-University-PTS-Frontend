<template>
  <div>
    <v-card outlined class="filter">
      <div class="filter-title">Status:</div>
      <div class="grid filter-content">
        <div
          v-for="(status, index) in statuses"
          :key="index"
          class="filter-container"
        >
          <v-checkbox
            v-model="checkedStatuses"
            style="display: inline"
            :value="status"
            type="checkbox"
            :label="status"
            @change="filterStatus(status)"
          />
          <!-- <span class="amount">{{
            records.filter((r) => r.status === status).length
          }}</span> -->
        </div>
      </div>
    </v-card>
    <div class="btn-container">
      <v-btn @click="search">Search</v-btn>
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

<style lang="scss">
.filter {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.filter-title {
  color: rgb(53, 53, 53);
  font-weight: 600;
  padding-left: 1rem;
  text-align: center;
}

.filter-content {
  padding: 1rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.filter-container {
  background: rgb(255, 236, 236);
  background: white;
}
</style>
