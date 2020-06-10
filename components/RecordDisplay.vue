<template>
  <div>
    <v-lazy transition="scroll-x-transition">
      <nuxt-link to="/records"><v-icon large>mdi-arrow-left</v-icon></nuxt-link>
    </v-lazy>
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
  </div>
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
a {
  text-decoration: none;
}
.record-display {
  padding: 2rem;
}
</style>
