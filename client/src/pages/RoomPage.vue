<template>
    <PageCard>
        <div v-if="room">
            <section>{{ room.name }}</section>
            <pre>{{ room }}</pre>
            <button @click="leaveRoom">Leave Room</button>
        </div>
        <div v-else>Joining room...</div>
    </PageCard>
</template>

<script lang="ts" setup>
import { Page, router } from '@/router';
import { Room } from '@/room';
import { onMounted, ref } from 'vue';
import { server } from '@/main';

const id = router.currentRoute.value.params.id as string;
const room = ref(null as Room | null);
onMounted(async () => {
    await fetchRoom();
});

if (!id) router.push({ name: Page.LOST });

async function fetchRoom() {
    const response = await server.get(`/rooms/${id}`);
    if (!response.data) {
        router.push({ name: Page.LOST });
        return;
    }
    room.value = response.data as Room;
}

function leaveRoom() {
    router.push({ name: Page.HOME });
}
</script>

<style lang="scss" scoped></style>
