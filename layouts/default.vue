<template>
  <v-app>
    <Alert :alert="alert" />
    <nuxt class="app" />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Alert from '@/components/Alert'

export default {
  components: {
    Alert
  },
  // The fetch here, allows dispatching of VueX actions,
  // which then retrieve the most recent alert, and can
  // then plug that into the layout
  // async fetch({ store, error }) {
  //   try {
  //     await store.dispatch('alerts/fetchAlert')
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message: 'Unable to fetch events at this time'
  //     })
  //   }
  // },
  computed: {
    ...mapState({
      alert: (state) => state.alerts.alert
    })
  }
}
</script>

<style lang="scss" scoped>
/* This doesn't seem to do anything, but I will keep it for now... */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

.app {
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media only screen and (min-width: 900px) {
    width: 80%;
  }
}
</style>
