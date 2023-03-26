<template>
    <div class="container py-3">
        <h1>Editar Empleado</h1>
        <form @submit.prevent="actualizarEmpleado(empleado)">
            <FormEmpleado :empleado="empleado"/>
        </form>
    </div>
</template>

<script setup>
import FormEmpleado from '../components/FormEmpleado.vue';
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useEmpleadoStore } from '../stores/Empleados'

const storeEmpleado = useEmpleadoStore()

const router = useRouter()

const empleado = ref({
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

onMounted(() => {
    const route = useRoute()
    const id = route.params.id
    const cargarEmpleado = storeEmpleado.encontrarEmpleado(id)

    empleado.value.id = cargarEmpleado.id
    empleado.value.nombre = cargarEmpleado.nombre
    empleado.value.rut = cargarEmpleado.rut
    empleado.value.fecha_nacimiento = cargarEmpleado.fecha_nacimiento
    empleado.value.salud = cargarEmpleado.salud
    empleado.value.afp = cargarEmpleado.afp
    empleado.value.telefono = cargarEmpleado.telefono
    empleado.value.email = cargarEmpleado.email
    empleado.value.especialidad = cargarEmpleado.especialidad
    empleado.value.fecha_ingreso = cargarEmpleado.fecha_ingreso
    empleado.value.calle = cargarEmpleado.calle
    empleado.value.poblacion = cargarEmpleado.poblacion
    empleado.value.localidad = cargarEmpleado.localidad
})

const actualizarEmpleado = () => {
    storeEmpleado.editarEmpleado(empleado.value)
    router.push("/")
}

</script>