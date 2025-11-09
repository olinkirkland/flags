<template>
    <Card>
        <section>ROOM PAGE</section>
        <button @click="leaveRoom">Leave Room</button>
    </Card>
</template>

<script lang="ts" setup>
import { Page, router } from '@/router';

const id = router.currentRoute.value.params.id as string;
if (!id) router.push({ name: Page.LOST });

function leaveRoom() {
    router.push({ name: Page.HOME });
}
</script>

<style lang="scss" scoped></style>
