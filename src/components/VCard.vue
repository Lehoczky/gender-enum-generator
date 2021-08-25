<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  background: #282c34;
  box-shadow: 0 0 3px 0 #0000008c;
  border-radius: 2px;
  padding: 0.8rem;
  margin-bottom: 1rem;
}
</style>
