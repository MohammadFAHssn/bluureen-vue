<script setup>
const value = ref(
  "Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.",
)
</script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
