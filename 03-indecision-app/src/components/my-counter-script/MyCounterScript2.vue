<!-- cuando se tiene un .vue se conoce como single file components -->
<template>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" src="./MyCounterScript2"></script>

<!-- la logica la tengo en el archivo .ts, esto es util para poder tener todo separado y poder usar los componentes -->
