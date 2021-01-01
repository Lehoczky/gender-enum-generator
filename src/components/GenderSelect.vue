<template>
  <v-select
    :value="value"
    :options="genderGroups"
    :clearable="false"
    label="name"
    @input="$emit('input', $event)"
  ></v-select>
</template>

<script>
import genderGroups from "../genders";

export default {
  props: ["value"],
  data() {
    return { genderGroups };
  },
};
</script>

<style></style>
