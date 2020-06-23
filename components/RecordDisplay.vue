<template>
  <div>
    <div class="record-display">
      <nuxt-link to="/records">
        <MiniHeader large title="Back" icon="mdi-arrow-left"
      /></nuxt-link>

      <MiniHeader center large title="Details" icon="mdi-form-select" />
      <KeyAndValue heading="Title" :value="record.title" />
      <KeyAndValue heading="Description" :value="record.description" />
      <KeyAndValue heading="Status" :value="record.status" />
      <KeyAndValue heading="Scheme" :value="record.scheme" />
      <KeyAndValue
        heading="Required Facility"
        :value="record['required facility']"
      />
      <KeyAndValue heading="Comments" :value="record.comments" />

      <v-divider class="my-3"></v-divider>

      <MiniHeader center large title="People" icon="mdi-account-multiple" />
      <KeyAndValue
        heading="Principal Investigator"
        :value="record['principal investigator']"
      />
      <KeyAndValue
        heading="Co-Investigators"
        :value="record['co-investigator']"
        aggeragate
      />
    </div>
  </div>
</template>

<script>
import MiniHeader from '@/components/Records/Create/MiniHeader'
import KeyAndValue from '@/components/Records/Create/KeyAndValue'

export default {
  components: { MiniHeader, KeyAndValue },
  props: {
    record: {
      default() {},
      type: Object
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.record-display {
  width: 90%;
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 6rem;

  @media only screen and (min-width: 900px) {
    width: 80%;
  }
}
</style>
