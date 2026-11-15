<script setup>
import {
    LayoutDashboard,
    Package,
    ClipboardList,
    Users,
    Store,
    Grid2X2,
    Tag,
    BriefcaseBusiness,
    Megaphone,
    ChartNoAxesCombined,
    Settings,
    Headset,
    LogOut
} from '@lucide/vue'

const navigation = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
    { label: 'Products', icon: Package, to: '/products', children: true },
    { label: 'Orders', icon: ClipboardList, to: '/orders' },
    { label: 'Customers', icon: Users, to: '/customers' },
    { label: 'Stores', icon: Store, to: '/stores' },
    { label: 'Categories', icon: Grid2X2, to: '/categories' },
    { label: 'Brands', icon: Tag, to: '/brands' },
    { label: 'Subscription', icon: BriefcaseBusiness, to: '/subscription' },
    { label: 'Marketing', icon: Megaphone, to: '/marketing', children: true },
    { label: 'Analytics', icon: ChartNoAxesCombined, to: '/analytics', children: true },
    { label: 'Settings', icon: Settings, to: '/settings', children: true },
    { label: 'Support', icon: Headset, to: '/support' },
]
</script>

<template>
    <aside class="sticky top-0 flex h-screen w-56 shrink-0 flex-col bg-white">

        <!-- Logo -->
        <div class="flex shrink-0 items-center border-b border-border px-4 py-2.5">
            <RouterLink to="/">
                <img src="/logo.svg" alt="Buyzin Logo" class="h-11 w-auto object-contain" />
            </RouterLink>
        </div>

        <!-- Navigation -->
        <nav class="scrollbar-thin flex-1 overflow-y-auto px-2.5 py-2">

            <p class="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Main Menu
            </p>

            <RouterLink v-for="item in navigation" :key="item.label" :to="item.to"
                class="group flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-all duration-200"
                :class="$route.path === item.to
                    ? 'bg-primary text-white'
                    : 'text-body hover:text-primary'">
                <component :is="item.icon" :size="19" :stroke-width="1.8" class="shrink-0" :class="$route.path === item.to
                    ? 'text-white'
                    : 'text-muted group-hover:text-primary'" />

                <span class="flex-1">{{ item.label }}</span>
            </RouterLink>

            <button type="button"
                class="group w-full flex items-center gap-3 rounded px-3 py-2 text-body hover:bg-surface hover:text-red-600 text-sm font-medium transition-all duration-200">
                <LogOut :size="19" :stroke-width="1.8" class="shrink-0" />
                <span class="flex-1 text-left">Logout</span>
            </button>

        </nav>
    </aside>
</template>
