<script setup>
import { useTheme } from "vuetify"
import { hexToRgb } from "@layouts/utils"

const vuetifyTheme = useTheme()

const series = [
  {
    data: [40, 65, 50, 45, 90, 55, 70],
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    chart: {
      parentHeightOffset: 0,
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        barHeight: "60%",
        columnWidth: "38%",
        startingShape: "rounded",
        endingShape: "rounded",
        borderRadius: 4,
        distributed: true,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        bottom: 0,
        left: -10,
        right: -10,
      },
    },
    colors: [
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
      `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
      `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`,
    ],
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["disabled-opacity"]})`,
          fontSize: "13px",
          fontFamily: "Public Sans",
        },
      },
    },
    yaxis: { labels: { show: false } },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 1025,
        options: { chart: { height: 199 } },
      },
    ],
  }
})

const earningsReports = [
  {
    color: "primary",
    icon: "tabler-currency-dollar",
    title: "Earnings",
    amount: "$545.69",
    progress: "55",
  },
  {
    color: "info",
    icon: "tabler-chart-pie-2",
    title: "Profit",
    amount: "$256.34",
    progress: "25",
  },
  {
    color: "error",
    icon: "tabler-brand-paypal",
    title: "Expense",
    amount: "$74.19",
    progress: "65",
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
    <VCardItem class="pb-sm-0">
      <VCardTitle>Earning Reports</VCardTitle>
      <VCardSubtitle>Weekly Earnings Overview</VCardSubtitle>

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
          sm="5"
          lg="6"
          class="d-flex flex-column align-self-center"
        >
          <div class="d-flex align-center gap-2 mb-3 flex-wrap">
            <h2 class="text-h2">
              $468
            </h2>
            <VChip
              label
              size="small"
              color="success"
            >
              +4.2%
            </VChip>
          </div>

          <span class="text-sm text-medium-emphasis">
            You informed of this week compared to last week
          </span>
        </VCol>

        <VCol
          cols="12"
          sm="7"
          lg="6"
        >
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="161"
          />
        </VCol>
      </VRow>

      <div class="border rounded mt-5 pa-5">
        <VRow>
          <VCol
            v-for="report in earningsReports"
            :key="report.title"
            cols="12"
            sm="4"
          >
            <div class="d-flex align-center">
              <VAvatar
                rounded
                size="26"
                :color="report.color"
                variant="tonal"
                class="me-2"
              >
                <VIcon
                  size="18"
                  :icon="report.icon"
                />
              </VAvatar>

              <h6 class="text-base font-weight-regular">
                {{ report.title }}
              </h6>
            </div>
            <h6 class="text-h4 my-2">
              {{ report.amount }}
            </h6>
            <VProgressLinear
              :model-value="report.progress"
              :color="report.color"
              height="4"
              rounded
              rounded-bar
            />
          </VCol>
        </VRow>
      </div>
    </VCardText>
  </VCard>
</template>
