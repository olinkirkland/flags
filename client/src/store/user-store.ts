import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const socketId = ref<string | null>(null);

    function setSocketId(id: string) {
        socketId.value = id;
    }

    return { user, socketId, setSocketId };
});
