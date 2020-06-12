<template>
  <div class="record-list">
    <RecordCard v-for="r in records" :key="r.id" :r="r" />
    <Paging :value="3" />
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.record-list {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr;
  }
}
</style>
