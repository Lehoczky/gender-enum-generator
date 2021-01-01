<template>
  <v-select
    :value="value"
    :options="languages"
    :clearable="false"
    label="name"
    placeholder="Select a language..."
    @input="$emit('input', $event)"
  ></v-select>
</template>

<script>
import languages from "../languages";

export default {
  props: ["value"],
  data() {
    return { languages };
  },
};
</script>

<style></style>
