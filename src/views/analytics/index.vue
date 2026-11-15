<script setup>
import { ref, computed } from 'vue'
import {
    TrendingUp,
    TrendingDown,
    ShoppingCart,
    Wallet,
    Users,
    Package,
    Download,
    CalendarDays,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal,
    Eye,
    ShoppingBag,
    Store,
    CreditCard,
} from '@lucide/vue'

const selectedRange = ref('Last 30 Days')

const ranges = [
    'Today',
    'Yesterday',
    'Last 7 Days',
    'Last 30 Days',
    'This Month',
    'Last Month',
    'This Year',
]

const stats = [
    {
        label: 'Total Revenue',
        value: '৳ 12,84,500',
        change: '+18.4%',
        positive: true,
        description: 'Compared to previous period',
        icon: Wallet,
        color: 'bg-blue-50 text-blue-600',
    },
    {
        label: 'Total Orders',
        value: '2,458',
        change: '+12.8%',
        positive: true,
        description: 'Compared to previous period',
        icon: ShoppingCart,
        color: 'bg-violet-50 text-violet-600',
    },
    {
        label: 'Total Customers',
        value: '1,842',
        change: '+8.2%',
        positive: true,
        description: 'Compared to previous period',
        icon: Users,
        color: 'bg-emerald-50 text-emerald-600',
    },
    {
        label: 'Products Sold',
        value: '8,624',
        change: '-2.4%',
        positive: false,
        description: 'Compared to previous period',
        icon: Package,
        color: 'bg-orange-50 text-orange-600',
    },
]

const revenueData = [
    { label: 'Oct 17', revenue: 32000, orders: 45 },
    { label: 'Oct 18', revenue: 45000, orders: 62 },
    { label: 'Oct 19', revenue: 38000, orders: 54 },
    { label: 'Oct 20', revenue: 58000, orders: 78 },
    { label: 'Oct 21', revenue: 42000, orders: 59 },
    { label: 'Oct 22', revenue: 68000, orders: 92 },
    { label: 'Oct 23', revenue: 52000, orders: 74 },
    { label: 'Oct 24', revenue: 75000, orders: 105 },
    { label: 'Oct 25', revenue: 62000, orders: 88 },
    { label: 'Oct 26', revenue: 85000, orders: 118 },
    { label: 'Oct 27', revenue: 72000, orders: 98 },
    { label: 'Oct 28', revenue: 92000, orders: 126 },
]

const maxRevenue = Math.max(...revenueData.map(item => item.revenue))

const topProducts = [
    { name: 'Samsung Galaxy S25', category: 'Electronics', sold: 425, revenue: 425000, percentage: 88 },
    { name: 'Apple iPhone 16', category: 'Electronics', sold: 318, revenue: 318000, percentage: 72 },
    { name: 'Men Premium T-Shirt', category: 'Fashion', sold: 286, revenue: 143000, percentage: 58 },
    { name: 'Wireless Headphones', category: 'Accessories', sold: 245, revenue: 122500, percentage: 46 },
    { name: 'Smart Watch Pro', category: 'Electronics', sold: 198, revenue: 99000, percentage: 34 },
]

const topCategories = [
    { name: 'Electronics', orders: 845, revenue: 625000, percentage: 85, color: 'bg-blue-500' },
    { name: 'Fashion & Apparel', orders: 624, revenue: 385000, percentage: 68, color: 'bg-violet-500' },
    { name: 'Home & Living', orders: 425, revenue: 245000, percentage: 48, color: 'bg-emerald-500' },
    { name: 'Accessories', orders: 325, revenue: 185000, percentage: 35, color: 'bg-orange-500' },
    { name: 'Beauty & Health', orders: 239, revenue: 125000, percentage: 24, color: 'bg-pink-500' },
]

const topSellers = [
    { name: 'Tech World BD', email: 'techworld@example.com', orders: 425, revenue: 425000, status: 'Verified', initials: 'TW', color: 'bg-blue-100 text-blue-700' },
    { name: 'Fashion House', email: 'fashion@example.com', orders: 318, revenue: 318000, status: 'Verified', initials: 'FH', color: 'bg-violet-100 text-violet-700' },
    { name: 'Smart Gadgets', email: 'smart@example.com', orders: 286, revenue: 286000, status: 'Verified', initials: 'SG', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Home Essentials', email: 'home@example.com', orders: 215, revenue: 215000, status: 'Pending', initials: 'HE', color: 'bg-orange-100 text-orange-700' },
]

const recentOrders = [
    { id: '#BZ-10245', customer: 'Rahim Ahmed', date: 'Nov 15, 2026', amount: 12500, status: 'Completed' },
    { id: '#BZ-10244', customer: 'Karim Hasan', date: 'Nov 15, 2026', amount: 8500, status: 'Processing' },
    { id: '#BZ-10243', customer: 'Nusrat Jahan', date: 'Nov 14, 2026', amount: 4200, status: 'Pending' },
    { id: '#BZ-10242', customer: 'Sabbir Hossain', date: 'Nov 14, 2026', amount: 15600, status: 'Completed' },
    { id: '#BZ-10241', customer: 'Tanvir Islam', date: 'Nov 13, 2026', amount: 6800, status: 'Cancelled' },
]

const formatCurrency = value =>
    `৳${new Intl.NumberFormat('en-BD').format(value)}`

const orderStatusClass = status => ({
    Completed: 'bg-emerald-50 text-emerald-700',
    Processing: 'bg-blue-50 text-blue-700',
    Pending: 'bg-amber-50 text-amber-700',
    Cancelled: 'bg-red-50 text-red-700',
}[status])

const totalRevenue = computed(() =>
    revenueData.reduce((total, item) => total + item.revenue, 0)
)
</script>

<template>
    <div class="space-y-4">

        <!-- Header -->
        <div class="flex items-center justify-between gap-4">
            <div>
                <h1 class="text-xl font-semibold text-title">Analytics</h1>
                <p class="mt-1 text-sm text-muted">
                    Track marketplace performance, sales, customers and sellers.
                </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <select v-model="selectedRange"
                    class="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-body outline-none focus:border-primary">
                    <option v-for="range in ranges" :key="range" :value="range">
                        {{ range }}
                    </option>
                </select>

                <button
                    class="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-body hover:bg-gray-50">
                    <Download class="size-4" />
                    Export Report
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">{{ stat.label }}</p>
                    <div class="rounded-lg p-2" :class="stat.color">
                        <component :is="stat.icon" class="size-5" />
                    </div>
                </div>

                <p class="text-2xl font-semibold text-title">{{ stat.value }}</p>

                <div class="flex flex-wrap items-center gap-1.5">
                    <span class="inline-flex items-center gap-0.5 text-xs font-medium"
                        :class="stat.positive ? 'text-emerald-600' : 'text-red-600'">
                        <TrendingUp v-if="stat.positive" class="size-3.5" />
                        <TrendingDown v-else class="size-3.5" />
                        {{ stat.change }}
                    </span>
                    <span class="text-xs text-muted">{{ stat.description }}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <!-- Revenue Chart -->
            <div class="rounded-xl bg-white p-4 xl:col-span-2">
                <div class="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <h2 class="font-semibold text-title">Revenue Overview</h2>
                        <p class="mt-1 text-sm text-muted">Revenue performance over time</p>
                    </div>
                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100">
                        <MoreHorizontal class="size-5" />
                    </button>
                </div>

                <div class="flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p class="text-xs text-muted">Total Revenue</p>
                        <p class="mt-1 text-2xl font-semibold text-title">
                            {{ formatCurrency(totalRevenue) }}
                        </p>
                    </div>
                    <div class="flex items-center gap-4 text-xs">
                        <span class="flex items-center gap-1.5 text-muted">
                            <span class="size-2 rounded-full bg-primary"></span>
                            Revenue
                        </span>
                        <span class="flex items-center gap-1.5 text-muted">
                            <span class="size-2 rounded-full bg-violet-300"></span>
                            Orders
                        </span>
                    </div>
                </div>

                <!-- Bar Chart -->
                <div class="mt-6">
                    <div class="flex h-56 items-end gap-2 border-b border-border pb-2 sm:gap-3">
                        <div v-for="item in revenueData" :key="item.label"
                            class="group flex h-full min-w-0 flex-1 flex-col justify-end">
                            <div class="relative flex h-full items-end justify-center gap-1">
                                <div class="w-full max-w-5 rounded-t-sm bg-primary transition hover:opacity-75"
                                    :style="{ height: `${(item.revenue / maxRevenue) * 100}%` }"
                                    :title="`${item.label}: ${formatCurrency(item.revenue)}`"></div>
                                <div class="hidden w-full max-w-5 rounded-t-sm bg-violet-300 sm:block"
                                    :style="{ height: `${(item.orders / 130) * 100}%` }"
                                    :title="`${item.orders} orders`"></div>
                            </div>
                            <span class="mt-2 truncate text-center text-[10px] text-muted sm:text-xs">
                                {{ item.label }}
                            </span>
                        </div>
                    </div>

                    <div class="mt-3 flex justify-between text-xs text-muted">
                        <span>Daily performance</span>
                        <span>{{ selectedRange }}</span>
                    </div>
                </div>
            </div>

            <!-- Order Summary -->
            <div class="rounded-xl bg-white p-4">
                <div>
                    <h2 class="font-semibold text-title">Order Summary</h2>
                    <p class="mt-1 text-sm text-muted">Order status breakdown</p>
                </div>

                <div class="mt-7 flex items-center justify-center">
                    <div class="relative flex size-44 items-center justify-center rounded-full"
                        style="background: conic-gradient(#10b981 0% 62%, #3b82f6 62% 82%, #f59e0b 82% 94%, #ef4444 94% 100%)">
                        <div class="flex size-32 flex-col items-center justify-center rounded-full bg-surface">
                            <p class="text-3xl font-semibold text-title">2,458</p>
                            <p class="mt-1 text-xs text-muted">Total Orders</p>
                        </div>
                    </div>
                </div>

                <div class="mt-7 space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="size-2.5 rounded-full bg-emerald-500"></span>
                            <span class="text-sm text-body">Completed</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-semibold text-title">1,524</span>
                            <span class="ml-1 text-xs text-muted">62%</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="size-2.5 rounded-full bg-blue-500"></span>
                            <span class="text-sm text-body">Processing</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-semibold text-title">492</span>
                            <span class="ml-1 text-xs text-muted">20%</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="size-2.5 rounded-full bg-amber-500"></span>
                            <span class="text-sm text-body">Pending</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-semibold text-title">295</span>
                            <span class="ml-1 text-xs text-muted">12%</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="size-2.5 rounded-full bg-red-500"></span>
                            <span class="text-sm text-body">Cancelled</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-semibold text-title">147</span>
                            <span class="ml-1 text-xs text-muted">6%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <!-- Top Products -->
            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="font-semibold text-title">Top Selling Products</h2>
                        <p class="mt-1 text-sm text-muted">Best performing products</p>
                    </div>
                    <button class="text-sm font-medium text-primary hover:underline">View All</button>
                </div>

                <div class="mt-5 space-y-5">
                    <div v-for="(product, index) in topProducts" :key="product.name">
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                                <div
                                    class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-body">
                                    {{ index + 1 }}
                                </div>
                                <div class="min-w-0">
                                    <p class="truncate text-sm font-medium text-title">{{ product.name }}</p>
                                    <p class="mt-0.5 text-xs text-muted">{{ product.category }} · {{ product.sold }}
                                        sold</p>
                                </div>
                            </div>
                            <p class="shrink-0 text-sm font-semibold text-title">
                                {{ formatCurrency(product.revenue) }}
                            </p>
                        </div>
                        <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full rounded-full bg-primary" :style="{ width: `${product.percentage}%` }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top Categories -->
            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="font-semibold text-title">Top Categories</h2>
                        <p class="mt-1 text-sm text-muted">Category wise sales performance</p>
                    </div>
                    <button class="text-sm font-medium text-primary hover:underline">View All</button>
                </div>

                <div class="mt-5 space-y-5">
                    <div v-for="category in topCategories" :key="category.name">
                        <div class="mb-2 flex items-center justify-between gap-3">
                            <div>
                                <p class="text-sm font-medium text-title">{{ category.name }}</p>
                                <p class="mt-0.5 text-xs text-muted">{{ category.orders }} orders</p>
                            </div>
                            <p class="text-sm font-semibold text-title">
                                {{ formatCurrency(category.revenue) }}
                            </p>
                        </div>
                        <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full rounded-full" :class="category.color"
                                :style="{ width: `${category.percentage}%` }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Top Sellers -->
        <div class="overflow-hidden rounded-xl bg-white">
            <div class="flex items-center justify-between border-b border-border p-5">
                <div>
                    <h2 class="font-semibold text-title">Top Performing Sellers</h2>
                    <p class="mt-1 text-sm text-muted">Sellers ranked by revenue</p>
                </div>
                <button class="text-sm font-medium text-primary hover:underline">View All</button>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50/70">
                        <tr class="text-xs font-medium uppercase tracking-wide text-muted">
                            <th class="px-5 py-3">Seller</th>
                            <th class="px-5 py-3">Orders</th>
                            <th class="px-5 py-3">Revenue</th>
                            <th class="px-5 py-3">Verification</th>
                            <th class="px-5 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-border">
                        <tr v-for="seller in topSellers" :key="seller.name" class="hover:bg-gray-50/70">
                            <td class="px-5 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex size-9 items-center justify-center rounded-full text-xs font-semibold"
                                        :class="seller.color">
                                        {{ seller.initials }}
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-title">{{ seller.name }}</p>
                                        <p class="mt-0.5 text-xs text-muted">{{ seller.email }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-4 text-sm text-body">{{ seller.orders }}</td>
                            <td class="px-5 py-4 text-sm font-semibold text-title">{{ formatCurrency(seller.revenue) }}
                            </td>
                            <td class="px-5 py-4">
                                <span class="rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="seller.status === 'Verified' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'">
                                    {{ seller.status }}
                                </span>
                            </td>
                            <td class="px-5 py-4 text-right">
                                <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title">
                                    <Eye class="size-4" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Recent Orders -->
        <div class="overflow-hidden rounded-xl bg-white">
            <div class="flex items-center justify-between border-b border-border p-5">
                <div>
                    <h2 class="font-semibold text-title">Recent Orders</h2>
                    <p class="mt-1 text-sm text-muted">Latest marketplace transactions</p>
                </div>
                <button class="text-sm font-medium text-primary hover:underline">View All Orders</button>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50/70">
                        <tr class="text-xs font-medium uppercase tracking-wide text-muted">
                            <th class="px-5 py-3">Order ID</th>
                            <th class="px-5 py-3">Customer</th>
                            <th class="px-5 py-3">Date</th>
                            <th class="px-5 py-3">Amount</th>
                            <th class="px-5 py-3">Status</th>
                            <th class="px-5 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-border">
                        <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-gray-50/70">
                            <td class="px-5 py-4 text-sm font-semibold text-primary">{{ order.id }}</td>
                            <td class="px-5 py-4 text-sm font-medium text-title">{{ order.customer }}</td>
                            <td class="px-5 py-4 text-sm text-muted">{{ order.date }}</td>
                            <td class="px-5 py-4 text-sm font-semibold text-title">{{ formatCurrency(order.amount) }}
                            </td>
                            <td class="px-5 py-4">
                                <span class="rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="orderStatusClass(order.status)">
                                    {{ order.status }}
                                </span>
                            </td>
                            <td class="px-5 py-4 text-right">
                                <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title">
                                    <Eye class="size-4" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
