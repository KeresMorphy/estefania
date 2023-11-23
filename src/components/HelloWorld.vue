<template>
  <div id="app">
    <h1>Información de los Alumnos</h1>
    
    <div v-for="alumno in usuarios" :key="alumno.NumControl">
      <!-- Mostrar imagen del alumno si 'imagenUrl' está presente -->
      <img v-if="alumno.imagenUrl" :src="alumno.imagenUrl" alt="Imagen del alumno">
      
      <!-- Mostrar el nombre del alumno -->
      <h1>{{ alumno.Nombre }}</h1>
      
      <!-- Mostrar carrera si está presente -->
      <h2 v-if="alumno.Carrera">Carrera: {{ alumno.Carrera }}</h2>
      
      <!-- Mostrar número de control si está presente -->
      <h2 v-if="alumno.NumControl">Número de Control: {{ alumno.NumControl }}</h2>
      
      <!-- Mostrar fecha de cumpleaños si está presente -->
      <h2 v-if="alumno.cumpleaños">Cumpleaños: {{ alumno.cumpleaños }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../firebase';

export default {
  name: 'HelloWorld',
  setup() {
    const usuarios = ref([]);

    const obtenerUsuarios = async () => {
      const db = getFirestore(firebaseApp);
      const usuariosRef = collection(db, 'alumnos'); // Cambiado a 'alumnos'
      const usuariosSnapshot = await getDocs(usuariosRef);

      const usuariosArray = [];
      usuariosSnapshot.forEach((doc) => {
        usuariosArray.push({ id: doc.id, ...doc.data() });
      });

      usuarios.value = usuariosArray;
    };

    onMounted(() => {
      obtenerUsuarios();
    });

    return {
      usuarios,
    };
  },
};
</script>
