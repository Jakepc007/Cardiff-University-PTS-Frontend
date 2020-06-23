<template>
  <div>
    <div class="record-display">
      <nuxt-link to="/records">
        <MiniHeader large title="Back" icon="mdi-arrow-left"
      /></nuxt-link>

      <MiniHeader class="mt-8" large title="Details" icon="mdi-form-select" />
      <v-divider class="my-3"></v-divider>
      <KeyAndValue heading="Title" :value="record.title" />
      <KeyAndValue heading="Description" :value="record.description" />
      <KeyAndValue heading="Status" :value="record.status" />
      <KeyAndValue heading="Scheme" :value="record.scheme" />
      <KeyAndValue
        heading="Required Facility"
        :value="record['required facility']"
      />
      <KeyAndValue heading="Comments" :value="record.comments" />

      <MiniHeader
        class="mt-8"
        large
        title="People"
        icon="mdi-account-multiple"
      />
      <v-divider class="my-3"></v-divider>
      <KeyAndValue
        heading="Principal Investigator"
        :value="record['principal investigator']"
      />
      <KeyAndValue
        heading="Co-Investigators"
        :value="record['co-investigator']"
        aggeragate
      />
      <KeyAndValue heading="Partners" :value="record.partners" />
      <KeyAndValue heading="Research Group" :value="record['research group']" />

      <MiniHeader class="mt-8" large title="Date and time" icon="mdi-clock" />
      <v-divider class="my-3"></v-divider>
      <KeyAndValue
        heading="Estimated Submission Date"
        :value="record['estimated submission date']"
      />
      <KeyAndValue
        heading="Estimated Start Date"
        :value="record['estimated start date']"
      />
      <KeyAndValue
        heading="Estimated Duration"
        :value="record['estimated duration']"
      />
      <KeyAndValue
        heading="Estimated Submission Date"
        :value="record['estimated submission date']"
      />
      <KeyAndValue
        heading="Estimated End Date"
        :value="record['estimated end date']"
      />

      <MiniHeader class="mt-8" large title="Pricing" icon="mdi-cash" />
      <v-divider class="my-3"></v-divider>
      <KeyAndValue gray heading="Funder" :value="record['funder']" />
      <KeyAndValue
        heading="Requested Amount"
        :value="record['requested amount']"
      />
      <KeyAndValue
        heading="Estimated Engin Amount"
        :value="record['estimated engin amount']"
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
