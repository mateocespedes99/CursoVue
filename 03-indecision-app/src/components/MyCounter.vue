<!-- cuando se tiene un .vue se conoce como single file components -->
<template>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button class="p-5" @click="counter++">+1</button>
    <button class="p-5" @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const { counter, squareCounter } = useCounter(10);

// import { computed, ref } from 'vue';

// const props = defineProps({
//   value: { type: Number, required: true },
// });

// // esta definicion de propiedades tambien se puede hacer como:
// const props = defineProps<{
//   value: number;
// }>();
// este codigo es mas ligero y lo que esta definido dentro de las llaves
// no llega a javascript

//Tambien se puede definir el objeto por medio de una interface, asi:

interface Props {
  value: number;
}
const props = defineProps<Props>();

// const counter = ref(props.value);
// // capturo el valor con props.value desde el app.vue donde lo defini con :value
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<!-- <style scoped>
  /* el scoped permite que el estilo solo se aplique a este h1 */
  h1 {
    color: rgb(127, 170, 127);
  }
  </style> -->
