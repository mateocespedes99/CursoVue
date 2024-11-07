import { ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue); //esta property se puede dejar por defecto "5" o recirla por argumento
  // capturo el valor con props.value desde el app.vue donde lo defini con :value
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    //acá realmente en esta composable function puedo retornar lo que yoquiera
    //sea, arreglo, valor, objeto, etc. (si es arreglo hacer el "as const" para que retorne en el mismo orden)
    counter,
    squareCounter,
  };
};

//la idea de los composables es reutilizar codigo, en el contador tenemos varios comporentes que usan
//la misma logica del contador (todos los myCounter)
// 48. composable functions
