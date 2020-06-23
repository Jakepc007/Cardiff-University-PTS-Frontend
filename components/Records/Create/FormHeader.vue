<template>
  <div>
    <h3
      v-if="inputMode === 'form'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem"
    >
      <!-- Step <span style="color: red">{{ page }}</span> | -->
      <MiniHeader
        v-if="page === 1"
        large
        title="Details"
        icon="mdi-form-select"
      />
      <MiniHeader
        v-if="page === 2"
        large
        title="People"
        icon="mdi-account-multiple"
      />
      <MiniHeader
        v-if="page === 3"
        large
        title="Date and time"
        icon="mdi-clock"
      />
      <MiniHeader v-if="page === 4" large title="Pricing" icon="mdi-cash" />
    </h3>

    <h3
      v-if="inputMode === 'entry'"
      class="-mt-2 mb-2 text-h6 font-weight-bold"
      style="margin-top: -2rem;"
    >
      Enter your application details below
      <v-icon v-if="progress === 100" color="success" class="mr-1">
        mdi-check
      </v-icon>
    </h3>
  </div>
</template>

<script>
import MiniHeader from '@/components/Records/Create/MiniHeader'

export default {
  components: {
    MiniHeader
  },
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
    progress() {
      return this.$store.state.form.progress
    }
  }
}
</script>

<style>
.brand-intro {
  @media only screen and (max-width: 500px) {
    display: none;
  }
}
</style>
