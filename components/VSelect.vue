<template>
  <div class="relative w-full">
    <Listbox
      v-slot="{ open }"
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
    >
      <ListboxButton
        :id="id"
        class="flex w-full items-center justify-between rounded bg-base-300 px-3.5 py-1 text-left"
      >
        <div>
          {{ modelValue ? modelValue : placeholder }}
        </div>

        <div class="h-5 w-5">
          <ChevronUpIcon v-if="open" />
          <ChevronDownIcon v-else />
        </div>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 max-h-60 w-full overflow-hidden rounded-b-md bg-base-300 pb-1 shadow-[0_3px_6px_0_#00000026]"
        >
          <ListboxOption
            v-for="{ name } in options"
            :key="name"
            v-slot="{ active }"
            class="px-4 py-1"
            :value="name"
            as="template"
          >
            <li
              class="cursor-pointer text-base-100"
              :class="{
                'bg-base-200 ': active,
              }"
            >
              {{ name }}
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid"

defineProps<{
  id: string
  modelValue?: string | undefined
  options: Array<{ name: string }>
  placeholder?: string
}>()

defineEmits<{
  (event: "update:model-value", value: string): void
}>()
</script>
