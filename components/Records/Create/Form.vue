<template>
  <div>
    <div v-if="inputMode === 'form'" class="pt-2">
      <div v-if="page === 1">
        <VarInput
          v-for="input in form.details"
          :key="input.label"
          :input="input"
          page="details"
          @updateProgress="updateProgress"
        />
      </div>
      <div v-else-if="page === 2">
        <VarInput
          v-for="input in form.people"
          :key="input.label"
          :input="input"
          page="people"
          @updateProgress="updateProgress"
        />
      </div>
      <div v-else-if="page === 3">
        <VarInput
          v-for="input in form['date and time']"
          :key="input.label"
          :input="input"
          page="date and time"
          @updateProgress="updateProgress"
        />
      </div>
      <div v-else-if="page === 4">
        <VarInput
          v-for="input in form.pricing"
          :key="input.label"
          :input="input"
          page="pricing"
          @updateProgress="updateProgress"
        />
      </div>
    </div>

    <div v-if="inputMode === 'entry'" class="pt-2">
      <h3 class="mb-2">
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
        Details
      </h3>
      <VarInput
        v-for="input in form.details"
        :key="input.label"
        :input="input"
        page="details"
        @updateProgress="updateProgress"
      />
      <h3 class="mb-2">
        <v-icon color="black" class="mr-1">mdi-account-multiple</v-icon>
        People
      </h3>
      <VarInput
        v-for="input in form.people"
        :key="input.label"
        :input="input"
        page="people"
        @updateProgress="updateProgress"
      />
      <h3 class="mb-2">
        <v-icon color="black" class="mr-1">mdi-clock</v-icon>
        Date and time
      </h3>
      <VarInput
        v-for="input in form['date and time']"
        :key="input.label"
        :input="input"
        page="date and time"
        @updateProgress="updateProgress"
      />
      <h3 class="mb-2">
        <v-icon color="black" class="mr-1">mdi-cash</v-icon>
        Pricing
      </h3>
      <VarInput
        v-for="input in form.pricing"
        :key="input.label"
        :input="input"
        page="pricing"
        @updateProgress="updateProgress"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VarInput from '@/components/Records/Create/VarInput'

export default {
  components: { VarInput },
  props: {
    page: {
      default: 1,
      type: Number
    },
    inputMode: {
      default: 'form',
      type: String
    },
    form: {
      type: Object,
      default() {}
    }
  },
  computed: {
    ...mapState({
      inputsComplete: (state) => state.form.inputsComplete,
      progress: (state) => state.form.progress
    })
  },
  methods: {
    ...mapActions({ addInput: 'form/addInput' }),
    updateProgress(label) {
      if (!this.inputsComplete.includes(label)) this.addInput(label)

      // if (this.inputsComplete.includes(label)) {
      //   console.log('cool')
      // } else {
      //   console.log('doesnt include')
      //   this.inputsComplete.push(label)
      // }
      // this.sete.add(label)
      // this.progress = (this.set.size / 6) * 100
      // this.$emit('updateProgressBar', this.progress)
    }
  }
}
</script>

<style></style>
