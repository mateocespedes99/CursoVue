import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter: counter,
      squareCounter: squareCounter,
    };
  },
});
//hacer esto es util para separar la logica de los componentes, pemite tener el codigo mas organizado
//en la carpeta tenfo un .vue y un .ts y en conjunt hacen lo mismo que antes estaba haciendo en los MyCounter
//puedo usar un compostable para hacer un gestor de estados
