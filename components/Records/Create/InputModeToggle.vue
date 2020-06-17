<template>
  <div style="position: relative; height: 3rem">
    <div style="position: absolute; right: 10px;">
      <v-btn-toggle v-model="inputMode" dense mandatory>
        <v-btn value="form">
          <v-icon>mdi-format-columns</v-icon>
        </v-btn>

        <v-btn value="entry">
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMode: 'form'
    }
  },
  watch: {
    inputMode() {
      this.$emit('toggleInputMode', this.inputMode)
    }
  }
}
</script>

<style></style>
