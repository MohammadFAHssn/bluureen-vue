<script setup>
import { useTheme } from "vuetify"
import { getHorizontalBarChartConfig } from "@core/libs/chartjs/chartjsConfig"
import BarChart from "@core/libs/chartjs/components/BarChart"

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
})

const vuetifyTheme = useTheme()

const chartOptions = computed(() =>
  getHorizontalBarChartConfig(vuetifyTheme.current.value),
)

const data = {
  labels: ["MON", "TUE", "WED ", "THU", "FRI"],
  datasets: [
    {
      maxBarThickness: 15,
      label: "Market Data",
      backgroundColor: props.colors.warningShade,
      borderColor: "transparent",
      data: [710, 350, 580, 460, 120],
    },
    {
      maxBarThickness: 15,
      backgroundColor: props.colors.horizontalBarInfo,
      label: "Personal Data",
      borderColor: "transparent",
      data: [430, 590, 510, 240, 360],
    },
  ],
}
</script>

<template>
  <BarChart
    :height="375"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
