<template>
  <div class="container">
    <h1 v-if="$auth.loggedIn" class="mb-2">
      Welcome, {{ user.nickname }}.
      <v-btn @click="$auth.logout()">Logout</v-btn>
    </h1>
    <div v-else><v-btn @click="login">Login</v-btn></div>
    <Filters :records="records" />

    <h2>All Records</h2>
    <RecordList :records="records" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RecordList from '@/components/RecordList'
import Filters from '@/components/Filters'

export default {
  components: {
    RecordList,
    Filters
  },
  middleware: 'auth',
  async asyncData({ store, error }) {
    try {
      // await store.dispatch('alerts/fetchAlert')
      await store.dispatch('records/fetchRecords')
      await store.dispatch('records/findRecords')
    } catch (e) {
      // error({
      //   statusCode: 503,
      //   message: 'Unable to fetch any data from the server'
      // })
    }
  },
  data() {
    return {
      filterActive: false
    }
  },
  computed: {
    ...mapState({
      records: (state) => state.records.paged,
      recentRecord: (state) => state.records.recentRecord
    }),
    user() {
      return this.$auth.user
    }
    // recentRecord() {
    //   const recent = this.$store.state.records.recentRecord
    //   return recent
    // }
  },
  methods: {
    ...mapActions({ removeRecentDisplay: 'records/removeRecentDisplay' }),
    closeRecent() {
      this.removeRecentDisplay()
    },
    login() {
      this.$auth.loginWith('auth0')
      // .then(this.$router.push('/'))
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin-top: 3rem;

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
}

.checkbox {
  margin-bottom: 1rem;
}

.flex > div {
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 600;
  padding: 1rem;
}
</style>
