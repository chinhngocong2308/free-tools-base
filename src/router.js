import TinhBHXHBatBuoc from './components/TinhBHXHBatBuoc.vue'
import TinhThueTNCN from './components/TinhThueTNCN.vue'
import TinhBHXHTuNguyen from './components/TinhBHXHTuNguyen.vue'
import TinhBHXHBatBuocTuNguyen from './components/TinhBHXHBatBuocTuNguyen.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/tinh-thue-tncn', component: TinhThueTNCN},
    { path: '/tinh-bhxh-bat-buoc', component: TinhBHXHBatBuoc },
    { path: '/tinh-bhxh-tu-nguyen', component: TinhBHXHTuNguyen},
    { path: '/tinh-bhxh-bat-buoc-va-tu-nguyen', component: TinhBHXHBatBuocTuNguyen}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router