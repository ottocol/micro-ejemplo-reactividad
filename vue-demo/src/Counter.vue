<script setup>
import { onUpdated } from 'vue'
defineProps(['count'])
defineEmits(['increment'])
onUpdated(() => console.log('Counter se ha re-renderizado'))
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="$emit('increment')">Incrementar</button>
</template>
