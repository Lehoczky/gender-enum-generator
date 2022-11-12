<template>
  <main class="mx-auto w-[85%] max-w-[43.75rem]">
    <h1 class="my-8 text-center text-4xl font-medium">Gender Enum Generator</h1>

    <Card>
      <div class="row">
        <label for="language-select" class="w-24 pr-2.5 text-end">
          Language:
        </label>

        <VSelect
          id="language-select"
          v-model="selectedLanguage"
          :options="languages"
          placeholder="Select a language..."
        />
      </div>

      <div v-if="selectedLanguage" class="row">
        <label for="group-select" class="w-24 pr-2.5 text-end">Gender:</label>

        <VSelect
          id="group-select"
          v-model="selectedGroup"
          :options="genderGroups"
        />
      </div>
    </Card>

    <Card v-if="selectedLanguage">
      <div class="relative">
        <highlightjs :language="selectedLanguage" :code="code" />

        <CopyButton class="absolute top-0 right-0" @click="copy()">
          <Tooltip :show="copied">Copied</Tooltip>
        </CopyButton>
      </div>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { genderGroups } from "./genders"
import { languages } from "./languages"

useHead({
  htmlAttrs: {
    lang: "en-US",
  },
  title: "Gender Enum Generator",
  meta: [
    {
      name: "description",
      content:
        "Create ENUMs for every gender in different programming languages",
    },
  ],
  link: [
    {
      rel: "icon",
      href: "/gender-enum-generator/favicon.ico",
    },
  ],
  bodyAttrs: {
    class: "bg-base-700 font-roboto text-base-100",
  },
})

const selectedLanguage = ref<string>()
const selectedGroup = ref("Used by Facebook")

const code = computed(() => {
  if (!selectedLanguage.value) {
    return ""
  }
  const languageGenerator = languages.find(
    ({ name }) => name === selectedLanguage.value
  )
  const genders = genderGroups.find(({ name }) => name === selectedGroup.value)
  return languageGenerator.generateCode(genders.genders)
})

const { copy, copied } = useClipboard({ source: code, copiedDuring: 1000 })
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";

.row {
  @apply flex items-center;
}

.row:not(:last-child) {
  @apply mb-5;
}

pre code.hljs {
  @apply p-2;
}
</style>
