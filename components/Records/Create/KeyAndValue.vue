<template>
  <div class="mb-1">
    <h2>{{ heading }}</h2>
    <ul v-if="aggeragate">
      <li v-for="(val, index) in value.split(',')" :key="index">{{ val }}</li>
    </ul>
    <span v-else>
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    aggeragate: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style></style>
