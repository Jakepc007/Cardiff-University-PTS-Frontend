<template>
  <div class="record-list">
    <RecordCard v-for="r in records" :key="r.id" />
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
  padding: 2rem;
}
</style>
