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
    Users,
    UserCheck,
    UserPlus,
    Wallet,
    Building2,
    Mail,
    Phone,
    MapPin,
    BadgeCheck,
} from '@lucide/vue'

const search = ref('')
const filter = ref('All Customers')
const currentPage = ref(1)

const tabs = [
    'All Customers',
    'Verified',
    'Pending',
    'Active',
    'Inactive',
]

const customers = ref([
    {
        id: 'CUS-001',
        name: 'Rahim Enterprise',
        email: 'rahim@example.com',
        phone: '+880 1712-345678',
        company: 'Rahim Enterprise Ltd.',
        type: 'Wholesale',
        location: 'Dhaka, Bangladesh',
        orders: 124,
        spent: 245000,
        status: 'Active',
        verified: true,
        joined: 'Nov 12, 2026',
        initials: 'RE',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        id: 'CUS-002',
        name: 'Fashion House BD',
        email: 'fashion@example.com',
        phone: '+880 1812-345678',
        company: 'Fashion House',
        type: 'Retailer',
        location: 'Chittagong, Bangladesh',
        orders: 56,
        spent: 125000,
        status: 'Active',
        verified: true,
        joined: 'Nov 10, 2026',
        initials: 'FH',
        color: 'bg-pink-100 text-pink-700',
    },
    {
        id: 'CUS-003',
        name: 'Tech World Ltd.',
        email: 'tech@example.com',
        phone: '+880 1912-345678',
        company: 'Tech World Limited',
        type: 'Distributor',
        location: 'Dhaka, Bangladesh',
        orders: 89,
        spent: 567000,
        status: 'Active',
        verified: true,
        joined: 'Nov 08, 2026',
        initials: 'TW',
        color: 'bg-violet-100 text-violet-700',
    },
    {
        id: 'CUS-004',
        name: 'Maa Traders',
        email: 'maa@example.com',
        phone: '+880 1612-345678',
        company: 'Maa Traders',
        type: 'Wholesale',
        location: 'Rajshahi, Bangladesh',
        orders: 12,
        spent: 92000,
        status: 'Pending',
        verified: false,
        joined: 'Nov 07, 2026',
        initials: 'MT',
        color: 'bg-amber-100 text-amber-700',
    },
    {
        id: 'CUS-005',
        name: 'Global Collection',
        email: 'global@example.com',
        phone: '+880 1512-345678',
        company: 'Global Collection BD',
        type: 'Retailer',
        location: 'Sylhet, Bangladesh',
        orders: 32,
        spent: 324000,
        status: 'Inactive',
        verified: false,
        joined: 'Nov 05, 2026',
        initials: 'GC',
        color: 'bg-emerald-100 text-emerald-700',
    },
    {
        id: 'CUS-006',
        name: 'Smart Electronics',
        email: 'smart@example.com',
        phone: '+880 1312-345678',
        company: 'Smart Electronics',
        type: 'Distributor',
        location: 'Dhaka, Bangladesh',
        orders: 76,
        spent: 412000,
        status: 'Active',
        verified: true,
        joined: 'Nov 03, 2026',
        initials: 'SE',
        color: 'bg-cyan-100 text-cyan-700',
    },
])

const filteredCustomers = computed(() => {
    const keyword = search.value.toLowerCase()

    return customers.value.filter(customer => {
        const matchesSearch = [
            customer.id,
            customer.name,
            customer.email,
            customer.company,
            customer.phone,
        ].some(value => value.toLowerCase().includes(keyword))

        const matchesFilter =
            filter.value === 'All Customers' ||
            (filter.value === 'Verified' && customer.verified) ||
            (filter.value === 'Pending' && customer.status === 'Pending') ||
            customer.status === filter.value

        return matchesSearch && matchesFilter
    })
})

const formatPrice = value =>
    new Intl.NumberFormat('en-BD').format(value)

const statusClass = status => ({
    Active: 'bg-emerald-50 text-emerald-700',
    Pending: 'bg-amber-50 text-amber-700',
    Inactive: 'bg-gray-100 text-gray-600',
}[status] || 'bg-gray-100 text-gray-600')
</script>

<template>
    <div class="space-y-5">

        <!-- Header -->
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h1 class="text-xl font-semibold text-title">Customers</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage your marketplace customers and business accounts.
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
                    Add Customer
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Customers</span>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Users :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">2,845</h3>
                <p class="text-xs text-emerald-600">+12.8% from last month</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Verified Customers</span>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <UserCheck :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">2,156</h3>
                <p class="text-xs text-muted">Verified business accounts</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">New Customers</span>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <UserPlus :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">186</h3>
                <p class="text-xs text-emerald-600">This month</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Outstanding Balance</span>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <Wallet :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    ৳5,75,000
                </h3>
                <p class="text-xs text-muted">Total unpaid amount</p>
            </div>

        </div>

        <!-- Customer Table -->
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

                    <input v-model="search" type="text" placeholder="Search name, email, phone or ID..."
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
                        Customer Type
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
                                Customer
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Business
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Customer Type
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Orders
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Total Spent
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Verification
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

                        <tr v-for="customer in filteredCustomers" :key="customer.id"
                            class="transition hover:bg-gray-50/70">
                            <!-- Checkbox -->
                            <td class="px-5 py-4">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </td>

                            <!-- Customer -->
                            <td class="px-4 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                                        :class="customer.color">
                                        {{ customer.initials }}
                                    </div>

                                    <div>
                                        <p class="text-sm font-semibold text-title">
                                            {{ customer.name }}
                                        </p>

                                        <p class="mt-1 flex items-center gap-1 text-xs text-muted">
                                            <Mail :size="12" />
                                            {{ customer.email }}
                                        </p>

                                        <p class="mt-0.5 flex items-center gap-1 text-xs text-muted">
                                            <Phone :size="12" />
                                            {{ customer.phone }}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <!-- Business -->
                            <td class="px-4 py-4">
                                <p class="text-sm font-medium text-title">
                                    {{ customer.company }}
                                </p>
                                <p class="mt-1 flex items-center gap-1 text-xs text-muted">
                                    <MapPin :size="12" />
                                    {{ customer.location }}
                                </p>
                            </td>

                            <!-- Type -->
                            <td class="px-4 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-md border border-border bg-gray-50 px-2.5 py-1 text-xs font-medium text-body">
                                    <Building2 :size="13" />
                                    {{ customer.type }}
                                </span>
                            </td>

                            <!-- Orders -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-medium text-title">
                                    {{ customer.orders }}
                                </span>
                                <p class="mt-0.5 text-xs text-muted">Orders</p>
                            </td>

                            <!-- Spent -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-semibold text-title">
                                    ৳{{ formatPrice(customer.spent) }}
                                </span>
                            </td>

                            <!-- Verification -->
                            <td class="px-4 py-4">
                                <span v-if="customer.verified"
                                    class="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                                    <BadgeCheck :size="15" />
                                    Verified
                                </span>

                                <span v-else class="inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                                    <Clock :size="14" />
                                    Unverified
                                </span>
                            </td>

                            <!-- Status -->
                            <td class="px-4 py-4">
                                <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                    :class="statusClass(customer.status)">
                                    {{ customer.status }}
                                </span>
                            </td>

                            <!-- Action -->
                            <td class="px-5 py-4">
                                <div class="flex justify-end gap-1">
                                    <button title="View customer"
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
                        <tr v-if="!filteredCustomers.length">
                            <td colspan="9" class="px-5 py-14 text-center">
                                <Users :size="30" class="mx-auto text-muted" />
                                <p class="mt-2 text-sm font-medium text-title">
                                    No customers found
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
                        {{ filteredCustomers.length }}
                    </span>
                    of
                    <span class="font-medium text-title">
                        {{ customers.length }}
                    </span>
                    customers
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
