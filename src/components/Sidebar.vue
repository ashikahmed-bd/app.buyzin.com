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
    ChevronDown,
    Rocket,
} from '@lucide/vue'

const navigation = [
    { label: 'Dashboard', icon: LayoutDashboard, active: true },
    { label: 'Products', icon: Package, children: true },
    { label: 'Orders', icon: ClipboardList },
    { label: 'Customers', icon: Users },
    { label: 'Stores', icon: Store },
    { label: 'Categories', icon: Grid2X2 },
    { label: 'Brands', icon: Tag },
    { label: 'Subscription', icon: BriefcaseBusiness },
    { label: 'Marketing', icon: Megaphone, children: true },
    { label: 'Analytics', icon: ChartNoAxesCombined, children: true },
    { label: 'Settings', icon: Settings, children: true },
    { label: 'Support', icon: Headset },
]
</script>

<template>
    <aside class="sticky top-0 h-screen w-56 shrink-0 bg-white">
        <div class="flex shrink-0 items-center border-b border-border px-4 py-2.5">
            <img src="/logo.svg" alt="Buyzin Logo" class="h-11 w-auto object-contain" />
        </div>

        <nav class="scrollbar-thin flex-1  overflow-y-auto px-2.5 py-2">
            <p class="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Main Menu
            </p>

            <a v-for="item in navigation" :key="item.label" href="#"
                class="group flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-all duration-200"
                :class="item.active
                    ? 'bg-primary text-white'
                    : 'text-body hover:text-primary'">
                <component :is="item.icon" :size="19" :stroke-width="1.8" class="shrink-0"
                    :class="item.active ? 'text-white' : 'text-muted group-hover:text-primary'" />

                <span class="flex-1">{{ item.label }}</span>
            </a>
        </nav>
    </aside>
</template>
