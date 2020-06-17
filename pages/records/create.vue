<template>
  <div class="container">
    <ToggleContainer @toggleInputMode="toggleInputMode" />
    <FormHeader :input-mode="inputMode" :page="page" />
    <FormProgressBar
      :input-mode="inputMode"
      :page="page"
      :entry-progress="entryProgress"
    />
    <Form :input-mode="inputMode" :page="page" :form="form" />

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
import FormHeader from '@/components/Records/Create/FormHeader'
import FormProgressBar from '@/components/Records/Create/FormProgressBar'
import Form from '@/components/Records/Create/Form'

export default {
  components: {
    ToggleContainer,
    FormHeader,
    FormProgressBar,
    Form
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
    updateProgress(label) {
      if (!this.entryProgressSet.has(label)) {
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
