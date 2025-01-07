<template>
  <main class="flex flex-col items-center justify-center h-screen">

    <!-- Caja del form -->
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Añadir Ciudad</h2>
      <form @submit.prevent="addCity" class="space-y-4">
        <div>
          <label for="ciudad" class="block text-sm font-medium text-gray-700 mb-1">Nombre de la Ciudad</label>
          <input v-model="newCity.name" type="text" id="ciudad" name="ciudad" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div>
          <label for="pais" class="block text-sm font-medium text-gray-700 mb-1">País</label>
          <input v-model="newCity.country" type="text" id="pais" name="pais" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <button type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
          Añadir
        </button>
      </form>
    </div>

    <!-- Lista de ciudades -->
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Lista de Ciudades</h2>
      <ul class="space-y-4">

        <li v-for="(city, pos) in cities" :key="pos" class="bg-gray-50 p-4 rounded-md shadow">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-semibold">{{ city.name }}</h3>
              <p class="text-sm text-gray-600">{{ city.country }}</p>
            </div>
            <div>
              <button class="text-blue-500 hover:text-blue-700 mr-2">Actualizar</button>
              <button class="text-red-500 hover:text-red-700">Eliminar</button>
            </div>
          </div>
        </li>

      </ul>
    </div>

  </main>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default {
  name: "HomeView",
  data() {
    return {
      cities: [],
      editing: false,
      editingId: null,
      newCity: {
        name: "",
        country: "",
      },
    };
  },
  firestore() {
    return {
      cities: collection(db, "ciudades"),
    };
  },
  methods: {
    async addCity() {
      await addDoc(collection(db, "ciudades"), {
        name: this.newCity.name,
        country: this.newCity.country,
      });

      this.newCity = {
        name: "",
        country: "",
      };
    },
  },
};
</script>
