<script setup>
import { onUpdated } from 'vue'
defineProps(['message'])
defineEmits(['update'])
onUpdated(() => console.log('Message se ha re-renderizado'))
</script>

<template>
  <p>{{ message }}</p>
  <button @click="$emit('update')">Actualizar mensaje</button>
</template>
