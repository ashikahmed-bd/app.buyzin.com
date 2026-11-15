<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    SlidersHorizontal,
    MoreHorizontal,
    CheckCircle2,
    Clock,
    XCircle,
    Wallet,
    Users,
    CreditCard,
    TrendingUp,
    Eye,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from '@lucide/vue'

const activeTab = ref('All Plans')
const search = ref('')

const tabs = ['All Plans', 'Active', 'Trial', 'Expired', 'Cancelled']

const plans = ref([
    {
        id: 'PLN-001',
        name: 'Free Plan',
        description: 'For new sellers getting started',
        price: 0,
        interval: 'Monthly',
        subscribers: 128,
        products: 20,
        featured: false,
        status: 'Active',
        color: 'bg-gray-100 text-gray-600',
    },
    {
        id: 'PLN-002',
        name: 'Starter',
        description: 'For small businesses',
        price: 499,
        interval: 'Monthly',
        subscribers: 86,
        products: 100,
        featured: false,
        status: 'Active',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        id: 'PLN-003',
        name: 'Professional',
        description: 'For growing businesses',
        price: 999,
        interval: 'Monthly',
        subscribers: 54,
        products: 500,
        featured: true,
        status: 'Active',
        color: 'bg-violet-50 text-violet-600',
    },
    {
        id: 'PLN-004',
        name: 'Business',
        description: 'For established businesses',
        price: 1999,
        interval: 'Monthly',
        subscribers: 32,
        products: 2000,
        featured: true,
        status: 'Active',
        color: 'bg-emerald-50 text-emerald-600',
    },
    {
        id: 'PLN-005',
        name: 'Enterprise',
        description: 'For large scale businesses',
        price: 4999,
        interval: 'Yearly',
        subscribers: 12,
        products: 'Unlimited',
        featured: false,
        status: 'Expired',
        color: 'bg-amber-50 text-amber-600',
    },
])

const filteredPlans = computed(() => {
    return plans.value.filter((plan) => {
        const matchesTab =
            activeTab.value === 'All Plans' ||
            plan.status === activeTab.value

        const matchesSearch =
            plan.name.toLowerCase().includes(search.value.toLowerCase()) ||
            plan.id.toLowerCase().includes(search.value.toLowerCase())

        return matchesTab && matchesSearch
    })
})

const totalSubscribers = computed(() =>
    plans.value.reduce((total, plan) => total + plan.subscribers, 0)
)

const formatPrice = (price) =>
    new Intl.NumberFormat('en-BD').format(price)
</script>

<template>
    <div class="space-y-4">
        <!-- Page Header -->
        <div class="flex items-center justify-between gap-4 ">
            <div>
                <h1 class="text-xl font-semibold text-title">Subscriptions</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage subscription plans, pricing and seller subscriptions.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button
                    class="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-body hover:bg-gray-50">
                    <Download class="size-4" />
                    Export
                </button>

                <button
                    class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
                    <Plus class="size-4" />
                    Create Plan
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Plans</p>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <CreditCard class="size-5" />
                    </div>
                </div>
                <p class="mt-3 text-2xl font-semibold text-title">{{ plans.length }}</p>
                <p class="mt-1 text-xs text-muted">Available subscription plans</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Subscribers</p>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Users class="size-5" />
                    </div>
                </div>
                <p class="mt-3 text-2xl font-semibold text-title">{{ totalSubscribers }}</p>
                <p class="mt-1 text-xs text-muted">Across all subscription plans</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Monthly Revenue</p>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <Wallet class="size-5" />
                    </div>
                </div>
                <p class="mt-3 text-2xl font-semibold text-title">৳ 1,28,450</p>
                <p class="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                    <TrendingUp class="size-3.5" />
                    +12.5% from last month
                </p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Active Subscriptions</p>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <CheckCircle2 class="size-5" />
                    </div>
                </div>
                <p class="mt-3 text-2xl font-semibold text-title">312</p>
                <p class="mt-1 text-xs text-muted">Currently active sellers</p>
            </div>
        </div>

        <!-- Plans Overview -->
        <div class="rounded-xl bg-white p-5">
            <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 class="font-semibold text-title">Subscription Plans</h2>
                    <p class="mt-1 text-sm text-muted">Manage and organize your pricing plans.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                <div v-for="plan in plans.filter(p => p.status === 'Active')" :key="plan.id"
                    class="rounded-xl border border-border p-4"
                    :class="plan.featured ? 'border-primary/50 bg-primary' : ''">
                    <div class="flex items-center justify-between">
                        <span class="rounded-md px-2.5 py-1 text-xs font-medium" :class="plan.color">
                            {{ plan.name }}
                        </span>
                        <span v-if="plan.featured" class="text-xs font-medium text-primary">
                            Popular
                        </span>
                    </div>

                    <div class="mt-4">
                        <span class="text-2xl font-semibold text-title">
                            {{ plan.price === 0 ? 'Free' : `৳${formatPrice(plan.price)}` }}
                        </span>
                        <span v-if="plan.price > 0" class="text-sm text-muted">
                            / {{ plan.interval.toLowerCase() }}
                        </span>
                    </div>

                    <p class="mt-1 text-xs text-muted">{{ plan.description }}</p>

                    <div class="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
                        <span class="text-muted">Subscribers</span>
                        <span class="font-semibold text-title">{{ plan.subscribers }}</span>
                    </div>

                    <div class="mt-2 flex items-center justify-between text-sm">
                        <span class="text-muted">Products limit</span>
                        <span class="font-medium text-title">{{ plan.products }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Subscription Table -->
        <div class="overflow-hidden rounded-xl bg-white">
            <div class="border-b border-border p-4">
                <div class="flex items-center justify-between gap-4">
                    <div>
                        <h2 class="font-semibold text-title">All Plans</h2>
                        <p class="mt-1 text-sm text-muted">
                            View and manage all subscription plans.
                        </p>
                    </div>

                    <div class="flex flex-col gap-2 sm:flex-row">
                        <div class="relative">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                            <input v-model="search" type="text" placeholder="Search plans..."
                                class="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary sm:w-64" />
                        </div>

                        <button
                            class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body hover:bg-gray-50">
                            <SlidersHorizontal class="size-4" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50/70">
                        <tr class="text-xs font-medium uppercase tracking-wide text-muted">
                            <th class="px-5 py-3">Plan</th>
                            <th class="px-5 py-3">Price</th>
                            <th class="px-5 py-3">Billing</th>
                            <th class="px-5 py-3">Subscribers</th>
                            <th class="px-5 py-3">Products Limit</th>
                            <th class="px-5 py-3">Status</th>
                            <th class="px-5 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">
                        <tr v-for="plan in filteredPlans" :key="plan.id" class="transition hover:bg-gray-50/70">
                            <td class="px-5 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex size-10 items-center justify-center rounded-lg"
                                        :class="plan.color">
                                        <CreditCard class="size-5" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-title">{{ plan.name }}</p>
                                        <p class="mt-0.5 text-xs text-muted">{{ plan.id }}</p>
                                    </div>
                                </div>
                            </td>

                            <td class="px-5 py-4">
                                <span class="text-sm font-semibold text-title">
                                    {{ plan.price === 0 ? 'Free' : `৳${formatPrice(plan.price)}` }}
                                </span>
                            </td>

                            <td class="px-5 py-4 text-sm text-body">{{ plan.interval }}</td>

                            <td class="px-5 py-4">
                                <span class="text-sm font-medium text-title">{{ plan.subscribers }}</span>
                            </td>

                            <td class="px-5 py-4 text-sm text-body">{{ plan.products }}</td>

                            <td class="px-5 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="{
                                        'bg-emerald-50 text-emerald-700': plan.status === 'Active',
                                        'bg-amber-50 text-amber-700': plan.status === 'Trial',
                                        'bg-red-50 text-red-700': plan.status === 'Expired' || plan.status === 'Cancelled',
                                    }">
                                    <span class="size-1.5 rounded-full" :class="{
                                        'bg-emerald-500': plan.status === 'Active',
                                        'bg-amber-500': plan.status === 'Trial',
                                        'bg-red-500': plan.status === 'Expired' || plan.status === 'Cancelled',
                                    }" />
                                    {{ plan.status }}
                                </span>
                            </td>

                            <td class="px-5 py-4">
                                <div class="flex items-center justify-end gap-1">
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="View">
                                        <Eye class="size-4" />
                                    </button>
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="Edit">
                                        <Pencil class="size-4" />
                                    </button>
                                    <button class="rounded-lg p-2 text-muted hover:bg-red-50 hover:text-red-600"
                                        title="Delete">
                                        <Trash2 class="size-4" />
                                    </button>
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="More">
                                        <MoreHorizontal class="size-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr v-if="filteredPlans.length === 0">
                            <td colspan="7" class="px-5 py-12 text-center">
                                <div class="flex flex-col items-center">
                                    <Search class="size-8 text-muted" />
                                    <p class="mt-3 text-sm font-medium text-title">No plans found</p>
                                    <p class="mt-1 text-xs text-muted">Try changing your search or filter.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-muted">
                    Showing <span class="font-medium text-title">{{ filteredPlans.length }}</span>
                    of <span class="font-medium text-title">{{ plans.length }}</span> plans
                </p>

                <div class="flex items-center gap-2">
                    <button disabled class="rounded-lg border border-border p-2 text-muted disabled:opacity-40">
                        <ChevronLeft class="size-4" />
                    </button>
                    <button class="rounded-lg border border-primary bg-primary px-3 py-1.5 text-sm text-white">
                        1
                    </button>
                    <button class="rounded-lg border border-border px-3 py-1.5 text-sm text-body">
                        2
                    </button>
                    <button class="rounded-lg border border-border p-2 text-muted">
                        <ChevronRight class="size-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
