<script setup>
const select = ref(["Vuetify", "Programming"])

const items = ["Programming", "Design", "Vue", "Vuetify"]
</script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
