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
        <!-- 👉 Total Area -->
        <AppTextField
          v-model="formData.totalArea"
          label="Total Area"
          suffix="sq-ft"
          type="number"
          placeholder="1000"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Carpet Area -->
        <AppTextField
          v-model="formData.carpetArea"
          label="Carpet Area"
          suffix="sq-ft"
          type="number"
          placeholder="800"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Plot Area -->
        <AppTextField
          v-model="formData.plotArea"
          label="Plot Area"
          suffix="sq-ft"
          type="number"
          placeholder="800"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Available From -->
        <AppDateTimePicker
          v-model="formData.availableFrom"
          label="Available From"
          type="date"
          placeholder="Select Date"
          format="YYYY-MM-DD"
        />
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Possession Status -->
        <VRadioGroup v-model="formData.possessionStatus">
          <template #label>
            <div class="text-body-1">
              Possession Status
            </div>
          </template>
          <VRadio
            value="Under Construciton"
            label="Under Construction"
          />
          <VRadio
            value="Ready to Move"
            label="Ready to Move"
          />
        </VRadioGroup>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Transaction Type -->
        <VRadioGroup v-model="formData.transactionType">
          <template #label>
            <div class="text-body-1">
              Transaction Type
            </div>
          </template>
          <VRadio
            value="New Property"
            label="New Property"
          />
          <VRadio
            value="Resale"
            label="Resale"
          />
        </VRadioGroup>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 property Location -->
        <VRadioGroup v-model="formData.isOnMainRoad">
          <template #label>
            <div class="text-body-1">
              Is Property Facing Main Road?
            </div>
          </template>
          <VRadio
            value="Yes"
            label="Yes"
          />
          <VRadio
            value="No"
            label="No"
          />
        </VRadioGroup>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Gated Colony -->
        <VRadioGroup v-model="formData.isGatedColony">
          <template #label>
            <div class="text-body-1">
              Gated Colony
            </div>
          </template>
          <VRadio
            value="Yes"
            label="Yes"
          />
          <VRadio
            value="No"
            label="No"
          />
        </VRadioGroup>
      </VCol>
    </VRow>
  </VForm>
</template>
