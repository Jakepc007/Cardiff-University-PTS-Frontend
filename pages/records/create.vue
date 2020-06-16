<template>
  <div class="container">
    <ToggleContainer @toggleInputMode="toggleInputMode" />
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
      :value="entryProgress"
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
      <div>
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
        Details
      </div>
      <v-text-field
        v-for="input in form"
        v-show="input.page === 1"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
        @input="updateProgress(input.label)"
      ></v-text-field>

      <div>
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
        Details
      </div>
      <v-text-field
        v-for="input in form"
        v-show="input.page === 2"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
        @input="updateProgress(input.label)"
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

    <div v-if="inputMode === 'entry'" class="d-flex justify-space-around">
      <v-btn min-width="100" max-width="100" color="success" @click="submit">
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ToggleContainer from '@/components/Records/Create/InputModeToggle'

export default {
  components: {
    ToggleContainer
  },
  data() {
    return {
      form: this.$store.state.form.form,
      // Either entry or form
      inputMode: 'form',
      entryProgressSet: new Set(),
      entryProgress: 0
    }
  },
  computed: {
    ...mapState({
      page: (state) => state.form.page,
      formCount: (state) => state.form.formCount
    })
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
    },
    updateProgress(label) {
      if (!this.entryProgressSet.has(label)) {
        console.log(this.entryProgressSet.size)
        this.entryProgress =
          ((1 + this.entryProgressSet.size) / this.formCount) * 100
        this.entryProgressSet.add(label)
      }
    },
    toggleInputMode(value) {
      this.inputMode = value
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
