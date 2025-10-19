<template>
    <div>
        <pre>{{ tick }}</pre>
        <button @click="updateTick">Update tick</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { server } from './main';

const tick = ref();

async function updateTick() {
    const response = await server.get('tick');
    tick.value = response.data;
}
</script>

<style lang="scss" scoped></style>
