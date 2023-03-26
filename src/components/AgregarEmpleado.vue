<template>
    <h1 class="text-center">Agregar Empleado</h1>
    <form @submit.prevent="agregarEmpleado">
        <FormEmpleado :empleado="empleado"/>
    </form>
</template>

<script setup>
import FormEmpleado from './FormEmpleado.vue';
import { useEmpleadoStore } from '../stores/Empleados'
import { ref } from 'vue'
import { useRouter } from "vue-router";

const storeEmpleado = useEmpleadoStore()

const router = useRouter()

const empleado = ref({
    id: crypto.randomUUID(),
    nombre: '',
    rut: '',
    fecha_nacimiento: '',
    salud: '',
    afp: '',
    telefono: '',
    email: '',
    especialidad: '',
    fecha_ingreso: '',
    calle: '',
    poblacion: '',
    localidad:''

})

const agregarEmpleado = () => {
    storeEmpleado.getEmpleado(empleado.value)
    router.push('/')
}

</script>