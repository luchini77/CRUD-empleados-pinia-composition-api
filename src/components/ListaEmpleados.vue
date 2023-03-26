<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <!-- <div>
                <input 
                    class="form-control my-2" 
                    type="text" 
                    placeholder="Buscar Empleado " 
                    v-model="texto"
                >
            </div> -->
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Buscar Empleado" aria-label="Recipient's username"
                    aria-describedby="basic-addon2" v-model="texto">
                    
                <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i></span>
            </div>


            <ul class="list-group" v-for="empleado in procesarInput" :key="empleado.id">
                <li class="list-group-item d-flex justify-content-between mb-1" :class="empleado.especialidad === 'loquilla'
                    ? 'list-group-item-success'
                    : empleado.especialidad === 'negra jugetona'
                        ? 'list-group-item-warning'
                        : 'list-group-item-danger'">
                    Nombre: {{ empleado.nombre }} - RUT: {{ empleado.rut }}
                    <router-link :to="`/info/${empleado.id}`" class="btn btn-info btn-sm">Informacion
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useEmpleadoStore } from '../stores/Empleados';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue'

const storeEmpleado = useEmpleadoStore();

const texto = ref('')

const { empleados } = storeToRefs(storeEmpleado);

const procesarInput = computed(() => {
    return empleados.value.filter((empleado) => {
        return (
            empleado.nombre.toLowerCase().indexOf(texto.value.toLowerCase()) != -1
        )
    })
})

</script>