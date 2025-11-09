<template>
    <PageCard>
        <section>ROOM PAGE</section>
        <pre>{{ id }}</pre>
        <button @click="leaveRoom">Leave Room</button>
    </PageCard>
</template>

<script lang="ts" setup>
import { Page, router } from '@/router';
import { Room } from '@/room';
import { ref } from 'vue';

const id = router.currentRoute.value.params.id as string;
const room = ref(null as Room | null);

if (!id) router.push({ name: Page.LOST });

function leaveRoom() {
    router.push({ name: Page.HOME });
}
</script>

<style lang="scss" scoped></style>
