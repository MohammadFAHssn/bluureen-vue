<script setup>
const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(["update:formData"])

const formData = ref(props.formData)

const offeredItems = [
  "iPhone 12 Pro Max",
  "iPhone 12 Pro",
  "iPhone 11 Pro Max",
  "iPhone 11",
  "iPhone 12 Mini",
  "OnePlus Nord CE",
]

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
        <AppTextField
          v-model="formData.title"
          label="Deal Title"
          placeholder="Black Friday Sale, 50% off on all products"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppTextField
          v-model="formData.code"
          label="Deal Code"
          placeholder="BLACKFRIDAY50"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppTextarea
          v-model="formData.description"
          label="Deal Description"
          placeholder="Write something about this deal"
          rows="5"
          auto-grow
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VRow>
          <VCol cols="12">
            <AppSelect
              v-model="formData.offeredUItems"
              multiple
              chips
              label="Offered Items"
              placeholder="Select Offered Items"
              :items="offeredItems"
            />
          </VCol>

          <VCol cols="12">
            <AppSelect
              v-model="formData.cartCondition"
              label="Cart Condition"
              placeholder="Select Cart Condition"
              :items="[
                'Cart must contain all selected Downloads',
                'Cart needs one or more of the selected Downloads',
              ]"
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppDateTimePicker
          v-model="formData.dealDuration"
          label="Deal Duration"
          placeholder="Select Date Range"
          :config="{ mode: 'range' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <h6 class="text-body-2 text-high-emphasis mb-2">
          Notify Users
        </h6>

        <div class="d-flex align-center flex-wrap gap-x-3">
          <VCheckbox
            v-model="formData.notification.email"
            label="Email"
            value="email"
          />
          <VCheckbox
            v-model="formData.notification.sms"
            label="SMS"
            value="sms"
          />
          <VCheckbox
            v-model="formData.notification.pushNotification"
            label="Push Notification"
            value="push-notification"
          />
        </div>
      </VCol>
    </VRow>
  </VForm>
</template>
