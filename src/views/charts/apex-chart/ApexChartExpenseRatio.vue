<script setup>
import { useTheme } from "vuetify"
import { getDonutChartConfig } from "@core/libs/apex-chart/apexCharConfig"

const vuetifyTheme = useTheme()

const expenseRationChartConfig = computed(() =>
  getDonutChartConfig(vuetifyTheme.current.value),
)

const series = [85, 16, 50, 50]
</script>

<template>
  <VueApexCharts
    type="donut"
    height="410"
    :options="expenseRationChartConfig"
    :series="series"
  />
</template>
