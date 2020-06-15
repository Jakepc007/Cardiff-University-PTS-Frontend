<template>
  <div class="container">
    <div class="mb-2 text-h6 font-weight-bold">
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
    <v-progress-linear
      :value="page * 25"
      height="6"
      rounded
      class="mb-4"
      striped
    ></v-progress-linear>
    <v-card flat outlined class="pa-4 mb-6">
      <v-text-field label="Title"></v-text-field>
      <v-text-field label="Status"></v-text-field>
      <v-text-field label="Comments"></v-text-field>
    </v-card>
    <div class="d-flex justify-space-around">
      <v-btn :disabled="page === 1" @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn :disabled="page === 4" @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      page: (state) => state.form.page
    })
  },
  methods: {
    next() {
      this.$store.dispatch('form/nextPage')
    },
    prev() {
      this.$store.dispatch('form/prevPage')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin-top: 3rem;

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
}
</style>
