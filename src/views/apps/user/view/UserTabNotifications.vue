<script setup>
const notifications = ref([
  {
    type: "New for you",
    email: true,
    browser: false,
    app: false,
  },
  {
    type: "Account activity",
    email: false,
    browser: true,
    app: true,
  },
  {
    type: "A new browser used to sign in",
    email: true,
    browser: true,
    app: true,
  },
  {
    type: "A new device is linked",
    email: false,
    browser: true,
    app: false,
  },
])
</script>

<template>
  <VCard
    class="user-tab-notification"
    title="Notifications"
    subtitle="You will receive notification for the below selected items."
  >
    <VCardText class="px-0">
      <VDivider />
      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">
              TYPE
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              BROWSER
            </th>
            <th scope="col">
              APP
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="notification in notifications"
            :key="notification.type"
          >
            <td class="text-high-emphasis">
              {{ notification.type }}
            </td>
            <td>
              <VCheckbox v-model="notification.email" />
            </td>
            <td>
              <VCheckbox v-model="notification.browser" />
            </td>
            <td>
              <VCheckbox v-model="notification.app" />
            </td>
          </tr>
        </tbody>
      </VTable>
      <VDivider />
    </VCardText>

    <VCardText class="d-flex flex-wrap gap-4">
      <VBtn>Save changes</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Discard
      </VBtn>
    </VCardText>
  </VCard>
</template>
