<template>
  <div outlined class="filter">
    <h2>Filter</h2>
    <v-text-field
      v-model="searchQuery"
      label="Search by title or description"
      style="margin-bottom: 1rem"
      :hide-details="true"
      solo
      @input="updateSearchQuery"
    ></v-text-field>
    <!-- <h4>Status</h4> -->
    <v-card class="grid filter-content">
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
          @change="filterStatus(status)"
        />
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
  data() {
    return {
      searchQuery: this.$store.state.records.filter.search
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
      this.$store.dispatch('records/findRecords')
    },
    updateSearchQuery() {
      this.$store.dispatch('records/updateSearch', this.searchQuery)
    }
  }
}
</script>

<style lang="scss">
.filter {
  margin-bottom: 2rem;
}

.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  align-items: center;
}

.filter-title {
  color: rgb(53, 53, 53);
  font-weight: 600;
  padding-left: 1rem;
  text-align: center;
}

.filter-container {
  padding: 0.5rem;
}
</style>
