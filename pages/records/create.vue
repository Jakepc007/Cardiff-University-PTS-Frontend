<template>
  <div class="container">
    <div style="position: relative; height: 3rem">
      <div style="position: absolute; right: 10px;">
        <v-btn-toggle v-model="inputMode" dense mandatory>
          <v-btn value="form">
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn value="entry">
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

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
      <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
      Enter your application details below
    </div>

    <v-progress-linear
      v-if="inputMode === 'form'"
      :value="page * 25"
      height="6"
      color="red"
      rounded
      class="mb-4"
    ></v-progress-linear>
    <v-card v-if="inputMode === 'form'" flat outlined class="pa-4 mb-6">
      <v-text-field
        v-for="input in form"
        v-show="input.page === page"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
      ></v-text-field>
    </v-card>

    <v-card v-if="inputMode === 'entry'" flat outlined class="pa-4 mb-6">
      <v-text-field
        v-for="input in form"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
      ></v-text-field>
    </v-card>
    <div v-if="inputMode === 'form'" class="d-flex justify-space-around">
      <v-btn
        :disabled="page === 1"
        min-width="100"
        max-width="100"
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn v-if="page !== 4" min-width="100" max-width="100" @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn
        v-else
        min-width="100"
        max-width="100"
        color="success"
        @click="submit"
      >
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      form: this.$store.state.form.form,
      // Either entry or form
      inputMode: 'form'
    }
  },
  computed: {
    ...mapState({
      page: (state) => state.form.page
    }),
    formInputs() {
      return this.form.filter((input) => input.page === this.page)
    }
  },
  methods: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    next() {
      this.$store.dispatch('form/nextPage')
    },
    prev() {
      this.$store.dispatch('form/prevPage')
    },
    submit() {
      this.$store.dispatch('form/submit')
      this.$router.push('/records')
    },
    hello() {
      console.log('ok')
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
