<script setup>
import { ref, onUpdated } from 'vue'
import Counter from './Counter.vue'
import Message from './Message.vue'

const count = ref(0)
const message = ref('Reactividad!!')
onUpdated(() => console.log('App se ha re-renderizado'))

function updateMessage() {
  const nuevo = prompt('Nuevo mensaje')
  if (nuevo) message.value = nuevo
}
</script>

<template>
  <Counter :count="count" @increment="count++" />
  <Message :message="message" @update="updateMessage" />
</template>
