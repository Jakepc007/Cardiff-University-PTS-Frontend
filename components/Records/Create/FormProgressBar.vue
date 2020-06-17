<template>
  <div>
    <v-progress-linear
      v-if="inputMode === 'form'"
      :value="page * 25"
      height="6"
      :color="page === 4 ? 'success' : 'red'"
      rounded
      class="mb-4"
    ></v-progress-linear>

    <v-progress-linear
      v-if="inputMode === 'entry'"
      :color="entryProgress === 100 ? 'success' : 'red'"
      :value="entryProgress"
      height="6"
      rounded
      class="mb-4"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      default: 1,
      type: Number
    },
    inputMode: {
      default: 'form',
      type: String
    },
    entryProgress: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style></style>
