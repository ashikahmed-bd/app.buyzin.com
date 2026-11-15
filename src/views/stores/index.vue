<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    Eye,
    MoreHorizontal,
    SlidersHorizontal,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Store,
    StoreIcon,
    BadgeCheck,
    Clock,
    Package,
    ShoppingBag,
    Wallet,
    MapPin,
    Mail,
} from '@lucide/vue'

const search = ref('')
const filter = ref('All Stores')
const currentPage = ref(1)

const tabs = [
    'All Stores',
    'Active',
    'Pending',
    'Suspended',
    'Rejected',
]

const stores = ref([
    {
        id: 'STR-001',
        name: 'Rahim Electronics',
        slug: 'rahim-electronics',
        owner: 'Rahim Uddin',
        email: 'rahim@example.com',
        category: 'Electronics',
        location: 'Dhaka, Bangladesh',
        products: 245,
        orders: 1248,
        revenue: 1250000,
        status: 'Active',
        verified: true,
        joined: 'Nov 12, 2026',
        initials: 'RE',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        id: 'STR-002',
        name: 'Fashion House BD',
        slug: 'fashion-house-bd',
        owner: 'Karim Ahmed',
        email: 'fashion@example.com',
        category: 'Fashion & Apparel',
        location: 'Chittagong, Bangladesh',
        products: 186,
        orders: 856,
        revenue: 850000,
        status: 'Active',
        verified: true,
        joined: 'Nov 10, 2026',
        initials: 'FH',
        color: 'bg-pink-100 text-pink-700',
    },
    {
        id: 'STR-003',
        name: 'Tech World Ltd.',
        slug: 'tech-world',
        owner: 'Hasan Mahmud',
        email: 'tech@example.com',
        category: 'Technology',
        location: 'Dhaka, Bangladesh',
        products: 520,
        orders: 2156,
        revenue: 2450000,
        status: 'Active',
        verified: true,
        joined: 'Nov 08, 2026',
        initials: 'TW',
        color: 'bg-violet-100 text-violet-700',
    },
    {
        id: 'STR-004',
        name: 'Maa Traders',
        slug: 'maa-traders',
        owner: 'Abdul Karim',
        email: 'maa@example.com',
        category: 'Grocery & Food',
        location: 'Rajshahi, Bangladesh',
        products: 78,
        orders: 125,
        revenue: 92000,
        status: 'Pending',
        verified: false,
        joined: 'Nov 07, 2026',
        initials: 'MT',
        color: 'bg-amber-100 text-amber-700',
    },
    {
        id: 'STR-005',
        name: 'Global Collection',
        slug: 'global-collection',
        owner: 'Sabbir Hossain',
        email: 'global@example.com',
        category: 'Fashion & Apparel',
        location: 'Sylhet, Bangladesh',
        products: 0,
        orders: 0,
        revenue: 0,
        status: 'Suspended',
        verified: false,
        joined: 'Nov 05, 2026',
        initials: 'GC',
        color: 'bg-emerald-100 text-emerald-700',
    },
    {
        id: 'STR-006',
        name: 'Smart Electronics',
        slug: 'smart-electronics',
        owner: 'Imran Hossain',
        email: 'smart@example.com',
        category: 'Electronics',
        location: 'Dhaka, Bangladesh',
        products: 312,
        orders: 978,
        revenue: 975000,
        status: 'Active',
        verified: true,
        joined: 'Nov 03, 2026',
        initials: 'SE',
        color: 'bg-cyan-100 text-cyan-700',
    },
])

const filteredStores = computed(() => {
    const keyword = search.value.toLowerCase()

    return stores.value.filter(store => {
        const matchesSearch = [
            store.id,
            store.name,
            store.owner,
            store.email,
            store.slug,
        ].some(value => value.toLowerCase().includes(keyword))

        const matchesFilter =
            filter.value === 'All Stores' ||
            store.status === filter.value

        return matchesSearch && matchesFilter
    })
})

const formatPrice = value =>
    new Intl.NumberFormat('en-BD').format(value)

const statusClass = status => ({
    Active: 'bg-emerald-50 text-emerald-700',
    Pending: 'bg-amber-50 text-amber-700',
    Suspended: 'bg-red-50 text-red-700',
    Rejected: 'bg-gray-100 text-gray-600',
}[status] || 'bg-gray-100 text-gray-600')
</script>

<template>
    <div class="space-y-5">

        <!-- Header -->
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h1 class="text-xl font-semibold text-title">Stores</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage marketplace stores, sellers and business performance.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button
                    class="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm font-medium text-body transition hover:bg-gray-50">
                    <Download :size="17" />
                    Export
                </button>

                <button
                    class="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                    <Plus :size="17" />
                    Add Store
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Stores</span>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Store :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">1,245</h3>
                <p class="text-xs text-emerald-600">+15.2% from last month</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Active Stores</span>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <BadgeCheck :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">986</h3>
                <p class="text-xs text-muted">Currently operating stores</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Pending Approval</span>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <Clock :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">48</h3>
                <p class="text-xs text-muted">Waiting for verification</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Revenue</span>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Wallet :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">৳45.8M</h3>
                <p class="text-xs text-emerald-600">+18.6% from last month</p>
            </div>

        </div>

        <!-- Stores Table -->
        <div class="overflow-hidden rounded-xl border border-border bg-white">

            <!-- Tabs -->
            <div class="overflow-x-auto border-b border-border px-4">
                <div class="flex min-w-max items-center gap-6">
                    <button v-for="tab in tabs" :key="tab" @click="filter = tab; currentPage = 1"
                        class="relative py-4 text-sm font-medium transition" :class="filter === tab
                            ? 'text-primary'
                            : 'text-muted hover:text-title'">
                        {{ tab }}

                        <span v-if="filter === tab"
                            class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"></span>
                    </button>
                </div>
            </div>

            <!-- Search & Filters -->
            <div class="flex flex-col justify-between gap-3 border-b border-border p-4 md:flex-row md:items-center">

                <div class="relative w-full md:max-w-sm">
                    <Search :size="17" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />

                    <input v-model="search" type="text" placeholder="Search store, owner or store ID..."
                        class="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-body outline-none transition placeholder:text-muted focus:border-primary" />
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <button
                        class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body transition hover:bg-gray-50">
                        <SlidersHorizontal :size="16" />
                        Filters
                    </button>

                    <button
                        class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body transition hover:bg-gray-50">
                        Category
                        <ChevronDown :size="15" />
                    </button>

                    <button
                        class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body transition hover:bg-gray-50">
                        Date Range
                        <ChevronDown :size="15" />
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full text-left">

                    <thead class="bg-gray-50/70">
                        <tr class="border-b border-border">
                            <th class="px-5 py-3.5">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Store
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Owner
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Category
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Products
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Orders
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Revenue
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Status
                            </th>

                            <th class="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">

                        <tr v-for="store in filteredStores" :key="store.id" class="transition hover:bg-gray-50/70">
                            <!-- Checkbox -->
                            <td class="px-5 py-4">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </td>

                            <!-- Store -->
                            <td class="px-4 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold"
                                        :class="store.color">
                                        {{ store.initials }}
                                    </div>

                                    <div>
                                        <div class="flex items-center gap-1.5">
                                            <p class="text-sm font-semibold text-title">
                                                {{ store.name }}
                                            </p>

                                            <BadgeCheck v-if="store.verified" :size="15" class="text-blue-600" />
                                        </div>

                                        <p class="mt-1 text-xs text-muted">
                                            {{ store.id }} · /{{ store.slug }}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <!-- Owner -->
                            <td class="px-4 py-4">
                                <p class="text-sm font-medium text-title">
                                    {{ store.owner }}
                                </p>
                                <p class="mt-1 flex items-center gap-1 text-xs text-muted">
                                    <Mail :size="12" />
                                    {{ store.email }}
                                </p>
                            </td>

                            <!-- Category -->
                            <td class="px-4 py-4">
                                <span class="text-sm text-body">
                                    {{ store.category }}
                                </span>
                            </td>

                            <!-- Products -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-medium text-title">
                                    {{ formatPrice(store.products) }}
                                </span>
                            </td>

                            <!-- Orders -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-medium text-title">
                                    {{ formatPrice(store.orders) }}
                                </span>
                            </td>

                            <!-- Revenue -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-semibold text-title">
                                    ৳{{ formatPrice(store.revenue) }}
                                </span>
                            </td>

                            <!-- Status -->
                            <td class="px-4 py-4">
                                <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                    :class="statusClass(store.status)">
                                    {{ store.status }}
                                </span>
                            </td>

                            <!-- Action -->
                            <td class="px-5 py-4">
                                <div class="flex justify-end gap-1">
                                    <button title="View store"
                                        class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-primary">
                                        <Eye :size="16" />
                                    </button>

                                    <button title="More actions"
                                        class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-title">
                                        <MoreHorizontal :size="16" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- Empty State -->
                        <tr v-if="!filteredStores.length">
                            <td colspan="9" class="px-5 py-14 text-center">
                                <Store :size="30" class="mx-auto text-muted" />
                                <p class="mt-2 text-sm font-medium text-title">
                                    No stores found
                                </p>
                                <p class="mt-1 text-xs text-muted">
                                    Try changing your search or filter.
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex flex-col justify-between gap-3 border-t border-border px-4 py-3.5 sm:flex-row sm:items-center">
                <p class="text-sm text-muted">
                    Showing
                    <span class="font-medium text-title">
                        {{ filteredStores.length }}
                    </span>
                    of
                    <span class="font-medium text-title">
                        {{ stores.length }}
                    </span>
                    stores
                </p>

                <div class="flex items-center gap-1">
                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50 disabled:opacity-40"
                        :disabled="currentPage === 1">
                        <ChevronLeft :size="16" />
                    </button>

                    <button class="size-9 rounded-lg bg-primary text-sm font-medium text-white">
                        1
                    </button>

                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">
                        2
                    </button>

                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">
                        3
                    </button>

                    <span class="px-1 text-sm text-muted">...</span>

                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">
                        12
                    </button>

                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50">
                        <ChevronRight :size="16" />
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
