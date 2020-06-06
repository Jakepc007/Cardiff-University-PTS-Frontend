<template>
  <div>
    <Alert :alert="alert" />
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  layout: 'default_demo',
  components: {
    Alert
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3001/event')
      return {
        alert: data.name
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
