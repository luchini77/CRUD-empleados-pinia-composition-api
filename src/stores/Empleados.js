import { defineStore } from "pinia";
import { computed, ref } from 'vue'


export const useEmpleadoStore = defineStore('empleado', () => {

    const empleados = ref([]);
    const empleadoFiltrado = ref([]);

    if(localStorage.getItem('empleados')){
        empleados.value = JSON.parse(localStorage.getItem('empleados'));
    }

    const getEmpleado = (empleado) => {
        empleados.value.push(empleado)

        localStorage.setItem('empleados', JSON.stringify(empleados.value))
    }

    const editarEmpleado = (empleado) => {
        empleados.value = empleados.value.map(item => item.id === empleado.id ? empleado : item)
        localStorage.setItem('empleados', JSON.stringify(empleados.value))
    }

    const encontrarEmpleado = (id) => empleados.value.find((item) => item.id === id);


    const eliminarEmpleado = (id) => {
        empleados.value = empleados.value.filter((item) => item.id !== id);

        localStorage.setItem('empleados', JSON.stringify(empleados.value))

    }

    const filtroNombre = computed((texto) => {
        return empleados.value.filter((empleado) => {
            return (
                empleado.nombre.toLowerCase().indexOf(texto.toLowerCase()) != -1
            )
        })

    })



        // console.log(texto)
        // const filtro = empleados.value.filter((item) => {
        //     let nombreBuscado = item.nombre.toLowerCase();
        //     let textoEmpleado = texto.toLowerCase();
        //     if(nombreBuscado.includes(textoEmpleado)){
        //         return item;
        //     }
        // })
        //console.log(filtro)
        // empleadoFiltrado.value.push(filtro)

        // const filtro = empleados.value.filter(item => {
        //     const textoApi = item.nombre.toLowerCase()
        //     if(textoApi.includes(textoEmpleado)){
        //         return item
        //     }
        // })
        //empleadoFiltrado.value.push(filtro)



    return{
        empleados,
        empleadoFiltrado,
        getEmpleado,
        encontrarEmpleado,
        eliminarEmpleado,
        editarEmpleado,
        filtroNombre
    }
})