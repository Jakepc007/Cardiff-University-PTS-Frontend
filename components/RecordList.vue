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

<style>
.record-list {
  display: grid;
  gap: 0.5rem;
  padding: 2rem;
}
</style>
