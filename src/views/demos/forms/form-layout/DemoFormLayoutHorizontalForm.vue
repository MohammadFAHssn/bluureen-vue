<script setup>
const firstName = ref("")
const email = ref("")
const mobile = ref()
const password = ref()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
