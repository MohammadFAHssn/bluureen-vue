<script setup>
const otp = ref("")
</script>

<template>
  <VOtpInput
    v-model="otp"
    autocomplete="on"
    type="password"
    length="5"
  />
</template>
