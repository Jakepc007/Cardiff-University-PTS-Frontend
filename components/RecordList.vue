<template>
  <div class="record-list">
    <RecordCard v-for="r in records" :key="r.id" :r="r" />
  </div>
</template>

<script>
import RecordCard from '@/components/RecordCard.vue'

export default {
  components: {
    RecordCard
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
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
