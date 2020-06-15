<template>
  <div>
    <v-pagination
      v-model="page"
      :length="pageCount"
      circle
      @input="onChange"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    page: {
      default: 1,
      type: Number
    }
  },
  computed: {
    ...mapState({
      filteredLength: (state) => state.records.filtered.length
    }),
    pageCount() {
      // Returns the page count
      return Math.floor((this.filteredLength - 1) / 5) + 1
    }
  },
  methods: {
    onChange() {
      this.$store.dispatch('records/updatePage', this.page)
    }
  }
}
</script>

<style></style>
