<script setup>
import { VForm } from "vuetify/components/VForm"

const name = ref()
const email = ref()
const refForm = ref()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="
            isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
          "
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          autocomplete="confirm-password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[
            requiredValidator,
            confirmedValidator(confirmPassword, password),
          ]"
          @click:append-inner="
            isConfirmPasswordVisible = !isConfirmPasswordVisible
          "
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
