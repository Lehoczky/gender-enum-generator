<template>
  <div
    class="absolute -top-9 right-1/2 translate-x-1/2 translate-y-0.5 rounded bg-black bg-opacity-70 px-2 py-0.5 text-base-100 opacity-0 transition duration-200 ease-in-out"
    :class="{
      '!translate-y-0 !opacity-100': show,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
</script>
