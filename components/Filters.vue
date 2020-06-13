<template>
  <div>
    <v-card outlined class="filter">
      <v-text-field
        v-model="searchQuery"
        label="Search by title or description"
        style="margin-bottom: 1rem"
        :hide-details="true"
      ></v-text-field>
      <!-- <div class="filter-title">Status:</div> -->
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
            :hide-details="true"
          />
          <!-- <span class="amount">{{
            records.filter((r) => r.status === status).length
          }}</span> -->
        </div>
      </div>
    </v-card>
    <!-- <div class="btn-container">
      <v-btn @click="search">Search</v-btn>
    </div> -->
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
  data() {
    return {}
  },
  computed: {
    ...mapState({
      statuses: (state) => state.records.statuses,
      checkedStatuses: (state) => state.records.filter.statuses
    }),
    searchQuery: {
      get() {
        return this.$store.state.records.filter.search
      },
      set(value) {
        this.$store.dispatch('records/updateSearch', value)
      }
    }
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
  margin-bottom: 2rem;
  padding: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

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
