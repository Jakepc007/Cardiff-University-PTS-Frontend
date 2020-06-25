<template>
  <v-lazy transition="scroll-y-transition">
    <v-card class="alert" :class="alert.level" tile flat>
      {{ alert.alert }}.
      <span>
        Please provide feedback for us
        <span class="feedback-prompt">here</span></span
      >
    </v-card>
  </v-lazy>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      default() {
        return {
          id: 2,
          alert: 'Danger text',
          level: 'danger'
        }
      }
    }
  }
}
</script>

<style scoped>
.alert {
  width: 100%;
  padding: 0.25rem;
  font-weight: 600;
  text-align: center;
}

.info {
  background: rgb(95, 95, 255);
  color: white;
}

.feedback {
  background: rgb(255, 197, 88);
  color: rgb(141, 97, 15);
}

.RED {
  background: rgb(255, 91, 91);
  color: white;
}

.BLUE {
  background: rgb(56, 53, 255);
  color: white;
}

.YELLOW {
  background: yellow;
  color: black;
}

.feedback-prompt {
  font-weight: 600;
  text-decoration-line: underline;
  text-decoration-thickness: 0.2rem;
}
</style>
