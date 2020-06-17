<template>
  <div>
    <v-progress-linear
      :value="inputMode === 'form' ? page * 25 : entryProgress"
      height="6"
      :color="calculateColor"
      rounded
      class="mb-4"
    ></v-progress-linear>

    <!-- <v-progress-linear
      v-if="inputMode === 'entry'"
      :color="entryProgress === 100 ? 'success' : 'red'"
      :value="entryProgress"
      height="6"
      rounded
      class="mb-4"
    ></v-progress-linear> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    page: {
      default: 1,
      type: Number
    },
    inputMode: {
      default: 'form',
      type: String
    }
  },
  computed: {
    ...mapState({
      entryProgress: (state) => state.form.progress
    }),
    calculateColor() {
      // if (this.inputMode === 'form') {
      //   if (this.page === 4) {
      //     return 'success'
      //   } else {
      //     return 'red'
      //   }
      // } else if (this.entryProgress === 100) {
      //   return 'success'
      // } else {
      //   return 'red'
      // }

      if (this.inputMode === 'form') {
        return this.page === 4 ? 'success' : 'red'
      } else {
        return this.entryProgress === 100 ? 'success' : 'red'
      }
    }
  },
  methods: {}
}
</script>

<style></style>
