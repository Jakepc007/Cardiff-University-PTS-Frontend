<template>
  <v-app class="layout">
    <NavBar />
    <Alert :alert="alert" />
    <nuxt class="app" />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Alert from '@/components/Alert'
import NavBar from '@/components/NavBar'

export default {
  components: {
    Alert,
    NavBar
  },
  // The fetch here, allows dispatching of VueX actions,
  // which then retrieve the most recent alert, and can
  // then plug that into the layout
  async fetch({ store, error }) {
    try {
      await store.dispatch('alerts/fetchAlert')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the alert'
      })
    }
  },
  computed: {
    ...mapState({
      alert: (state) => state.alerts.alert
    })
  }
}
</script>

<style lang="scss">
.container {
  padding: 2px;
}

.v-application--wrap {
  background: #fafafa;
}
</style>
