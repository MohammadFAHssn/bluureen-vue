<script setup>
import diamond from "@images/svg/Diamond.svg"
import office from "@images/svg/office.svg"
import suitcase from "@images/svg/Suitcase.svg"

const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(["update:formData"])

const propertyRadioContent = [
  {
    title: "I am the builder",
    desc: "List property as Builder, list your project and get highest reach fast.",
    icon: {
      icon: office,
      size: "28",
    },
    value: "builder",
  },
  {
    title: "I am the owner",
    desc: "Submit property as an Individual. Lease, Rent or Sell at the best price.",
    icon: {
      icon: diamond,
      size: "28",
    },
    value: "owner",
  },
  {
    title: "I am the broker",
    desc: "Earn highest commission by listing your clients properties at best price.",
    value: "broker",
    icon: {
      icon: suitcase,
      size: "28",
    },
  },
]

const formData = ref(props.formData)

watch(formData, () => {
  emit("update:formData", formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol cols="12">
        <!-- 👉 User Type  -->
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.userType"
          :radio-content="propertyRadioContent"
          :grid-column="{ cols: '12', sm: '4' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 First Name -->
        <AppTextField
          v-model="formData.firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Last Name -->
        <AppTextField
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Username -->
        <AppTextField
          v-model="formData.username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Password -->
        <AppTextField
          v-model="formData.password"
          autocomplete="on"
          type="password"
          label="Password"
          placeholder="············"
          append-inner-icon="tabler-eye"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Email -->
        <AppTextField
          v-model="formData.email"
          type="email"
          label="Email"
          placeholder="john.doe@email.com"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Contact -->
        <AppTextField
          v-model="formData.contact"
          type="number"
          label="Contact"
          placeholder="+1 123 456 7890"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
