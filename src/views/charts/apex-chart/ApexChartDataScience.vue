<script setup>
import { useTheme } from "vuetify"
import { getColumnChartConfig } from "@core/libs/apex-chart/apexCharConfig"

const vuetifyTheme = useTheme()

const chartConfig = computed(() =>
  getColumnChartConfig(vuetifyTheme.current.value),
)

const series = [
  {
    name: "Apple",
    data: [90, 120, 55, 100, 80, 125, 175, 70, 88],
  },
  {
    name: "Samsung",
    data: [85, 100, 30, 40, 95, 90, 30, 110, 62],
  },
]
</script>

<template>
  <VueApexCharts
    type="bar"
    height="400"
    :options="chartConfig"
    :series="series"
  />
</template>
