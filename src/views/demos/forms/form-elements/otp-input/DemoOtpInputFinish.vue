<script setup>
const loading = ref(false)
const snackbar = ref(false)
const snackbarColor = ref("default")
const otp = ref("")
const text = ref("")
const expectedOtp = ref("133707")

const onFinish = rsp => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    snackbarColor.value = rsp === expectedOtp.value ? "success" : "warning"
    text.value = `Processed OTP with "${rsp}" (${snackbarColor.value})`
    snackbar.value = true
  }, 3000)
}
</script>

<template>
  <div>
    <VOtpInput
      v-model="otp"
      :loading="loading"
      @finish="onFinish"
    />

    <div>
      Expected value: <span class="font-weight-bold">{{ expectedOtp }}</span>
    </div>

    <VSnackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="2000"
      location="top"
    >
      {{ text }}
    </VSnackbar>
  </div>
</template>
