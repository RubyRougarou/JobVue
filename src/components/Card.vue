<script setup>
defineProps({
  bg: { type: String, default: "bg-gray-100" },
});
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
    <!-- can be used as a self closing tag -->
  </div>
</template>
