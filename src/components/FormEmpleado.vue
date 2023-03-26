<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <div class="mb-1">
                    <input autofocus class="form-control" type="text" placeholder="Ingrese Nombre" v-model="empleado.nombre">
                </div>
                <div class="mb-1">
                    <input class="form-control" type="text" placeholder="Ingrese Rut" v-model="empleado.rut">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Fecha de Nacimiento"
                        v-model="empleado.fecha_nacimiento">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Ingrese Salud" v-model="empleado.salud">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Ingrese AFP" v-model="empleado.afp">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Ingrese Telefono" v-model="empleado.telefono">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Ingrese Correo" v-model="empleado.email">
                </div>
                <div class="mb-1">
                    <input class="form-control" type="text" placeholder="Ingrese Especialidad"
                        v-model="empleado.especialidad">
                </div>
                <div class="mb-1">
                    <input class="form-control" type="text" placeholder="Ingrese Fecha de Ingreso"
                        v-model="empleado.fecha_ingreso">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Calle" v-model="empleado.calle">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Poblacion" v-model="empleado.poblacion">
                </div>
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Ingrese Localidad" v-model="empleado.localidad">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Procesar Formulario</button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    empleado: Object
})

</script>