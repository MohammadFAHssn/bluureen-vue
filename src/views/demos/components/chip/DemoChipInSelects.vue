<script setup>
const chips = ref(["Programming", "Playing games", "Sleeping"])

const items = ref([
  "Streaming",
  "Eating",
  "Programming",
  "Playing games",
  "Sleeping",
])
</script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
