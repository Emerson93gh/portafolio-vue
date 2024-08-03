<script setup>
import VueApexCharts from 'vue3-apexcharts';
import { defineProps, computed } from 'vue';


const props = defineProps({
   title:   { type: String, required: true },
   type:    { type: String, required: true },
   width:   { type: String, required: true },
   height:  { type: String, required: true },
   series:  { type: Array,  required: true },
})

const series = props.series

const chartOptions = computed(() => {
   if (props.type === 'area') {
       return {
           chart: {
               width: props.width,
               height: props.height,
               type: 'area'
           },
           dataLabels: {
               enabled: false
           },
           stroke: {
               curve: 'smooth'
           },
           xaxis: {
               type: 'category',
               categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
           },
           yaxis: {
                labels: {
                     formatter: function (value) {
                          return '$ ' + value
                     }
                }
            },
           tooltip: {
               x: {
                   //format: 'dd/MM/yy HH:mm'
                   formatter: function(value) {
                        return value;
                    }
               },
           },
       }
   } else if (props.type === 'bar') {
       return {
           chart: {
               height: 350,
               type: 'bar'
           },
       }
   }
})


</script>
<template>
   <div class="card">
       <div class="bg-uca-700 p-2 font-bold text-black rounded-t-lg">
           {{ title }}
       </div>
       <div :style="{width: width + 'px', height: height + 'px'}" class="p-4">
            <VueApexCharts
                :type="type"
                :with="width"
                :height="height"
                :options="chartOptions"
                :series="series"
            />
       </div>
   </div>
</template>


<style scoped>

</style>