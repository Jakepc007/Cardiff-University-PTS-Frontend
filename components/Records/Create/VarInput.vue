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
        min="2020-01-01"
        max="2030-01-01"
        elevation="15"
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

    <v-combobox
      v-if="input.type === 'array'"
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Co-Investigators"
      multiple
      append-icon="mdi-chevron-down"
      outlined
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong
          >&nbsp;
          <!-- <span>(interest)</span> -->
        </v-chip>
      </template>
    </v-combobox>
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
      date: this.input.value,
      chips: this.input.value,
      items: [
        'Joe Tomas',
        'Sam Jackson',
        'Rees Webber',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
      ]
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
    },
    chips(newValue) {
      this.update(newValue)
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
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style></style>
