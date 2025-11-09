import HomePage from '@/pages/HomePage.vue';
import LostPage from '@/pages/LostPage.vue';
import RoomListPage from '@/pages/RoomListPage.vue';
import RoomPage from '@/pages/RoomPage.vue';
import { RouterOptions, createRouter, createWebHistory } from 'vue-router';

export const Page = {
    HOME: 'home-page',
    ROOM: 'room-page',
    LOST: 'lost-page'
};

const routes = [
    {
        path: '/',
        components: {
            page: HomePage
        },
        name: Page.HOME
    },
    {
        path: '/rooms/:id',
        components: {
            page: RoomPage
        },
        name: Page.ROOM
    },
    {
        path: '/:pathMatch(.*)*',
        components: {
            page: LostPage // 404 page
        },
        name: Page.LOST
    }
];

// @ts-ignore
const localURL = import.meta.env.BASE_URL;
console.log('localURL:', localURL);
const routerOptions = {
    history: createWebHistory(localURL),
    routes
};

export const router = createRouter(routerOptions as RouterOptions);

router.beforeEach(async (to, from, next) => {
    // Insert tracking or other stuff here that needs to be done every time a page is loaded
    next();
});
