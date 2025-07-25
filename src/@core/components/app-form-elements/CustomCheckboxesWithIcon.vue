<script setup>
const props = defineProps({
  selectedCheckbox: {
    type: Array,
    required: true,
  },
  checkboxContent: {
    type: Array,
    required: true,
  },
  gridColumn: {
    type: null,
    required: false,
  },
})

const emit = defineEmits(["update:selectedCheckbox"])

const updateSelectedOption = value => {
  if (typeof value !== "boolean" && value !== null)
    emit("update:selectedCheckbox", value)
}
</script>

<template>
  <VRow
    v-if="props.checkboxContent && props.selectedCheckbox"
    class="custom-input-wrapper"
  >
    <VCol
      v-for="item in props.checkboxContent"
      :key="item.title"
      v-bind="gridColumn"
    >
      <VLabel
        class="custom-input custom-checkbox-icon rounded cursor-pointer"
        :class="props.selectedCheckbox.includes(item.value) ? 'active' : ''"
      >
        <slot :item="item">
          <div class="d-flex flex-column align-center text-center gap-2">
            <VIcon
              v-bind="item.icon"
              class="text-high-emphasis"
            />

            <h6 class="cr-title text-base">
              {{ item.title }}
            </h6>
            <p class="text-sm clamp-text mb-0">
              {{ item.desc }}
            </p>
          </div>
        </slot>
        <div>
          <VCheckbox
            :model-value="props.selectedCheckbox"
            :value="item.value"
            @update:model-value="updateSelectedOption"
          />
        </div>
      </VLabel>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.custom-checkbox-icon {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .v-checkbox {
    margin-block-end: -0.375rem;

    .v-selection-control__wrapper {
      margin-inline-start: 0;
    }
  }

  .cr-title {
    font-weight: 500;
    line-height: 1.375rem;
  }
}
</style>

<style lang="scss">
.custom-checkbox-icon {
  .v-checkbox {
    margin-block-end: -0.375rem;

    .v-selection-control__wrapper {
      margin-inline-start: 0;
    }
  }
}
</style>
