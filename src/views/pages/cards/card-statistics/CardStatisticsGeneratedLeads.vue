<script setup>
import { useTheme } from "vuetify"
import { hexToRgb } from "@layouts/utils"

const vuetifyTheme = useTheme()

const series = [45, 58, 30, 50]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const labelSuccessColor = `rgba(${hexToRgb(currentTheme.success)},0.2)`
  const headingColor = `rgba(${hexToRgb(currentTheme["on-background"])},${variableTheme["high-emphasis-opacity"]})`

  const chartColors = {
    donut: {
      series1: currentTheme.success,
      series2: "#28c76fb3",
      series3: "#28c76f80",
      series4: labelSuccessColor,
    },
  }

  return {
    chart: {
      parentHeightOffset: 0,
      type: "donut",
    },
    labels: ["Electronic", "Sports", "Decor", "Fashion"],
    colors: [
      chartColors.donut.series1,
      chartColors.donut.series2,
      chartColors.donut.series3,
      chartColors.donut.series4,
    ],
    stroke: { width: 0 },
    dataLabels: {
      enabled: false,
      formatter(val) {
        return `${Number.parseInt(val)}%`
      },
    },
    legend: { show: false },
    tooltip: { theme: false },
    grid: {
      padding: {
        top: 15,
        right: -20,
        left: -20,
      },
    },
    states: { hover: { filter: { type: "none" } } },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            value: {
              fontSize: "1.375rem",
              fontFamily: "Public Sans",
              color: headingColor,
              fontWeight: 600,
              offsetY: -15,
              formatter(val) {
                return `${Number.parseInt(val)}%`
              },
            },
            name: {
              offsetY: 20,
              fontFamily: "Public Sans",
            },
            total: {
              show: true,
              showAlways: true,
              color: currentTheme.success,
              fontSize: ".8125rem",
              label: "Total",
              fontFamily: "Public Sans",
              formatter() {
                return "184"
              },
            },
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard class="overflow-visible">
    <VCardText class="d-flex justify-space-between">
      <div class="d-flex flex-column">
        <div class="mb-auto">
          <h5 class="text-h5 text-no-wrap">
            Generated Leads
          </h5>
          <div class="text-body-1">
            Monthly Report
          </div>
        </div>

        <div>
          <h3 class="text-h3">
            4,350
          </h3>
          <div class="d-flex gap-x-1 align-center">
            <VIcon
              icon="tabler-chevron-up"
              size="20"
              color="success"
            />
            <div class="text-base text-success">
              15.8%
            </div>
          </div>
        </div>
      </div>
      <div>
        <VueApexCharts
          :options="chartOptions"
          :series="series"
          :height="147"
          :width="130"
        />
      </div>
    </VCardText>
  </VCard>
</template>
