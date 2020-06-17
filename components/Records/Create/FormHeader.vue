<template>
  <div>
    <h3
      v-if="inputMode === 'form'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem"
    >
      Step <span style="color: red">{{ page }}</span> |
      <span v-if="page === 1">
        Details
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
      </span>
      <span v-if="page === 2">
        People
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
    </h3>

    <h3
      v-if="inputMode === 'entry'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem;"
    >
      Enter your application details below
      <v-icon v-if="progress === 100" color="success" class="mr-1">
        mdi-check
      </v-icon>
    </h3>
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
  },
  computed: {
    progress() {
      return this.$store.state.form.progress
    }
  }
}
</script>

<style></style>
