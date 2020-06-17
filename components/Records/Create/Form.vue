<template>
  <div>
    <v-card v-if="inputMode === 'form'" flat outlined class="pa-4 mb-6">
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
          v-for="input in form.investigators"
          :key="input.label"
          :input="input"
          page="investigators"
          @updateProgress="updateProgress"
        />
      </div>
    </v-card>

    <v-card v-if="inputMode === 'entry'" flat outlined class="pa-4 mb-6">
      <div>
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
        Details
      </div>
      <VarInput
        v-for="input in form.details"
        :key="input.label"
        :input="input"
        page="details"
        @updateProgress="updateProgress"
      />
      <div>
        <v-icon color="black" class="mr-1">mdi-account-multiple</v-icon>
        Investigators
      </div>
      <VarInput
        v-for="input in form.investigators"
        :key="input.label"
        :input="input"
        page="investigators"
        @updateProgress="updateProgress"
      />
    </v-card>

    <!-- <v-card v-if="inputMode === 'entry'" flat outlined class="pa-4 mb-6">
      <div>
        <v-icon color="black" class="mr-1">mdi-form-select</v-icon>
        Details
      </div>
      <div></div>
      <v-text-field
        v-for="input in form.details"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
      ></v-text-field>
      <div>
        <v-icon color="black" class="mr-1">mdi-account-multiple</v-icon>
        Investigators
      </div>
      <v-text-field
        v-for="input in form.investigators"
        :key="input.label"
        :label="capitalize(input.label)"
        :value="input.value"
        :hint="input.hint"
      ></v-text-field>
    </v-card> -->
  </div>
</template>

<script>
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
  data() {
    return {
      set: new Set(),
      progress: 0
    }
  },
  methods: {
    updateProgress(label) {
      this.set.add(label)
      this.progress = (this.set.size / 6) * 100
      this.$emit('updateProgressBar', this.progress)
    }
  }
}
</script>

<style></style>
