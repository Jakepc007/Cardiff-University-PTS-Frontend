<template>
  <v-lazy
    :options="{
      threshold: 1
    }"
    transition="fade-transition"
  >
    <div class="record-display">
      <p>{{ record.title }}</p>
      <p class="grey--text text--darken-2">
        {{ record.desc }}
      </p>
    </div>
  </v-lazy>
</template>

<script>
export default {
  props: {
    record: {
      default() {},
      type: Object
    }
  }
}
</script>

<style>
.record-display {
  padding: 2rem;
}
</style>
