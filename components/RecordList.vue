<template>
  <div class="record-list">
    <RecordCard v-for="alert in alerts" :key="alert.id" />
  </div>
</template>

<script>
import RecordCard from '@/components/RecordCard.vue'

export default {
  components: {
    RecordCard
  },
  props: {
    alerts: {
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
