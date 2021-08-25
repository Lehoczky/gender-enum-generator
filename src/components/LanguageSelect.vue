<template>
  <v-select
    :value="value"
    :options="languages"
    :clearable="false"
    label="name"
    placeholder="Select a language..."
    @input="$emit('input', $event)"
  />
</template>

<script>
import languages from "../languages"

export default {
  props: {
    value: { type: Object, required: true },
  },
  data() {
    return { languages }
  },
}
</script>
