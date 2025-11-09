<template>
    <PageCard>
        <p v-if="socketId" class="socket-id">Socket Id: {{ socketId }}</p>
        <div v-if="socketId">
            <h1>Flag Guesser</h1>

            <div class="flex">
                <button @click="joinAvailable">Quick Play</button>
                <button @click="createRoom">
                    <i class="fas fa-plus"></i>
                    Create new Game
                </button>
                <button @click="fetchRooms">
                    <i class="fas fa-sync"></i>
                    Refresh
                </button>
            </div>

            <ul v-if="rooms.length > 0" class="rooms">
                <li v-for="room in rooms">
                    <p>{{ room.name }}</p>
                    <button @click="joinRoom(room)">
                        <i class="fas fa-sign-in-alt"></i>
                        Join
                    </button>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Connecting to server...</p>
        </div>
    </PageCard>
</template>

<script lang="ts" setup>
import { server } from '@/main';
import { Room } from '@/room';
import { Page, router } from '@/router';
import { useUserStore } from '@/store/user-store';
import { computed, ref } from 'vue';

const userStore = useUserStore();
const socketId = computed(() => userStore.socketId);

const rooms = ref<Room[]>([]);
fetchRooms();

async function fetchRooms() {
    const response = await server.get('/rooms');
    if (!response.data) return;
    rooms.value = response.data as Room[];
}

async function createRoom() {
    const options = {
        // name: 'someroomname'
    };

    const response = await server.post('/rooms', { options });

    // TODO: Handle errors
    joinRoom(response.data as Room);
}

async function joinRoom(room: Room) {
    const { id } = room;
    router.push({ name: Page.ROOM, params: { id } });
}

async function joinAvailable() {
    await fetchRooms();
    if (rooms.value.length === 0) {
        await createRoom();
    } else {
        joinRoom(rooms.value[0]);
    }
}
</script>

<style lang="scss" scoped>
ul.rooms {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 5px;
    border: 1px solid var(--surface-dark);
    > li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:not(:last-child) {
            border-bottom: 1px solid var(--surface-dark);
            margin-bottom: 1rem;
            padding-bottom: 1rem;
        }
    }
}

.socket-id {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: var(--border);
}
</style>
