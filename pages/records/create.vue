<template>
  <div class="container">
    <div class="mb-2 text-h6 font-weight-bold">
      Step <span style="color: red">{{ step }}</span> |
      <span v-if="step === 1">
        Details
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
      </span>
      <span v-if="step === 2">
        Investigators
        <v-icon color="black" class="mr-1">mdi-account-multiple</v-icon>
      </span>
      <span v-if="step === 3">
        Date and Time
        <v-icon color="black" class="mr-1">mdi-clock</v-icon>
      </span>
      <span v-if="step === 4">
        Pricing
        <v-icon color="black" class="mr-1">mdi-cash</v-icon>
      </span>
    </div>
    <v-progress-linear
      :value="step * 25"
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
      <v-btn :disabled="step === 1" @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn :disabled="step === 4" @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },
  methods: {
    next() {
      this.step += this.step > 4 ? 0 : 1
    },
    prev() {
      this.step -= this.step === 1 ? 0 : 1
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
