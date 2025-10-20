import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTickStore = defineStore('tick', () => {
    const tick = ref(0);

    // Functions
    function setTick(newTick: number) {
        tick.value = newTick;
    }

    return { tick, setTick };
});
