<script setup>
const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(["update:formData"])

const formData = ref(props.formData)

watch(formData, () => {
  emit("update:formData", formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Expected Price  -->
        <AppTextField
          v-model="formData.expectedPrice"
          label="Expected Price"
          type="number"
          append-inner-icon="tabler-currency-dollar"
          placeholder="25,000"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Price Per SQFT  -->
        <AppTextField
          v-model="formData.pricePerSqft"
          label="Price Per SQFT"
          append-inner-icon="tabler-currency-dollar"
          type="number"
          placeholder="500"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Maintenance Charge  -->
        <AppTextField
          v-model="formData.maintenanceCharge"
          label="Maintenance Charge"
          append-inner-icon="tabler-currency-dollar"
          type="number"
          placeholder="50"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Maintenance Period  -->
        <AppSelect
          v-model="formData.maintenancePeriod"
          label="Maintenance"
          placeholder="Select Maintenance Period"
          :items="['Monthly', 'Quarterly', 'Half Yearly', 'Yearly']"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Booking/Token Amount  -->
        <AppTextField
          v-model="formData.bookingAmount"
          label="Booking/Token Amount"
          append-inner-icon="tabler-currency-dollar"
          type="number"
          placeholder="250"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Other Amount  -->
        <AppTextField
          v-model="formData.otherAmount"
          label="Other Amount"
          append-inner-icon="tabler-currency-dollar"
          type="number"
          placeholder="500"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Show Price As  -->
        <VRadioGroup v-model="formData.priceDisplayType">
          <template #label>
            <div class="text-body-1">
              Show Price As
            </div>
          </template>
          <VRadio
            label="Negotiable"
            value="Negotiable"
          />
          <VRadio
            label="Call For Price"
            value="Call For Price"
          />
        </VRadioGroup>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Price Includes  -->
        <div class="text-body-1 mb-2">
          Price Includes
        </div>
        <VCheckbox
          v-model="formData.priceIncludes"
          label="Car Parking"
          value="Car Parking"
        />
        <VCheckbox
          v-model="formData.priceIncludes"
          label="Club Membership"
          value="Club Membership"
        />
      </VCol>
      <VCol cols="12">
        <!-- 👉 Registration Charges -->
        <VCheckbox label="Stamp Duty & Registration charges excluded." />
      </VCol>
    </VRow>
  </VForm>
</template>
