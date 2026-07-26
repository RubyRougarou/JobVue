<script setup>
import { onMounted, reactive, toRaw } from "vue";
import { RouterLink } from "vue-router";

import axios from "axios";
import { PulseLoader } from "vue-spinner";
import "vue-spinner/style.css";

import JobListing from "./JobListing.vue";

const jobsState = reactive({
  jobs: [],
  isLoading: true,
});
// to log reactives we must use toRaw() method imported from vue
// console.log(toRaw(jobs));

onMounted(async () => {
  try {
    const response = await axios.get("/api/jobs");
    jobsState.jobs = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    jobsState.isLoading = false;
  }
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="jobsState.isLoading" class="text-center">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!--        <div v-for="job in jobs.jobs" :key="job.id">-->
        <!--          {{ job.title }}-->
        <!--        </div>-->
        <JobListing
          v-for="job in jobsState.jobs.slice(0, limit || jobsState.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
