import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
    const game = ref();

    // Actions

    return { game };
});
