<script setup>
import congoImg from "@images/illustrations/congo-illustration.png"
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText>
          <h5 class="text-h5 text-no-wrap">
            Congratulations John! 🎉
          </h5>
          <p class="mb-3">
            Best seller of the month
          </p>
          <h4 class="text-h4 text-primary mb-1">
            $48.9k
          </h4>
          <VBtn>View Sales</VBtn>
        </VCardText>
      </VCol>

      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            height="147"
            class="congo-john-img w-100"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.congo-john-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 1.25rem;
}
</style>
