<template>
  <!-- Example Message -->
  <!-- v-if para decri que el mensaje es mio -->
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <!-- v-else para decir que el mensaje no es mio -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
      <!-- {{ message }} esto es la interpolación del mensaje, para poder que nos referencie -->
      <!-- se coloca dentro de un span solo para aplicarle una clase o clases y estilos de tailwind -->
      <!-- como la imagen puede o no existir (ver abajo image?) entonces lo ponemos con el vi-f -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

defineProps<Props>(); //con solo jacer esto le pasa las props a mi componente (las div donde estan los mensaje se estan comprotando como componentes)
</script>
