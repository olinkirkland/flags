<template>
    <div>
        LOST
        <button @click="redirectToHome">Home</button>
    </div>
</template>

<script lang="ts" setup>
import { router } from '@/router';

function redirectToHome() {
    router.push('/');
}
</script>
