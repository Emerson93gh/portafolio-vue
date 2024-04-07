<script setup>
import { ref } from 'vue';
import CustomInput from '@/components/CustomInput.vue';

const formulario_contacto_default = {
    nombre:   '',
    email:    '',
    telefono: '',
    mensaje:  ''
}

const formulario_contacto = ref({...formulario_contacto_default})

const limpiarFormulario = () => {
    formulario_contacto.value = {...formulario_contacto_default}
}

const EnviarFormulario = () => {
    console.log(formulario_contacto.value)
    limpiarFormulario()
}

</script>

<template>
    <div class="card p-2 mt-4 border mx-4" >
        <h1 class="text-blue-600 font-bold" >Contacto</h1>

        <p class="text-gray-600">Esta es mi página de contacto.</p>

        <div class="grid grid-cols-2 gap-4">
            <CustomInput 
                class="text-left p-2 col-span-2"
                v-model="formulario_contacto.nombre"
                :type="'text'" 
                :label="'Nombre:'" 
                :placeholder="'Ingrese su nombre'" 
                :icon="'user'" 
                :required="true" 
                :readOnly="false" 
                :classes="'border-gray-300 focus:border-indigo-500'" 
                :labelClasses="'block text-sm font-medium text-gray-700'"
            />
            <CustomInput 
                class="text-left p-2"
                v-model="formulario_contacto.email"
                :type="'text'" 
                :label="'Correo Electrónico:'" 
                :placeholder="'Ingrese su correo electrónico'" 
                :icon="'user'" 
                :required="true" 
                :readOnly="false" 
                :classes="'border-gray-300 focus:border-indigo-500'" 
                :labelClasses="'block text-sm font-medium text-gray-700'"
            />
            <CustomInput 
                class="text-left p-2"
                v-model="formulario_contacto.telefono"
                :type="'text'" 
                :label="'Teléfono:'" 
                :placeholder="'Ingrese su teléfono'" 
                :icon="'user'" 
                :required="true" 
                :readOnly="false" 
                :classes="'border-gray-300 focus:border-indigo-500'" 
                :labelClasses="'block text-sm font-medium text-gray-700'"
            />
            <CustomInput 
                class="text-left p-2 col-span-2"
                v-model="formulario_contacto.mensaje"
                :type="'textarea'" 
                :label="'Mensaje:'" 
                :placeholder="'Ingrese su mensaje'" 
                :icon="'user'" 
                :required="true" 
                :readOnly="false" 
                :classes="'border-gray-300 focus:border-indigo-500'" 
                :labelClasses="'block text-sm font-medium text-gray-700'"
            />
            <!-- botones -->
            <div class="flex justify-end col-span-2 gap-2">
                <button 
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg" 
                    @click="limpiarFormulario()">
                        Cancelar
                </button>
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="EnviarFormulario()">
                        Enviar
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>