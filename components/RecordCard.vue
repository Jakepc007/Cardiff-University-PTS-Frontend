<template>
  <v-card
    class="record-card"
    max-width="344"
    outlined
    :raised="hover"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div>{{ r.title }}</div>
        <v-list-item-subtitle
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    r: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.record-card {
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
}
</style>
