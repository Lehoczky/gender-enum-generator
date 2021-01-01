<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: #282c34;
  box-shadow: 0px 0px 3px 0px #0000008c;
  border-radius: 2px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>