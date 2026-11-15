<script setup>
import { ref } from 'vue'

const dateRange = ref('Last 30 Days')
const chartRange = ref('This Month')

const stats = [
    { label: 'Total Orders', value: '12,580', growth: '12.5%', icon: 'shopping-cart', color: 'blue', points: '0,30 15,20 30,26 45,12 60,19 75,5' },
    { label: 'Total Sellers', value: '486', growth: '8.3%', icon: 'store', color: 'green', points: '0,28 15,15 30,22 45,9 60,18 75,3' },
    { label: 'Total Customers', value: '18,720', growth: '14.7%', icon: 'users', color: 'purple', points: '0,30 15,19 30,25 45,10 60,16 75,2' },
    { label: 'Total Revenue', value: '৳ 48,75,000', growth: '16.1%', icon: 'wallet', color: 'orange', points: '0,30 15,17 30,23 45,12 60,18 75,3' },
]

const orders = [
    { id: '#ORD-10048', customer: 'Rahim Enterprise', amount: '৳ 28,500', status: 'Delivered', date: 'Oct 30, 2025' },
    { id: '#ORD-10047', customer: 'Global Traders', amount: '৳ 18,750', status: 'Processing', date: 'Oct 30, 2025' },
    { id: '#ORD-10046', customer: 'Mega Corporation', amount: '৳ 62,000', status: 'Shipped', date: 'Oct 29, 2025' },
    { id: '#ORD-10045', customer: 'ABC Trading Co.', amount: '৳ 12,800', status: 'Pending', date: 'Oct 29, 2025' },
    { id: '#ORD-10044', customer: 'Smart Biz Ltd.', amount: '৳ 45,200', status: 'Delivered', date: 'Oct 28, 2025' },
]

const stores = [
    { name: 'Buyzin Express', sales: '৳ 12,50,000', growth: '24.8%', logo: 'B' },
    { name: 'TechMart BD', sales: '৳ 9,80,000', growth: '19.5%', logo: 'T' },
    { name: 'Global Trade', sales: '৳ 7,60,000', growth: '15.1%', logo: 'G' },
    { name: 'Smart Store', sales: '৳ 6,20,000', growth: '12.3%', logo: 'S' },
    { name: 'Digital Hub', sales: '৳ 5,90,000', growth: '11.7%', logo: 'D' },
]

const activities = [
    { title: 'New order placed', description: 'Order #ORD-10048 by Rahim Enterprise', time: '2m ago', icon: 'shopping-cart', color: 'green' },
    { title: 'New seller registered', description: 'TechMart BD', time: '5m ago', icon: 'store', color: 'blue' },
    { title: 'New product added', description: 'Wireless Mouse', time: '10m ago', icon: 'package', color: 'purple' },
    { title: 'New customer registered', description: 'Shariful Islam', time: '15m ago', icon: 'user', color: 'orange' },
    { title: 'Order delivered', description: 'Order #ORD-10047', time: '20m ago', icon: 'check', color: 'green' },
]

</script>

<template>

    <div class="space-y-4">
        <section class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold tracking-tight text-title">
                    Welcome back, Ashik Ahmed!
                </h2>
                <p class="mt-1 text-sm text-body md:text-base">
                    Here's what's happening with Buyzin today.
                </p>
            </div>

            <select v-model="dateRange"
                class="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold outline-none">
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
            </select>
        </section>

        <!-- Statistics -->
        <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label"
                class="flex min-w-0 items-center gap-4 rounded-xl border border-slate-100 bg-white p-4">
                <div class="flex shrink-0 items-center justify-center rounded-xl text-3xl" :class="{
                    'bg-blue-100 text-blue-600': stat.color === 'blue',
                    'bg-emerald-100 text-emerald-600': stat.color === 'green',
                    'bg-purple-100 text-purple-600': stat.color === 'purple',
                    'bg-orange-100 text-orange-500': stat.color === 'orange'
                }">
                    {{ { 'shopping-cart': '🛒', store: '▤', users: '♟', wallet: '৳' }[stat.icon] }}
                </div>

                <div class="min-w-0 flex-1">
                    <p class="truncate text-sm text-slate-600">{{ stat.label }}</p>
                    <h3 class="mt-1 truncate text-xl font-bold leading-tight text-body">{{ stat.value }}</h3>
                    <p class="mt-2 whitespace-nowrap text-xs">
                        <span class="font-semibold text-emerald-500">↑ {{ stat.growth }}</span>
                        <span class="text-slate-500"> from last month</span>
                    </p>
                </div>

                <svg viewBox="0 0 75 36" class="hidden h-10 shrink-0 sm:block">
                    <polyline :points="stat.points" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" :class="{
                            'text-blue-500': stat.color === 'blue',
                            'text-emerald-500': stat.color === 'green',
                            'text-purple-500': stat.color === 'purple',
                            'text-orange-500': stat.color === 'orange'
                        }" />
                </svg>
            </div>
        </section>

        <!-- Charts -->
        <section class="grid grid-cols-1 gap-4 xl:grid-cols-12">

            <!-- Sales Overview -->
            <div class="rounded-xl bg-white p-4 xl:col-span-7">
                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-xl font-bold text-body">Sales Overview</h3>
                    <select v-model="chartRange"
                        class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>Last 7 Days</option>
                        <option>This Year</option>
                    </select>
                </div>

                <div class="relative">
                    <div
                        class="absolute right-1 top-1 z-10 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow">
                        ৳ 32,500
                    </div>

                    <svg viewBox="0 0 700 230" class="h-auto w-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#2563eb" stop-opacity=".2" />
                                <stop offset="100%" stop-color="#2563eb" stop-opacity="0" />
                            </linearGradient>
                        </defs>

                        <g stroke="#e9edf5" stroke-width="1">
                            <line x1="45" y1="20" x2="690" y2="20" />
                            <line x1="45" y1="65" x2="690" y2="65" />
                            <line x1="45" y1="110" x2="690" y2="110" />
                            <line x1="45" y1="155" x2="690" y2="155" />
                            <line x1="45" y1="200" x2="690" y2="200" />
                            <line x1="45" y1="20" x2="45" y2="200" />
                            <line x1="207" y1="20" x2="207" y2="200" />
                            <line x1="368" y1="20" x2="368" y2="200" />
                            <line x1="529" y1="20" x2="529" y2="200" />
                            <line x1="690" y1="20" x2="690" y2="200" />
                        </g>

                        <g fill="#64748b" font-size="13">
                            <text x="3" y="24">40k</text>
                            <text x="3" y="69">30k</text>
                            <text x="3" y="114">20k</text>
                            <text x="3" y="159">10k</text>
                            <text x="18" y="204">0</text>
                            <text x="45" y="225">Oct 1</text>
                            <text x="190" y="225">Oct 7</text>
                            <text x="348" y="225">Oct 14</text>
                            <text x="508" y="225">Oct 21</text>
                            <text x="650" y="225">Oct 30</text>
                        </g>

                        <path
                            d="M60 165 L100 145 L140 130 L180 143 L220 125 L270 127 L310 105 L370 135 L410 123 L450 130 L490 96 L530 84 L575 105 L615 86 L660 75 L690 52 L690 200 L60 200 Z"
                            fill="url(#salesFill)" />

                        <path
                            d="M60 165 L100 145 L140 130 L180 143 L220 125 L270 127 L310 105 L370 135 L410 123 L450 130 L490 96 L530 84 L575 105 L615 86 L660 75 L690 52"
                            fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />

                        <g fill="white" stroke="#2563eb" stroke-width="2.5">
                            <circle cx="60" cy="165" r="4" />
                            <circle cx="100" cy="145" r="4" />
                            <circle cx="140" cy="130" r="4" />
                            <circle cx="180" cy="143" r="4" />
                            <circle cx="220" cy="125" r="4" />
                            <circle cx="270" cy="127" r="4" />
                            <circle cx="310" cy="105" r="4" />
                            <circle cx="370" cy="135" r="4" />
                            <circle cx="410" cy="123" r="4" />
                            <circle cx="450" cy="130" r="4" />
                            <circle cx="490" cy="96" r="4" />
                            <circle cx="530" cy="84" r="4" />
                            <circle cx="575" cy="105" r="4" />
                            <circle cx="615" cy="86" r="4" />
                            <circle cx="660" cy="75" r="4" />
                            <circle cx="690" cy="52" r="5" />
                        </g>
                    </svg>
                </div>
            </div>

            <!-- Order Status -->
            <div class="rounded-xl bg-white p-4 xl:col-span-5">
                <h3 class="mb-6 text-xl font-bold text-body">Order Status</h3>
                <div class="flex flex-wrap items-center justify-center gap-6 py-2 sm:gap-8">
                    <div class="flex-1 space-y-5">
                        <div class="flex items-center justify-between gap-3 text-sm">
                            <span class="flex items-center gap-3"><i
                                    class="h-3 w-3 rounded-full bg-emerald-500"></i>Delivered</span>
                            <strong>38.5%</strong>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-sm">
                            <span class="flex items-center gap-3"><i
                                    class="h-3 w-3 rounded-full bg-blue-500"></i>Processing</span>
                            <strong>29.3%</strong>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-sm">
                            <span class="flex items-center gap-3"><i
                                    class="h-3 w-3 rounded-full bg-purple-500"></i>Shipped</span>
                            <strong>18.7%</strong>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-sm">
                            <span class="flex items-center gap-3"><i
                                    class="h-3 w-3 rounded-full bg-orange-400"></i>Pending</span>
                            <strong>13.5%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Sections -->
        <section class="grid grid-cols-1 gap-4 xl:grid-cols-12">

            <!-- Recent Orders -->
            <div class="min-w-0 overflow-hidden rounded-xl  bg-white p-4 xl:col-span-5">
                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-lg font-bold text-title">Recent Orders</h3>
                    <a href="#" class="text-sm font-semibold text-blue-600">View All →</a>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="border-b border-slate-200 text-slate-500">
                                <th class="pb-3 font-medium">#</th>
                                <th class="pb-3 font-medium">Customer</th>
                                <th class="pb-3 font-medium">Amount</th>
                                <th class="pb-3 font-medium">Status</th>
                                <th class="pb-3 font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order.id">
                                <td class="whitespace-nowrap py-4 font-semibold text-body underline">{{ order.id }}
                                </td>
                                <td class="whitespace-nowrap py-4">{{ order.customer }}</td>
                                <td class="whitespace-nowrap py-4">{{ order.amount }}</td>
                                <td class="py-4">
                                    <span class="whitespace-nowrap rounded-full px-2 py-1 text-xs font-semibold" :class="{
                                        'bg-emerald-100 text-emerald-700': order.status === 'Delivered',
                                        'bg-blue-100 text-blue-700': order.status === 'Processing',
                                        'bg-purple-100 text-purple-700': order.status === 'Shipped',
                                        'bg-orange-100 text-orange-700': order.status === 'Pending'
                                    }">{{ order.status }}</span>
                                </td>
                                <td class="whitespace-nowrap py-4 text-slate-600">{{ order.date }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Top Stores -->
            <div class="rounded-xl  bg-white p-5 4 xl:col-span-3">
                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-lg font-bold text-title">Top Stores</h3>
                    <a href="#" class="text-sm font-semibold text-blue-600">View All →</a>
                </div>

                <div class="space-y-4">
                    <div v-for="(store, index) in stores" :key="store.name" class="flex items-center gap-3">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            :class="[
                                index === 0 ? 'bg-amber-400 text-white' :
                                    index === 1 ? 'bg-slate-200 text-slate-600' :
                                        index === 2 ? 'bg-orange-300 text-white' :
                                            'bg-slate-100 text-slate-600'
                            ]">{{ index + 1 }}</span>

                        <div
                            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-sm font-bold text-blue-600">
                            {{ store.logo }}
                        </div>

                        <div class="min-w-0 flex-1">
                            <p class="truncate text-xs font-bold text-body">{{ store.name }}</p>
                            <p class="mt-0.5 truncate text-xs text-slate-500">Sales: {{ store.sales }}</p>
                        </div>

                        <span class="shrink-0 text-xs font-semibold text-emerald-500">{{ store.growth }}</span>
                    </div>
                </div>
            </div>

            <!-- Recent Activities -->
            <div class="rounded-xl  bg-white p-4 xl:col-span-4">
                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-lg font-bold text-title">Recent Activities</h3>
                    <a href="#" class="text-sm font-semibold text-blue-600">View All →</a>
                </div>

                <div class="space-y-4">
                    <div v-for="activity in activities" :key="activity.title" class="flex items-start gap-3">
                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm" :class="{
                            'bg-emerald-100 text-emerald-600': activity.color === 'green',
                            'bg-blue-100 text-blue-600': activity.color === 'blue',
                            'bg-purple-100 text-purple-600': activity.color === 'purple',
                            'bg-orange-100 text-orange-600': activity.color === 'orange'
                        }">
                            {{ { 'shopping-cart': '🛒', store: '▤', package: '▣', user: '♟', check: '✓' }[activity.icon]
                            }}
                        </div>

                        <div class="min-w-0 flex-1">
                            <p class="text-xs font-bold text-[#172342]">{{ activity.title }}</p>
                            <p class="mt-1 truncate text-xs text-slate-500">{{ activity.description }}</p>
                        </div>

                        <span class="shrink-0 text-xs text-slate-500">{{ activity.time }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
