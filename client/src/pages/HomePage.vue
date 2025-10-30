<template>
    <Card>
        <h1>Home Page</h1>
        <div class="flex">
            <button @click="createRoom">Create new Room</button>
            <button @click="fetchRooms">
                <i class="fas fa-sync"></i>
                Update room list
            </button>
        </div>

        <ul class="rooms">
            <li v-for="room in rooms">
                <p>{{ room.name }}</p>
                <button @click="joinRoom(room)">Join</button>
            </li>
        </ul>
    </Card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { server } from '@/main';
import { Room } from '@/room';

const rooms = ref<Room[]>([]);
fetchRooms();

async function fetchRooms() {
    const response = await server.get('/rooms');
    if (!response.data) return;
    rooms.value = response.data as Room[];
}

async function createRoom() {
    const options = {
        name: 'someroomname'
    };

    const response = await server.post('/rooms', { options });
    // TODO: Handle errors
    // TODO: Join the created room
}

async function joinRoom(room: Room) {
    const { id } = room;
}
</script>

<style lang="scss" scoped></style>
