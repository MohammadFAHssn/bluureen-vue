<script setup>
const selectedItem = ref("Programming")

const items = ["Programming", "Design", "Vue", "Vuetify"]
</script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
