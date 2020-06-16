<template>
  <div>
    <div
      v-if="inputMode === 'form'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem"
    >
      Page <span style="color: red">{{ page }}</span> |
      <span v-if="page === 1">
        Details
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
      </span>
      <span v-if="page === 2">
        Investigators
        <v-icon color="black" class="mr-1">mdi-account-multiple</v-icon>
      </span>
      <span v-if="page === 3">
        Date and Time
        <v-icon color="black" class="mr-1">mdi-clock</v-icon>
      </span>
      <span v-if="page === 4">
        Pricing
        <v-icon color="black" class="mr-1">mdi-cash</v-icon>
      </span>
    </div>

    <div
      v-if="inputMode === 'entry'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem"
    >
      Enter your application details below
    </div>
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
    }
  }
}
</script>

<style></style>
