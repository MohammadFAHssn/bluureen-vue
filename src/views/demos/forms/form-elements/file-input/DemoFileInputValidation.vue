<script setup>
const rules = [
  fileList =>
    !fileList ||
    !fileList.length ||
    fileList[0].size < 1000000 ||
    "Avatar size should be less than 1 MB!",
]
</script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
