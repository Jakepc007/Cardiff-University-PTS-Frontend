<template>
  <div>
    <v-text-field
      v-if="input.type === 'text'"
      v-model="inputData"
      outlined
      :label="capitalize(input.label)"
      :hint="input.hint"
    ></v-text-field>

    <v-textarea
      v-if="input.type === 'textarea'"
      v-model="inputData"
      auto-grow
      outlined
      :label="capitalize(input.label)"
      :hint="input.hint"
    ></v-textarea>

    <v-select
      v-if="input.type === 'select'"
      v-model="inputData"
      outlined
      :items="input.options"
      :label="capitalize(input.label)"
      :hint="input.hint"
    ></v-select>

    <v-menu
      v-if="input.type === 'date'"
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="capitalize(input.label)"
          readonly
          outlined
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        v-model="date"
        @change="saveDate"
      ></v-date-picker>
    </v-menu>

    <v-text-field
      v-if="input.type === 'integer'"
      v-model="inputData"
      outlined
      type="number"
      :label="capitalize(input.label)"
      :hint="input.hint"
    ></v-text-field>
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
  data() {
    return {
      menu: false,
      date: this.input.value
    }
  },
  computed: {
    inputData: {
      get() {
        return this.input.value
      },
      set(newValue) {
        this.update(newValue)
      }
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    saveDate(newValue) {
      this.$refs.menu.save(newValue)
      this.update(newValue)
    },
    update(newValue) {
      const label = this.input.label
      const page = this.page
      this.$store.dispatch('form/update', { label, newValue, page })
      this.$emit('updateProgress', label)
    }
  }
}
</script>

<style></style>
