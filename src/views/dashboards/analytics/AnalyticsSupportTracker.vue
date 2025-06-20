<script setup>
import { useTheme } from "vuetify"
import { hexToRgb } from "@layouts/utils"

const vuetifyTheme = useTheme()
const series = [85]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    labels: ["Completed Task"],
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: { size: "65%" },
        track: {
          background: currentTheme.surface,
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["disabled-opacity"]})`,
            fontSize: "13px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          },
          value: {
            offsetY: 10,
            color: `rgba(${hexToRgb(currentTheme["on-background"])},${variableTheme["high-emphasis-opacity"]})`,
            fontSize: "38px",
            fontWeight: "500",
            fontFamily: "Public Sans",
          },
        },
      },
    },
    colors: [currentTheme.primary],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.5,
        gradientToColors: [currentTheme.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: { dashArray: 10 },
    grid: {
      padding: {
        top: -20,
        bottom: 5,
      },
    },
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    responsive: [
      {
        breakpoint: 960,
        options: { chart: { height: 280 } },
      },
    ],
  }
})

const supportTicket = [
  {
    avatarColor: "primary",
    avatarIcon: "tabler-ticket",
    title: "New Tickets",
    subtitle: "142",
  },
  {
    avatarColor: "info",
    avatarIcon: "tabler-check",
    title: "Open Tickets",
    subtitle: "28",
  },
  {
    avatarColor: "warning",
    avatarIcon: "tabler-clock",
    title: "Response Time",
    subtitle: "1 Day",
  },
]

const moreList = [
  {
    title: "View More",
    value: "View More",
  },
  {
    title: "Delete",
    value: "Delete",
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Support Tracker</VCardTitle>
      <VCardSubtitle>Last 7 Days</VCardSubtitle>

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
      <VRow>
        <VCol
          cols="12"
          lg="4"
          md="4"
        >
          <div class="mb-lg-6 mb-4 mt-2">
            <h2 class="text-h2">
              164
            </h2>
            <p class="text-base mb-0">
              Total Tickets
            </p>
          </div>

          <VList class="card-list">
            <VListItem
              v-for="ticket in supportTicket"
              :key="ticket.title"
            >
              <VListItemTitle class="font-weight-medium">
                {{ ticket.title }}
              </VListItemTitle>
              <VListItemSubtitle>
                {{ ticket.subtitle }}
              </VListItemSubtitle>
              <template #prepend>
                <VAvatar
                  rounded
                  size="34"
                  :color="ticket.avatarColor"
                  variant="tonal"
                  class="me-1"
                >
                  <VIcon
                    size="22"
                    :icon="ticket.avatarIcon"
                  />
                </VAvatar>
              </template>
            </VListItem>
          </VList>
        </VCol>
        <VCol
          cols="12"
          lg="8"
          md="8"
        >
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="360"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
