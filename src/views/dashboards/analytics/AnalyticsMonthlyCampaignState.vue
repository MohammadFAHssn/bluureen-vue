<script setup>
const monthlyCampaignState = [
  {
    avatarColor: "success",
    avatarIcon: "tabler-mail",
    title: "Emails",
    count: "12,346",
    stats: "0.3%",
    statsColor: "success",
  },
  {
    avatarColor: "info",
    avatarIcon: "tabler-link",
    title: "Opened",
    count: "8,734",
    stats: "2.1%",
    statsColor: "success",
  },
  {
    avatarColor: "warning",
    avatarIcon: "tabler-mouse",
    title: "Clicked",
    count: "967",
    stats: "1.4%",
    statsColor: "error",
  },
  {
    avatarColor: "primary",
    avatarIcon: "tabler-users",
    title: "Subscribe",
    count: "345",
    stats: "8.5%",
    statsColor: "success",
  },
  {
    avatarColor: "secondary",
    avatarIcon: "tabler-alert-triangle",
    title: "Complaints",
    count: "10",
    stats: "1.5%",
    statsColor: "error",
  },
  {
    avatarColor: "error",
    avatarIcon: "tabler-ban",
    title: "Unsubscribe",
    count: "86",
    stats: "0.8%",
    statsColor: "success",
  },
]

const moreList = [
  {
    title: "Refresh",
    value: "refresh",
  },
  {
    title: "Download",
    value: "Download",
  },
  {
    title: "View All",
    value: "View All",
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Monthly Campaign State</VCardTitle>
      <VCardSubtitle> 8.52k Social Visitors </VCardSubtitle>
      <template #append>
        <div class="mt-n4 me-n2">
          <MoreBtn
            size="small"
            :menu-list="moreList"
          />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="state in monthlyCampaignState"
          :key="state.title"
        >
          <template #prepend>
            <VAvatar
              :color="state.avatarColor"
              variant="tonal"
              size="34"
              rounded
              class="me-1"
            >
              <VIcon
                :icon="state.avatarIcon"
                size="22"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium me-4">
            {{ state.title }}
          </VListItemTitle>

          <template #append>
            <div class="d-flex gap-x-4">
              <div class="text-body-1">
                {{ state.count }}
              </div>
              <div :class="`text-${state.statsColor}`">
                {{ state.stats }}
              </div>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.5rem;
}
</style>
