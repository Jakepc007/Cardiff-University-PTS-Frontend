<template>
  <div>
    <v-card v-if="inputMode === 'form'" flat outlined class="pa-4 mb-6">
      <div v-if="page === 1">
        <VarInput
          v-for="input in form.details"
          :key="input.label"
          :input="input"
          page="details"
        />
      </div>
      <div v-else-if="page === 2">
        <VarInput
          v-for="input in form.investigators"
          :key="input.label"
          :input="input"
          page="investigators"
        />
      </div>
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
  }
}
</script>

<style></style>
