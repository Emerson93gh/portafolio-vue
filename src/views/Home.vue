<script setup>
import CustomInput from '@/components/CustomInput.vue';
import Graph from '@/components/Graph.vue';

const data_series = [
    {
        name: 'Constante',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
    },
    {
        name: 'Variables',
        data: [11, 32, 45, 50, 55, 60, 70, 70, 70, 70, 70, 70]
    }
]
    
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 class="text-2xl font-bold text-blue-600">Welcome to Home Page</h1>
        <p class="mt-2 text-gray-600">This is the home page of my application.</p>

        <CustomInput 
            class="mt-4 text-center mx-auto"
            :type="'text'" 
            :label="'Nombre'" 
            :placeholder="'Escribe tu nombre'" 
            :icon="'user'" 
            :required="true" 
            :readOnly="false" 
            :classes="'border-gray-300 focus:border-indigo-500'" 
            :labelClasses="'block text-sm font-medium text-gray-700'" 
            :iconSvg="'<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'currentColor\' class=\'w-6 h-6\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\' /></svg>'"
        />
        <br>
        <Graph 
            title="Test gráfico de área" 
            width="600"
            height="400" 
            type="area" 
            :series="data_series"
        />
    </div>
</template>

<style scoped>

</style>