<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: String,
})

</script>

<template>
  <div v-html="icon"></div>
</template>