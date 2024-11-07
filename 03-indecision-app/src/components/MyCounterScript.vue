<!-- cuando se tiene un .vue se conoce como single file components -->
<template>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const { counter, squareCounter } = useCounter(100);

// import { computed, ref, defineComponent } from 'vue';
// export default defineComponent({
//   props: {
//     value: { type: Number, required: true },
//   },
//   setup(props) {
//     const counter = ref(props.value);
//     const squareCounter = computed(() => counter.value * counter.value);
//     return {
//       counter: counter,
//       squareCounter: squareCounter,
//     };
//   },
// });

// import { computed, ref } from 'vue';

interface Props {
  value: number;
}
const props = defineProps<Props>();

// const counter = ref(props.value);
// // capturo el valor con props.value desde el app.vue donde lo defini con :value
// const squareCounter = computed(() => counter.value * counter.value);
</script>
