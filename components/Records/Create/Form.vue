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

    <div v-else class="pt-2">
      <MiniHeader title="Details" icon="mdi-form-select" />
      <VarInput
        v-for="input in form.details"
        :key="input.label"
        :input="input"
        page="details"
        @updateProgress="updateProgress"
      />
      <MiniHeader title="People" icon="mdi-account-multiple" />
      <VarInput
        v-for="input in form.people"
        :key="input.label"
        :input="input"
        page="people"
        @updateProgress="updateProgress"
      />
      <MiniHeader title="Date and time" icon="mdi-clock" />
      <VarInput
        v-for="input in form['date and time']"
        :key="input.label"
        :input="input"
        page="date and time"
        @updateProgress="updateProgress"
      />
      <MiniHeader title="Pricing" icon="mdi-cash" />
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
import MiniHeader from '@/components/Records/Create/MiniHeader'

export default {
  components: { VarInput, MiniHeader },
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
    ...mapActions({
      addInput: 'form/addInput'
    }),
    updateProgress(label) {
      if (!this.inputsComplete.includes(label)) this.addInput(label)
    }
  }
}
</script>

<style></style>
