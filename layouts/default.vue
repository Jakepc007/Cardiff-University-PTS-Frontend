<template>
  <v-app class="layout">
    <NavBar />
    <Alert :alert="alert" />
    <v-lazy transition="scroll-x-transition">
      <transition name="fade" mode="in-out" transition="scroll-x-transition">
        <nuxt class="app" />
      </transition>
    </v-lazy>

    <!-- Changes everything to scroll in from the left automatically -->
    <!-- <v-lazy transition="scroll-y-transition">
      <nuxt class="app" />
    </v-lazy> -->
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
      //   await store.dispatch('records/fetchRecords')
      //   await store.dispatch('records/findRecords')
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

.fade-enter {
  opacity: 0;
  // filter: blur(200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
  // transition: filter 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.v-application--wrap {
  background: #fafafa;
}
</style>
