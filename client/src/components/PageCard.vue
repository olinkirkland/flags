<template>
    <div class="layout">
        <Card>
            <slot></slot>
        </Card>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
