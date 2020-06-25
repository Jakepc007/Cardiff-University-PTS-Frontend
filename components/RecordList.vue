<template>
  <div class="record-list">
    <RecordCard v-for="r in records" :key="r.id" :r="r" />
    <Paging
      v-if="records.length !== 0"
      :records="records"
      value="3"
      :page="page"
    />
    <div style="position: relative">
      <v-btn absolute dark fab top right color="red">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RecordCard from '@/components/RecordCard.vue'
import Paging from '@/components/Paging.vue'

export default {
  components: {
    RecordCard,
    Paging
  },
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
      page: (state) => state.records.page
    })
  },
  methods: {
    onPageChange() {}
  }
}
</script>

<style lang="scss">
.record-list {
  margin-bottom: 8rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr;
  }
}
</style>
