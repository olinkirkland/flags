<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid var(--border);
    background-color: var(--background);
    padding: 2rem;
    border-radius: 5px;
    box-shadow: var(--shadow-md);
}
</style>
