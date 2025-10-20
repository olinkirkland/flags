<template>
    <div class="container">
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Room } from './room';
import { server } from './main';

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

<style lang="scss">
@use 'assets/scss/reset.scss';
@use 'assets/scss/styles.scss';
@use 'assets/scss/variables.scss';
</style>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
}
.room {
    display: flex;
    flex-direction: column;
}
</style>
