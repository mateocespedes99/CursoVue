<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- <ChatBubble :its-mine="true" :message="'Hola mundo'" /> -->
      <!-- el its-mine="true" debo usarlo con el v-bind su abreviacion es usando ":" porque si no uso el vbind envia un string, necesito que envie un booleano -->
      <!-- aplica lo mismo para el message -->
      <!-- <ChatBubble
        :its-mine="false"
        :message="'no'"
        image="https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif"
      /> -->
      <!-- como lo puse por componentes cuando es false aparece en el lado opuesto del chat, ya que el mensaje no e smio sino que es una respuesta -->

      <!-- Tambien se puede hacer como: -->
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      /> -->

      <!-- Tambien se puede hacer como: -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- el vbind me ahorra codigo -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();
const messagesRef = ref<ChatMessage[]>(props.messages);

const chatRef = ref<HTMLDivElement | null>(null);

watch(messagesRef.value, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});

// watch(messages, () => {
//   chatRef.value?.scrollTo({
//     top: chatRef.value.scrollHeight,
//     behavior: 'smooth',
//   });
// });
</script>

<!-- ya se tiene la conexion entre  el padre(indecision.vue) y el hijo(chatmessages). el hijo se encarga de
renderizar los componentes     -->
