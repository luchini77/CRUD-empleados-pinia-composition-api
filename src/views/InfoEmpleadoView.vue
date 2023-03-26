<template>
    <div class="container py-3">
        <h1>Información del Empleado</h1>
        <div class="row">
        <div class="col-lg-6 col-sm-12">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nombre: {{ empleado?.nombre }}</li>
                    <li class="list-group-item">Rut: {{ empleado?.rut }}</li>
                    <li class="list-group-item">Fecha de Nacimiento: {{ empleado?.fecha_nacimiento }}</li>
                    <li class="list-group-item">Telefono: {{ empleado?.telefono }}</li>
                    <li class="list-group-item">Email: {{ empleado?.email }}</li>
                    <li class="list-group-item">Salud: {{ empleado?.salud }}</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">AFP: {{ empleado?.afp }}</li>
                    <li class="list-group-item">Especialidad: {{ empleado?.especialidad }}</li>
                    <li class="list-group-item">Fecha de Ingreso: {{ empleado?.fecha_ingreso }}</li>
                    <li class="list-group-item">Calle: {{ empleado?.calle }}</li>
                    <li class="list-group-item">Población o Villa: {{ empleado?.poblacion }}</li>
                    <li class="list-group-item">Localidad: {{ empleado?.localidad }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="btn-group mt-2" role="group" aria-label="Basic example">
        <router-link to="/" class="btn btn-success">Volver</router-link>
        <router-link :to="`/editar/${empleado?.id}`" class="btn btn-warning">Actualizar</router-link>
        <button @click.prevent="borrarEmpleado" class="btn btn-danger">Borrar</button>
    </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmpleadoStore } from '../stores/Empleados';
import { RouterLink } from 'vue-router';


const storeEmpleado = useEmpleadoStore()

const router = useRouter()

const empleado = computed(() => {
    return storeEmpleado.encontrarEmpleado(id)
})

const borrarEmpleado = () => {
    if(confirm('Desea Borrar el Empleado?')){
        storeEmpleado.eliminarEmpleado(id)
    }
    router.push('/')
}

const route = useRoute()
const id = route.params.id


</script>