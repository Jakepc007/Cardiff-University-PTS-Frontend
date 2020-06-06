<template>
  <div>Alert Component {{ alert }}</div>
</template>

<script>
export default {
  props: {
    alert: {
      type: String,
      default: 'IDK'
    }
  }
}
</script>
