<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox @send-message="onMessage($event)" />
    <!-- la forma corta de hacer esto seria MessageBox @send-message="onMessage" puedo mandar como referencia solo la funcion
    ya que el send message emite un texto, y el evento tambien emite un texto -->
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat();

//se comenta todo lo de abajo porque se paso hacia useChat.ts

// const messages = ref<ChatMessage[]>([
//   {
//     id: new Date().getTime(),
//     message: 'Hola mundoñ',
//     itsMine: true,
//   },
//   {
//     id: new Date().getTime(),
//     message: 'si',
//     itsMine: false,
//     image: 'https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif',
//   },
// ]);

// const onMessage = (text: string) => {
//   messages.value.push({
//     id: new Date().getTime(),
//     itsMine: true,
//     message: text,
//   });
// };
</script>

<!-- la comunicacion de componentes se puede hacer si necesidad de pasar informacion
por ejemplo que un componente se encarge de mostrar mensajes y otro se encarge de
añadir mensajes -->
