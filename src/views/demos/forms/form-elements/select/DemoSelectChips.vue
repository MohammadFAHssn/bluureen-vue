<script setup>
const items = ["foo", "bar", "fizz", "buzz"]

const selected = ref(["foo", "bar", "fizz", "buzz"])
</script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
