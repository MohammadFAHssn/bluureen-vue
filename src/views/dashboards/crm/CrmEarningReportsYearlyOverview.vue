<script setup>
import { useTheme } from "vuetify"
import { hexToRgb } from "@layouts/utils"

const vuetifyTheme = useTheme()
const currentTab = ref(0)
const refVueApexChart = ref()

const chartConfigs = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},${variableTheme["dragged-opacity"]})`
  const legendColor = `rgba(${hexToRgb(currentTheme["on-background"])},${variableTheme["high-emphasis-opacity"]})`
  const borderColor = `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`
  const labelColor = `rgba(${hexToRgb(currentTheme["on-surface"])},${variableTheme["disabled-opacity"]})`

  return [
    {
      title: "Orders",
      icon: "tabler-shopping-cart",
      chartOptions: {
        chart: {
          parentHeightOffset: 0,
          type: "bar",
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            columnWidth: "32%",
            borderRadiusApplication: "end",
            borderRadius: 4,
            distributed: true,
            dataLabels: { position: "top" },
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            bottom: 0,
            left: -10,
            right: -10,
          },
        },
        colors: [
          labelPrimaryColor,
          labelPrimaryColor,
          `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
        ],
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}k`
          },
          offsetY: -25,
          style: {
            fontSize: "15px",
            colors: [legendColor],
            fontWeight: "600",
            fontFamily: "Public Sans",
          },
        },
        legend: { show: false },
        tooltip: { enabled: false },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            show: true,
            color: borderColor,
          },
          axisTicks: { show: false },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "13px",
              fontFamily: "Public Sans",
            },
          },
        },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter(val) {
              return `${val / 1}k`
            },
            style: {
              fontSize: "13px",
              colors: labelColor,
              fontFamily: "Public Sans",
            },
            min: 0,
            max: 60000,
            tickAmount: 6,
          },
        },
        responsive: [
          {
            breakpoint: 1441,
            options: { plotOptions: { bar: { columnWidth: "41%" } } },
          },
          {
            breakpoint: 590,
            options: {
              plotOptions: { bar: { columnWidth: "61%" } },
              yaxis: { labels: { show: false } },
              grid: {
                padding: {
                  right: 0,
                  left: -20,
                },
              },
              dataLabels: {
                style: {
                  fontSize: "12px",
                  fontWeight: "400",
                },
              },
            },
          },
        ],
      },
      series: [
        {
          data: [28, 10, 45, 38, 15, 30, 35, 30, 8],
        },
      ],
    },
    {
      title: "Sales",
      icon: "tabler-chart-bar",
      chartOptions: {
        chart: {
          parentHeightOffset: 0,
          type: "bar",
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            columnWidth: "32%",
            borderRadiusApplication: "end",
            borderRadius: 4,
            distributed: true,
            dataLabels: { position: "top" },
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            bottom: 0,
            left: -10,
            right: -10,
          },
        },
        colors: [
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
          labelPrimaryColor,
          labelPrimaryColor,
        ],
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}k`
          },
          offsetY: -25,
          style: {
            fontSize: "15px",
            colors: [legendColor],
            fontWeight: "600",
            fontFamily: "Public Sans",
          },
        },
        legend: { show: false },
        tooltip: { enabled: false },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            show: true,
            color: borderColor,
          },
          axisTicks: { show: false },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "13px",
              fontFamily: "Public Sans",
            },
          },
        },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter(val) {
              return `${val / 1}k`
            },
            style: {
              fontSize: "13px",
              colors: labelColor,
              fontFamily: "Public Sans",
            },
            min: 0,
            max: 60000,
            tickAmount: 6,
          },
        },
        responsive: [
          {
            breakpoint: 1441,
            options: { plotOptions: { bar: { columnWidth: "41%" } } },
          },
          {
            breakpoint: 590,
            options: {
              plotOptions: { bar: { columnWidth: "61%" } },
              grid: { padding: { right: 0 } },
              dataLabels: {
                style: {
                  fontSize: "12px",
                  fontWeight: "400",
                },
              },
              yaxis: { labels: { show: false } },
            },
          },
        ],
      },
      series: [
        {
          data: [35, 25, 15, 40, 42, 25, 48, 8, 30],
        },
      ],
    },
    {
      title: "Profit",
      icon: "tabler-currency-dollar",
      chartOptions: {
        chart: {
          parentHeightOffset: 0,
          type: "bar",
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            columnWidth: "32%",
            borderRadiusApplication: "end",
            borderRadius: 4,
            distributed: true,
            dataLabels: { position: "top" },
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            bottom: 0,
            left: -10,
            right: -10,
          },
        },
        colors: [
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
        ],
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}k`
          },
          offsetY: -25,
          style: {
            fontSize: "15px",
            colors: [legendColor],
            fontWeight: "600",
            fontFamily: "Public Sans",
          },
        },
        legend: { show: false },
        tooltip: { enabled: false },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            show: true,
            color: borderColor,
          },
          axisTicks: { show: false },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "13px",
              fontFamily: "Public Sans",
            },
          },
        },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter(val) {
              return `${val / 1}k`
            },
            style: {
              fontSize: "13px",
              colors: labelColor,
              fontFamily: "Public Sans",
            },
            min: 0,
            max: 60000,
            tickAmount: 6,
          },
        },
        responsive: [
          {
            breakpoint: 1441,
            options: { plotOptions: { bar: { columnWidth: "41%" } } },
          },
          {
            breakpoint: 590,
            options: {
              plotOptions: { bar: { columnWidth: "61%" } },
              grid: { padding: { right: 0 } },
              dataLabels: {
                style: {
                  fontSize: "12px",
                  fontWeight: "400",
                },
              },
              yaxis: { labels: { show: false } },
            },
          },
        ],
      },
      series: [
        {
          data: [10, 22, 27, 33, 42, 32, 27, 22, 8],
        },
      ],
    },
    {
      title: "Income",
      icon: "tabler-chart-pie-2",
      chartOptions: {
        chart: {
          parentHeightOffset: 0,
          type: "bar",
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            columnWidth: "32%",
            borderRadius: 6,
            distributed: true,
            borderRadiusApplication: "end",
            dataLabels: { position: "top" },
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            bottom: 0,
            left: -10,
            right: -10,
          },
        },
        colors: [
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          labelPrimaryColor,
          `rgba(${hexToRgb(currentTheme.primary)}, 1)`,
        ],
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}k`
          },
          offsetY: -25,
          style: {
            fontSize: "15px",
            colors: [legendColor],
            fontWeight: "600",
            fontFamily: "Public Sans",
          },
        },
        legend: { show: false },
        tooltip: { enabled: false },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            show: true,
            color: borderColor,
          },
          axisTicks: { show: false },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "13px",
              fontFamily: "Public Sans",
            },
          },
        },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter(val) {
              return `${val / 1}k`
            },
            style: {
              fontSize: "13px",
              colors: labelColor,
              fontFamily: "Public Sans",
            },
            min: 0,
            max: 60000,
            tickAmount: 6,
          },
        },
        responsive: [
          {
            breakpoint: 1441,
            options: { plotOptions: { bar: { columnWidth: "41%" } } },
          },
          {
            breakpoint: 590,
            options: {
              plotOptions: { bar: { columnWidth: "50%" } },
              dataLabels: {
                style: {
                  fontSize: "12px",
                  fontWeight: "400",
                },
              },
              grid: { padding: { right: 0 } },
              yaxis: { labels: { show: false } },
            },
          },
        ],
      },
      series: [
        {
          data: [5, 9, 12, 18, 20, 25, 30, 36, 48],
        },
      ],
    },
  ]
})

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
  <VCard
    title="Earning Reports"
    subtitle="Yearly Earnings Overview"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn
          size="small"
          :menu-list="moreList"
        />
      </div>
    </template>

    <VCardText>
      <VSlideGroup
        v-model="currentTab"
        show-arrows
        mandatory
        class="mb-10"
      >
        <VSlideGroupItem
          v-for="(report, index) in chartConfigs"
          :key="report.title"
          v-slot="{ isSelected, toggle }"
          :value="index"
        >
          <div
            style="block-size: 100px; inline-size: 110px"
            :style="
              isSelected
                ? 'border-color:rgb(var(--v-theme-primary)) !important'
                : ''
            "
            :class="isSelected ? 'border' : 'border border-dashed'"
            class="d-flex flex-column justify-center align-center cursor-pointer rounded py-4 px-5 me-4"
            @click="toggle"
          >
            <VAvatar
              rounded
              size="38"
              :color="isSelected ? 'primary' : ''"
              variant="tonal"
              class="mb-2"
            >
              <VIcon
                size="22"
                :icon="report.icon"
              />
            </VAvatar>
            <h6 class="text-base font-weight-medium mb-0">
              {{ report.title }}
            </h6>
          </div>
        </VSlideGroupItem>

        <!-- 👉 slider more -->
        <VSlideGroupItem>
          <div
            style="block-size: 100px; inline-size: 110px"
            class="d-flex flex-column justify-center align-center rounded border border-dashed py-4 px-5"
          >
            <VAvatar
              rounded
              size="38"
              variant="tonal"
            >
              <VIcon
                size="22"
                icon="tabler-plus"
              />
            </VAvatar>
          </div>
        </VSlideGroupItem>
      </VSlideGroup>

      <VueApexCharts
        ref="refVueApexChart"
        :key="currentTab"
        :options="chartConfigs[Number(currentTab)].chartOptions"
        :series="chartConfigs[Number(currentTab)].series"
        height="230"
        class="mt-3"
      />
    </VCardText>
  </VCard>
</template>
