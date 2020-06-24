<template>
  <div class="mb-1">
    <h2 class="grey--text text--darken-1">{{ heading }}</h2>
    <ul v-if="aggeragate">
      <li v-for="(val, index) in value" :key="index" style="font-weight: 600">
        {{ val }}
      </li>
    </ul>
    <span v-else style="font-weight: 600">
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
      type: [String, Array]
    },
    aggeragate: {
      default: false,
      type: Boolean
    },
    gray: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style></style>
