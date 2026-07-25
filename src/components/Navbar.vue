<script setup>
import logo from "../assets/images/logo.png";
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <a class="flex items-center shrink-0 mr-4" href="/">
            <img :src="logo" alt="Vue Job" class="w-auto h-10" />
            <span class="ml-2 text-2xl font-bold text-white hidden md:block"
              >Vue Job</span
            >
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <a
                href="/"
                class="text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition ease-in delay-100"
                >Home</a
              >
              <a
                href="jobs.html"
                class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2 transition ease-in delay-75"
                >Jobs</a
              >
              <a
                href="add-job.html"
                class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2 transition ease-in delay-75"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
