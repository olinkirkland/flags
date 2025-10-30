<template>
    <div class="app-layout">
        <router-view name="page" v-slot="{ Component, route }">
            <div class="pattern"></div>
            <Transition name="page-transition" mode="out-in">
                <component :is="Component" />
            </Transition>
        </router-view>
        <!-- <the-modal-container /> -->
        <!-- <the-tooltip-container /> -->
    </div>
</template>

<script setup lang="ts"></script>

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

.page-transition-enter-active,
.page-transition-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-transition-enter-from,
.page-transition-leave-to {
    opacity: 0;
    transform: translateY(1rem);
}
</style>
