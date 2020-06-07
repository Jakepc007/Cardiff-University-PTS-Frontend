<template>
  <div>
    <Alert :alert="alert" />
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  layout: 'default',
  components: {
    Alert
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3000/alert')
      return {
        alert: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  }
}
</script>
