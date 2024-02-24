<script setup>
import { defineProps } from 'vue'
import SvgIcon from './SvgIcon.vue';

const props = defineProps({
  type: String,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  readOnly: Boolean,
  classes: String,
  labelClass: String,
  iconSvg: String,
})

</script>
<template>
    <div class="mb-4">
        <label :class="props.labelClass" for="input">{{ props.label }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SvgIcon :icon="props.iconSvg" />
            </div>
            
            <input id="input" name="input" 
                :type="props.type" 
                :placeholder="props.placeholder" 
                :required="props.required" 
                :readonly="props.readOnly" 
                :class="[
                    props.classes, 
                    'block w-full pl-10 pr-3 py-2 border-gray-300 focus:border-indigo-500 rounded-md'
                ]" 
            />
        </div>
    </div>
</template>