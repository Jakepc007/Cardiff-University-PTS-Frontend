<template>
  <v-content>
    <Alert />
    <nuxt />
  </v-content>
</template>

<script>
import Alert from '~/components/Alert.vue'

export default {
  components: {
    Alert
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
