<template>
  <div class="alert" :class="alert.level">
    {{ alert.alert }}
  </div>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      default() {
        return {
          id: 2,
          alert: 'Danger text',
          level: 'danger'
        }
      }
    }
  }
}
</script>

<style scoped>
.alert {
  width: 100%;
  padding: 0.25rem;
  font-weight: 600;
  text-align: center;
}

.info {
  background: rgb(151, 151, 0);
  color: white;
}
</style>
