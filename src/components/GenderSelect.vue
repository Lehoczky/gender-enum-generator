<template>
  <v-select
    :value="value"
    :options="genderGroups"
    :clearable="false"
    label="name"
    @input="$emit('input', $event)"
  />
</template>

<script>
import genderGroups from "../genders"

export default {
  props: {
    value: { type: Object, required: true },
  },
  data() {
    return { genderGroups }
  },
}
</script>
