<script setup>
import home from "@images/svg/home.svg"
import wallet from "@images/svg/Wallet.svg"

const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(["update:formData"])

const radioContent = [
  {
    title: "Sell the property",
    desc: "Post your property for sale. Unlimited free listing.",
    icon: {
      icon: home,
      size: "28",
    },
    value: "sell",
  },
  {
    title: "Rent the property",
    desc: "Post your property for rent. Unlimited free listing.",
    icon: {
      icon: wallet,
      size: "28",
    },
    value: "rent",
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
        <!-- 👉 Property Deal Type  -->
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.propertyDealType"
          :radio-content="radioContent"
          :grid-column="{ cols: '12', sm: '6' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Property Type -->
        <AppSelect
          v-model="formData.propertyType"
          label="Property type"
          placeholder="Select Property Type"
          :items="['Residential', 'Commercial']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Zip Code -->
        <AppTextField
          v-model="formData.zipCode"
          label="Zip Code"
          type="number"
          placeholder="123456"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Country -->
        <AppSelect
          v-model="formData.country"
          label="Country"
          placeholder="Select country"
          :items="['India', 'UK', 'USA', 'AUS', 'Germany']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 State -->
        <AppTextField
          v-model="formData.state"
          label="State"
          placeholder="California"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 City -->
        <AppTextField
          v-model="formData.city"
          label="City"
          placeholder="Los Angeles"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Landmark -->
        <AppTextField
          v-model="formData.landmark"
          label="Landmark"
          placeholder="Nr. Hard Rock Cafe"
        />
      </VCol>

      <VCol>
        <!-- 👉 Address -->
        <AppTextarea
          v-model="formData.address"
          label="Address"
          placeholder="112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068"
          rows="3"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
