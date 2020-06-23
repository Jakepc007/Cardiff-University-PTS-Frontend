<template>
  <v-app class="layout">
    <NavBar />
    <Alert :alert="alert" />
    <v-lazy transition="scroll-x-transition">
      <transition name="fade" mode="out-in" transition="scroll-x-transition">
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
  data() {
    return {}
  },
  computed: {
    ...mapState({
      alert: (state) => state.alerts.alert
    })
  },
  created() {
    this.$store.dispatch('alerts/fetchAlert', {
      perPage: this.perPage,
      page: this.page
    })
  }
}
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
  // filter: blur(200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
  // transition: filter 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.v-application--wrap {
  background: #fafafa;
}
</style>
