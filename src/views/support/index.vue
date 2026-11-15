<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    Headset,
    MessageCircle,
    Clock,
    CheckCircle2,
    AlertCircle,
    ArrowUpRight,
    MoreHorizontal,
    Eye,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Paperclip,
    Send,
    UserRound,
    Mail,
    Building2,
    CalendarDays,
    Filter,
} from '@lucide/vue'

const activeTab = ref('All Tickets')
const search = ref('')

const tabs = [
    'All Tickets',
    'Open',
    'In Progress',
    'Waiting',
    'Resolved',
    'Closed',
]

const tickets = ref([
    {
        id: 'TKT-10245',
        subject: 'Unable to complete checkout',
        customer: 'Rahim Ahmed',
        email: 'rahim@example.com',
        type: 'Order Issue',
        priority: 'High',
        status: 'Open',
        agent: 'Admin Support',
        date: 'Nov 15, 2026',
        replies: 3,
        initials: 'RA',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        id: 'TKT-10244',
        subject: 'Payment not reflected in account',
        customer: 'Karim Hasan',
        email: 'karim@example.com',
        type: 'Payment',
        priority: 'Urgent',
        status: 'In Progress',
        agent: 'Payment Team',
        date: 'Nov 15, 2026',
        replies: 5,
        initials: 'KH',
        color: 'bg-violet-100 text-violet-700',
    },
    {
        id: 'TKT-10243',
        subject: 'Product listing approval request',
        customer: 'Nusrat Jahan',
        email: 'nusrat@example.com',
        type: 'Seller Support',
        priority: 'Medium',
        status: 'Waiting',
        agent: 'Seller Team',
        date: 'Nov 14, 2026',
        replies: 2,
        initials: 'NJ',
        color: 'bg-pink-100 text-pink-700',
    },
    {
        id: 'TKT-10242',
        subject: 'How to upgrade subscription plan?',
        customer: 'Sabbir Hossain',
        email: 'sabbir@example.com',
        type: 'Subscription',
        priority: 'Low',
        status: 'Resolved',
        agent: 'Admin Support',
        date: 'Nov 14, 2026',
        replies: 4,
        initials: 'SH',
        color: 'bg-emerald-100 text-emerald-700',
    },
    {
        id: 'TKT-10241',
        subject: 'Incorrect shipping charge',
        customer: 'Tanvir Islam',
        email: 'tanvir@example.com',
        type: 'Shipping',
        priority: 'High',
        status: 'Open',
        agent: 'Order Team',
        date: 'Nov 13, 2026',
        replies: 1,
        initials: 'TI',
        color: 'bg-orange-100 text-orange-700',
    },
    {
        id: 'TKT-10240',
        subject: 'Unable to update business profile',
        customer: 'Farhana Akter',
        email: 'farhana@example.com',
        type: 'Account',
        priority: 'Medium',
        status: 'Closed',
        agent: 'Admin Support',
        date: 'Nov 12, 2026',
        replies: 6,
        initials: 'FA',
        color: 'bg-amber-100 text-amber-700',
    },
])

const filteredTickets = computed(() => {
    const keyword = search.value.toLowerCase()

    return tickets.value.filter(ticket => {
        const matchesTab =
            activeTab.value === 'All Tickets' ||
            ticket.status === activeTab.value

        const matchesSearch =
            ticket.id.toLowerCase().includes(keyword) ||
            ticket.subject.toLowerCase().includes(keyword) ||
            ticket.customer.toLowerCase().includes(keyword) ||
            ticket.email.toLowerCase().includes(keyword)

        return matchesTab && matchesSearch
    })
})

const statusClass = status => ({
    Open: 'bg-blue-50 text-blue-700',
    'In Progress': 'bg-violet-50 text-violet-700',
    Waiting: 'bg-amber-50 text-amber-700',
    Resolved: 'bg-emerald-50 text-emerald-700',
    Closed: 'bg-gray-100 text-gray-600',
}[status])

const priorityClass = priority => ({
    Urgent: 'text-red-600 bg-red-50',
    High: 'text-orange-600 bg-orange-50',
    Medium: 'text-amber-700 bg-amber-50',
    Low: 'text-gray-600 bg-gray-100',
}[priority])
</script>

<template>
    <div class="space-y-4">
        <div class="flex items-center justify-between gap-4 ">
            <div>
                <h1 class="text-xl font-semibold text-title">Support Center</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage customer inquiries, support tickets and conversations.
                </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <button
                    class="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-body hover:bg-gray-50">
                    <Download class="size-4" />
                    Export
                </button>

                <button
                    class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
                    <Plus class="size-4" />
                    Create Ticket
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Tickets</p>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Headset class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">1,284</p>
                <p class="text-xs text-muted">All support requests</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Open Tickets</p>
                    <div class="rounded-lg bg-orange-50 p-2 text-orange-600">
                        <AlertCircle class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">48</p>
                <p class="text-xs text-muted">Need attention</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">In Progress</p>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <MessageCircle class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">32</p>
                <p class="text-xs text-muted">Currently being handled</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Resolved Tickets</p>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <CheckCircle2 class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">1,204</p>
                <p class="flex items-center gap-1 text-xs text-emerald-600">
                    <ArrowUpRight class="size-3.5" />
                    94% resolution rate
                </p>
            </div>
        </div>

        <!-- Support Overview -->
        <div class="grid grid-cols-1 gap-4 xl:grid-cols-3">

            <div class="rounded-xl bg-white p-4 xl:col-span-2">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="font-semibold text-title">Support Performance</h2>
                        <p class="mt-1 text-sm text-muted">Helpdesk performance overview</p>
                    </div>
                    <select class="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-body outline-none">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                        <option>This Month</option>
                    </select>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                        <p class="text-xs text-muted">Avg. Response Time</p>
                        <p class="mt-2 text-2xl font-semibold text-title">18 min</p>
                        <p class="mt-1 text-xs text-emerald-600">12% faster than last month</p>
                    </div>
                    <div>
                        <p class="text-xs text-muted">Avg. Resolution Time</p>
                        <p class="mt-2 text-2xl font-semibold text-title">4.5 hrs</p>
                        <p class="mt-1 text-xs text-emerald-600">8% improvement</p>
                    </div>
                    <div>
                        <p class="text-xs text-muted">Customer Satisfaction</p>
                        <p class="mt-2 text-2xl font-semibold text-title">96.8%</p>
                        <p class="mt-1 text-xs text-emerald-600">+2.4% this month</p>
                    </div>
                </div>

                <div class="mt-7 border-t border-border pt-5">
                    <div class="mb-3 flex items-center justify-between">
                        <p class="text-sm font-medium text-title">Ticket Resolution Target</p>
                        <span class="text-sm font-semibold text-title">94%</span>
                    </div>
                    <div class="h-2.5 overflow-hidden rounded-full bg-gray-100">
                        <div class="h-full w-[94%] rounded-full bg-primary"></div>
                    </div>
                    <div class="mt-2 flex justify-between text-xs text-muted">
                        <span>Resolved: 1,204</span>
                        <span>Target: 90%</span>
                    </div>
                </div>
            </div>

            <!-- Priority Breakdown -->
            <div class="rounded-xl bg-white p-4">
                <h2 class="font-semibold text-title">Ticket Priority</h2>
                <p class="mt-1 text-sm text-muted">Current ticket distribution</p>

                <div class="mt-6 space-y-5">
                    <div>
                        <div class="mb-2 flex justify-between">
                            <span class="text-sm text-body">Urgent</span>
                            <span class="text-sm font-semibold text-title">8</span>
                        </div>
                        <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full w-[20%] rounded-full bg-red-500"></div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-2 flex justify-between">
                            <span class="text-sm text-body">High</span>
                            <span class="text-sm font-semibold text-title">16</span>
                        </div>
                        <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full w-[40%] rounded-full bg-orange-500"></div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-2 flex justify-between">
                            <span class="text-sm text-body">Medium</span>
                            <span class="text-sm font-semibold text-title">12</span>
                        </div>
                        <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full w-[30%] rounded-full bg-amber-500"></div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-2 flex justify-between">
                            <span class="text-sm text-body">Low</span>
                            <span class="text-sm font-semibold text-title">4</span>
                        </div>
                        <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div class="h-full w-[10%] rounded-full bg-gray-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tickets Table -->
        <div class="overflow-hidden rounded-xl bg-white">

            <div class="border-b border-border p-4">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 class="font-semibold text-title">Support Tickets</h2>
                        <p class="mt-1 text-sm text-muted">Manage and respond to customer support requests.</p>
                    </div>

                    <div class="flex flex-col gap-2 sm:flex-row">
                        <div class="relative">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                            <input v-model="search" type="text" placeholder="Search tickets..."
                                class="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary sm:w-64" />
                        </div>

                        <button
                            class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body hover:bg-gray-50">
                            <Filter class="size-4" />
                            Filters
                        </button>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="mt-4 flex gap-5 overflow-x-auto">
                    <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                        class="whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition" :class="activeTab === tab
                            ? 'border-primary text-primary'
                            : 'border-transparent text-muted hover:text-title'">
                        {{ tab }}
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50/70">
                        <tr class="text-xs font-medium uppercase tracking-wide text-muted">
                            <th class="px-5 py-3">Ticket</th>
                            <th class="px-5 py-3">Customer</th>
                            <th class="px-5 py-3">Category</th>
                            <th class="px-5 py-3">Priority</th>
                            <th class="px-5 py-3">Assigned To</th>
                            <th class="px-5 py-3">Date</th>
                            <th class="px-5 py-3">Status</th>
                            <th class="px-5 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">
                        <tr v-for="ticket in filteredTickets" :key="ticket.id" class="transition hover:bg-gray-50/70">
                            <td class="px-5 py-4">
                                <div>
                                    <p class="text-xs font-semibold text-primary">{{ ticket.id }}</p>
                                    <p class="mt-1 truncate text-sm font-medium text-title">
                                        {{ ticket.subject }}
                                    </p>
                                    <p class="mt-1 flex items-center gap-1 text-xs text-muted">
                                        <MessageSquare class="size-3.5" />
                                        {{ ticket.replies }} replies
                                    </p>
                                </div>
                            </td>

                            <td class="px-5 py-4">
                                <div class="flex items-center gap-2.5">
                                    <div class="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                                        :class="ticket.color">
                                        {{ ticket.initials }}
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-title">{{ ticket.customer }}</p>
                                        <p class="mt-0.5 text-xs text-muted">{{ ticket.email }}</p>
                                    </div>
                                </div>
                            </td>

                            <td class="px-5 py-4">
                                <span class="text-sm text-body">{{ ticket.type }}</span>
                            </td>

                            <td class="px-5 py-4">
                                <span class="rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="priorityClass(ticket.priority)">
                                    {{ ticket.priority }}
                                </span>
                            </td>

                            <td class="px-5 py-4 text-sm text-body">{{ ticket.agent }}</td>

                            <td class="px-5 py-4 text-sm text-muted">{{ ticket.date }}</td>

                            <td class="px-5 py-4">
                                <span class="rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="statusClass(ticket.status)">
                                    {{ ticket.status }}
                                </span>
                            </td>

                            <td class="px-5 py-4">
                                <div class="flex items-center justify-end gap-1">
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="View ticket">
                                        <Eye class="size-4" />
                                    </button>
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="Reply">
                                        <MessageCircle class="size-4" />
                                    </button>
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="More">
                                        <MoreHorizontal class="size-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr v-if="filteredTickets.length === 0">
                            <td colspan="8" class="px-5 py-12 text-center">
                                <Headset class="mx-auto size-8 text-muted" />
                                <p class="mt-3 text-sm font-medium text-title">No tickets found</p>
                                <p class="mt-1 text-xs text-muted">Try another search or status filter.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-muted">
                    Showing
                    <span class="font-medium text-title">{{ filteredTickets.length }}</span>
                    of
                    <span class="font-medium text-title">{{ tickets.length }}</span>
                    tickets
                </p>

                <div class="flex items-center gap-2">
                    <button disabled class="rounded-lg border border-border p-2 text-muted disabled:opacity-40">
                        <ChevronLeft class="size-4" />
                    </button>
                    <button
                        class="rounded-lg border border-primary bg-primary px-3 py-1.5 text-sm text-white">1</button>
                    <button class="rounded-lg border border-border px-3 py-1.5 text-sm text-body">2</button>
                    <button class="rounded-lg border border-border p-2 text-muted">
                        <ChevronRight class="size-4" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Support Information -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="rounded-xl border border-border bg-surface p-5">
                <div class="flex items-center gap-3">
                    <div class="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                        <Mail class="size-5" />
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-title">Support Email</h3>
                        <p class="mt-1 text-sm text-muted">support@buyzin.com</p>
                    </div>
                </div>
            </div>

            <div class="rounded-xl border border-border bg-surface p-5">
                <div class="flex items-center gap-3">
                    <div class="rounded-lg bg-emerald-50 p-2.5 text-emerald-600">
                        <Clock class="size-5" />
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-title">Support Availability</h3>
                        <p class="mt-1 text-sm text-muted">Saturday – Thursday, 9 AM – 6 PM</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
