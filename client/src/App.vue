<template>
    <div>
        <pre>{{ tick }}</pre>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTickStore } from './store/tick-store';

const { tick } = storeToRefs(useTickStore());
</script>

<style lang="scss" scoped></style>
