<script setup>
import { ref, computed } from 'vue'
import {
    Search, Plus, Download, Eye, ChevronDown,
    ChevronLeft, ChevronRight, SlidersHorizontal,
    Package, Clock, Truck, CheckCircle2, XCircle
} from '@lucide/vue'

const search = ref('')
const status = ref('All Orders')
const currentPage = ref(1)

const orders = ref([
    { id: 'ORD-2026-001', customer: 'Rahim Enterprise', email: 'rahim@example.com', date: 'Nov 14, 2026', items: 12, total: 24500, payment: 'Paid', status: 'Delivered' },
    { id: 'ORD-2026-002', customer: 'Fashion House BD', email: 'fashion@example.com', date: 'Nov 14, 2026', items: 8, total: 18500, payment: 'Unpaid', status: 'Pending' },
    { id: 'ORD-2026-003', customer: 'Tech World Ltd.', email: 'tech@example.com', date: 'Nov 13, 2026', items: 24, total: 56700, payment: 'Paid', status: 'Processing' },
    { id: 'ORD-2026-004', customer: 'Maa Traders', email: 'maa@example.com', date: 'Nov 13, 2026', items: 5, total: 9200, payment: 'Paid', status: 'Shipped' },
    { id: 'ORD-2026-005', customer: 'Global Collection', email: 'global@example.com', date: 'Nov 12, 2026', items: 16, total: 32400, payment: 'Unpaid', status: 'Cancelled' },
    { id: 'ORD-2026-006', customer: 'Smart Electronics', email: 'smart@example.com', date: 'Nov 12, 2026', items: 9, total: 41200, payment: 'Paid', status: 'Delivered' },
    { id: 'ORD-2026-007', customer: 'New Fashion Store', email: 'newfashion@example.com', date: 'Nov 11, 2026', items: 7, total: 15700, payment: 'Paid', status: 'Processing' },
])

const tabs = ['All Orders', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

const filteredOrders = computed(() => {
    return orders.value.filter(order => {
        const matchesStatus = status.value === 'All Orders' || order.status === status.value
        const keyword = search.value.toLowerCase()
        const matchesSearch = order.id.toLowerCase().includes(keyword) ||
            order.customer.toLowerCase().includes(keyword) ||
            order.email.toLowerCase().includes(keyword)

        return matchesStatus && matchesSearch
    })
})

const formatPrice = value => new Intl.NumberFormat('en-BD').format(value)

const statusClass = value => ({
    Pending: 'bg-amber-50 text-amber-700',
    Processing: 'bg-blue-50 text-blue-700',
    Shipped: 'bg-violet-50 text-violet-700',
    Delivered: 'bg-emerald-50 text-emerald-700',
    Cancelled: 'bg-red-50 text-red-700',
}[value] || 'bg-gray-100 text-gray-700')

const paymentClass = value => value === 'Paid'
    ? 'bg-emerald-50 text-emerald-700'
    : 'bg-amber-50 text-amber-700'
</script>

<template>
    <div class="space-y-4">
        <!-- Page Header -->
        <div class="flex items-center justify-between gap-4">
            <div>
                <h1 class="text-xl font-semibold text-title">Orders</h1>
                <p class="mt-1 text-sm text-muted">Manage and track all marketplace orders.</p>
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
                    Create Order
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Orders</span>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Package :size="19" />
                    </div>
                </div>
                <div class="flex items-end gap-2">
                    <h3 class="text-2xl font-semibold text-title">1,284</h3>
                    <span class="mb-1 text-xs font-medium text-emerald-600">+12.5%</span>
                </div>
                <p class="text-xs text-muted">Compared to last month</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Pending Orders</span>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <Clock :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">48</h3>
                <p class="text-xs text-muted">Awaiting confirmation</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Processing</span>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Truck :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">126</h3>
                <p class="text-xs text-muted">Currently being processed</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Delivered</span>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <CheckCircle2 :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">986</h3>
                <p class="text-xs text-muted">Successfully completed</p>
            </div>
        </div>

        <!-- Orders Table -->
        <div class="overflow-hidden rounded-xl border border-border bg-white">
            <!-- Tabs -->
            <div class="overflow-x-auto border-b border-border px-4">
                <div class="flex min-w-max items-center gap-6">
                    <button v-for="tab in tabs" :key="tab" @click="status = tab; currentPage = 1"
                        class="relative py-4 text-sm font-medium transition"
                        :class="status === tab ? 'text-primary' : 'text-muted hover:text-title'">
                        {{ tab }}
                        <span v-if="status === tab"
                            class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"></span>
                    </button>
                </div>
            </div>

            <!-- Filters -->
            <div class="flex flex-col justify-between gap-3 border-b border-border p-4 md:flex-row md:items-center">
                <div class="relative w-full md:max-w-sm">
                    <Search :size="17" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input v-model="search" type="text" placeholder="Search order ID, customer..."
                        class="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-body outline-none transition placeholder:text-muted focus:border-primary" />
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <button
                        class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body hover:bg-gray-50">
                        <SlidersHorizontal :size="16" />
                        Filters
                    </button>
                    <button
                        class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body hover:bg-gray-50">
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
                            <th class="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Order ID
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Customer
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Date</th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Items</th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Total</th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Payment
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">Status</th>
                            <th class="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                                Action</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">
                        <tr v-for="order in filteredOrders" :key="order.id" class="transition hover:bg-gray-50/70">
                            <td class="px-5 py-4">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </td>
                            <td class="px-4 py-4">
                                <span class="text-sm font-semibold text-primary">{{ order.id }}</span>
                            </td>
                            <td class="px-4 py-4">
                                <p class="text-sm font-medium text-title">{{ order.customer }}</p>
                                <p class="mt-0.5 text-xs text-muted">{{ order.email }}</p>
                            </td>
                            <td class="px-4 py-4 text-sm text-body">{{ order.date }}</td>
                            <td class="px-4 py-4 text-sm text-body">{{ order.items }} items</td>
                            <td class="px-4 py-4 text-sm font-semibold text-title">৳{{ formatPrice(order.total) }}</td>
                            <td class="px-4 py-4">
                                <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                    :class="paymentClass(order.payment)">
                                    {{ order.payment }}
                                </span>
                            </td>
                            <td class="px-4 py-4">
                                <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                    :class="statusClass(order.status)">
                                    {{ order.status }}
                                </span>
                            </td>
                            <td class="px-5 py-4 text-right">
                                <button
                                    class="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-primary"
                                    title="View order">
                                    <Eye :size="16" />
                                </button>
                            </td>
                        </tr>

                        <tr v-if="!filteredOrders.length">
                            <td colspan="9" class="px-5 py-12 text-center">
                                <Package :size="28" class="mx-auto text-muted" />
                                <p class="mt-2 text-sm font-medium text-title">No orders found</p>
                                <p class="mt-1 text-xs text-muted">Try changing your search or filter.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex flex-col justify-between gap-3 border-t border-border px-4 py-3.5 sm:flex-row sm:items-center">
                <p class="text-sm text-muted">
                    Showing <span class="font-medium text-title">{{ filteredOrders.length }}</span> of
                    <span class="font-medium text-title">{{ orders.length }}</span> orders
                </p>

                <div class="flex items-center gap-1">
                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50 disabled:opacity-40"
                        :disabled="currentPage === 1" @click="currentPage--">
                        <ChevronLeft :size="16" />
                    </button>
                    <button class="size-9 rounded-lg bg-primary text-sm font-medium text-white">1</button>
                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">2</button>
                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">3</button>
                    <span class="px-1 text-sm text-muted">...</span>
                    <button class="size-9 rounded-lg text-sm text-body hover:bg-gray-100">12</button>
                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50"
                        @click="currentPage++">
                        <ChevronRight :size="16" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
