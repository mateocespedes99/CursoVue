<!-- cuando se tiene un .vue se conoce como single file components -->
<template>
  <IndecisionView />

  <!--
se comenta par fines de hacer una app chatbot -->
  <!-- <h1 className="text-3xl font-bold underline">Hello !</h1>
  <hr />

  <MyCounter :value="1" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" /> -->
  <!-- :value es lo mismo que v-bind: -->

  <!-- lo añado como modulo y puedo añadir cuantos quiera y todos van
  a ser independientes, la inyeccion vite la hace en caliente (a diferencia de webpack)
  es decir no baja toda la app sino que solo agrega lo nuevo -->
</template>

<!-- revisar la documentacion de los SFC (single file components) -->

<script lang="ts" setup>
import IndecisionView from './views/indecisionView.vue'; //tambien puedo ahcerlo usando el path relativo que sería '@/views/IndecisionView.vue'
import './styles.css';

//se comenta para fines de crear una app de chatbot
// import MyCounter from './components/MyCounter.vue';
// import MyCounterScript from './components/MyCounterScript.vue';
// import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<!-- <style scoped>
/* el scoped permite que el estilo solo se aplique a este h1 */
h1 {
  color: rgb(127, 170, 127);
}
</style> -->
