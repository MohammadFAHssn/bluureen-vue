<script setup>
const isDialogVisible = ref(false)
</script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake
        shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie
        fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears
        muffin pudding caramels. Jujubes lollipop gummies croissant shortbread.
        Cupcake dessert marzipan topping gingerbread apple pie chupa chups
        powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
