<script setup>
const items = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]
</script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
