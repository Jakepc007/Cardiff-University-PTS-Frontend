<template>
  <div>
    <v-text-field
      v-if="input.type === 'text'"
      v-model="inputData"
      outlined
      :label="capitalize(input.label)"
      :hint="input.hint"
    ></v-text-field>

    <v-select
      v-if="input.type === 'select'"
      v-model="inputData"
      outlined
      :items="input.options"
      :label="capitalize(input.label)"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      default() {},
      type: Object
    },
    page: {
      default: '',
      type: String
    }
  },
  computed: {
    inputData: {
      get() {
        return this.input.value
      },
      set(newValue) {
        const label = this.input.label
        const page = this.page
        this.$store.dispatch('form/update', { label, newValue, page })
        this.$emit('updateProgress', label)
      }
    }
  },
  methods: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style></style>
