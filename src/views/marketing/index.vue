<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    Megaphone,
    TrendingUp,
    MousePointerClick,
    TicketPercent,
    Eye,
    Pencil,
    Trash2,
    MoreHorizontal,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Image,
    Tag,
    Mail,
    ArrowUpRight,
    Play,
    Pause,
} from '@lucide/vue'

const activeTab = ref('All Campaigns')
const search = ref('')

const tabs = ['All Campaigns', 'Active', 'Scheduled', 'Completed', 'Draft']

const campaigns = ref([
    {
        id: 'CAM-001',
        name: 'Winter Mega Sale',
        type: 'Discount Campaign',
        channel: 'Website',
        startDate: 'Nov 10, 2026',
        endDate: 'Nov 30, 2026',
        budget: 25000,
        spent: 18450,
        impressions: 45200,
        clicks: 6240,
        conversions: 428,
        status: 'Active',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        id: 'CAM-002',
        name: 'New Seller Welcome',
        type: 'Email Campaign',
        channel: 'Email',
        startDate: 'Nov 12, 2026',
        endDate: 'Nov 20, 2026',
        budget: 10000,
        spent: 3500,
        impressions: 18500,
        clicks: 3200,
        conversions: 215,
        status: 'Active',
        color: 'bg-violet-50 text-violet-600',
    },
    {
        id: 'CAM-003',
        name: 'Black Friday Deals',
        type: 'Promotional Campaign',
        channel: 'Website',
        startDate: 'Nov 25, 2026',
        endDate: 'Nov 30, 2026',
        budget: 50000,
        spent: 0,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        status: 'Scheduled',
        color: 'bg-orange-50 text-orange-600',
    },
    {
        id: 'CAM-004',
        name: 'October Seller Bonus',
        type: 'Seller Promotion',
        channel: 'Dashboard',
        startDate: 'Oct 01, 2026',
        endDate: 'Oct 31, 2026',
        budget: 15000,
        spent: 15000,
        impressions: 28000,
        clicks: 4100,
        conversions: 320,
        status: 'Completed',
        color: 'bg-emerald-50 text-emerald-600',
    },
    {
        id: 'CAM-005',
        name: 'Free Shipping Offer',
        type: 'Discount Campaign',
        channel: 'Website',
        startDate: 'Dec 01, 2026',
        endDate: 'Dec 15, 2026',
        budget: 12000,
        spent: 0,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        status: 'Draft',
        color: 'bg-gray-100 text-gray-600',
    },
])

const filteredCampaigns = computed(() => {
    return campaigns.value.filter((campaign) => {
        const matchesTab =
            activeTab.value === 'All Campaigns' ||
            campaign.status === activeTab.value

        const keyword = search.value.toLowerCase()

        const matchesSearch =
            campaign.name.toLowerCase().includes(keyword) ||
            campaign.id.toLowerCase().includes(keyword) ||
            campaign.type.toLowerCase().includes(keyword)

        return matchesTab && matchesSearch
    })
})

const formatNumber = (value) =>
    new Intl.NumberFormat('en-BD').format(value)

const formatCurrency = (value) =>
    `৳${formatNumber(value)}`
</script>

<template>
    <div class="space-y-4">

        <!-- Header -->
        <div class="flex items-center justify-between gap-4">
            <div>
                <h1 class="text-xl font-semibold text-title">Marketing</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage campaigns, promotions, coupons and marketing activities.
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
                    Create Campaign
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Campaigns</p>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Megaphone class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">24</p>
                <p class="text-xs text-muted">All marketing campaigns</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Active Campaigns</p>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <TrendingUp class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">08</p>
                <p class="text-xs text-muted">Currently running campaigns</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Impressions</p>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Eye class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">2.45M</p>
                <p class="flex items-center gap-1 text-xs text-emerald-600">
                    <ArrowUpRight class="size-3.5" />
                    18.4% from last month
                </p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Conversions</p>
                    <div class="rounded-lg bg-orange-50 p-2 text-orange-600">
                        <MousePointerClick class="size-5" />
                    </div>
                </div>
                <p class="text-2xl font-semibold text-title">1,284</p>
                <p class="text-xs text-muted">Campaign generated conversions</p>
            </div>
        </div>

        <div>
            <div class="mb-3">
                <h2 class="font-semibold text-title">Marketing Tools</h2>
                <p class="mt-1 text-sm text-muted">Manage your marketplace promotions.</p>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <button
                    class="flex items-center gap-3 rounded-xl bg-white p-4 text-left transition hover:border-primary/50 hover:bg-gray-50/50">
                    <div class="rounded-lg bg-blue-50 p-3 text-blue-600">
                        <Image class="size-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-title">Banners</p>
                        <p class="mt-1 text-xs text-muted">Manage homepage banners</p>
                    </div>
                    <ChevronRight class="size-4 text-muted" />
                </button>

                <button
                    class="flex items-center gap-3 rounded-xl bg-white p-4 text-left transition hover:border-primary/50 hover:bg-gray-50/50">
                    <div class="rounded-lg bg-violet-50 p-3 text-violet-600">
                        <TicketPercent class="size-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-title">Coupons</p>
                        <p class="mt-1 text-xs text-muted">Discount codes and offers</p>
                    </div>
                    <ChevronRight class="size-4 text-muted" />
                </button>

                <button
                    class="flex items-center gap-3 rounded-xl bg-white p-4 text-left transition hover:border-primary/50 hover:bg-gray-50/50">
                    <div class="rounded-lg bg-emerald-50 p-3 text-emerald-600">
                        <Tag class="size-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-title">Promotions</p>
                        <p class="mt-1 text-xs text-muted">Special deals and discounts</p>
                    </div>
                    <ChevronRight class="size-4 text-muted" />
                </button>

                <button
                    class="flex items-center gap-3 rounded-xl bg-white p-4 text-left transition hover:border-primary/50 hover:bg-gray-50/50">
                    <div class="rounded-lg bg-orange-50 p-3 text-orange-600">
                        <Mail class="size-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-title">Email Marketing</p>
                        <p class="mt-1 text-xs text-muted">Seller and customer emails</p>
                    </div>
                    <ChevronRight class="size-4 text-muted" />
                </button>
            </div>
        </div>


        <div class="overflow-hidden rounded-xl bg-white">
            <div class="flex items-center justify-between gap-4 p-4">
                <div class="flex items-start gap-3">
                    <div class="rounded-lg bg-primary/10 p-3 text-primary">
                        <Megaphone class="size-6" />
                    </div>
                    <div>
                        <div class="flex flex-wrap items-center gap-2">
                            <h2 class="font-semibold text-title">Winter Mega Sale</h2>
                            <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                Active
                            </span>
                        </div>
                        <p class="mt-1 text-sm text-muted">
                            Special promotional campaign for marketplace buyers.
                        </p>
                    </div>
                </div>

                <button
                    class="inline-flex items-center gap-2 self-start rounded-lg border border-border px-3 py-2 text-sm font-medium text-body hover:bg-gray-50 md:self-auto">
                    View Campaign
                    <ArrowUpRight class="size-4" />
                </button>
            </div>

            <div class="grid grid-cols-2 gap-4 border-t border-border p-5 md:grid-cols-4">
                <div>
                    <p class="text-xs text-muted">Campaign Budget</p>
                    <p class="mt-1 text-lg font-semibold text-title">৳25,000</p>
                </div>
                <div>
                    <p class="text-xs text-muted">Amount Spent</p>
                    <p class="mt-1 text-lg font-semibold text-title">৳18,450</p>
                </div>
                <div>
                    <p class="text-xs text-muted">Impressions</p>
                    <p class="mt-1 text-lg font-semibold text-title">45,200</p>
                </div>
                <div>
                    <p class="text-xs text-muted">Conversions</p>
                    <p class="mt-1 text-lg font-semibold text-title">428</p>
                </div>
            </div>

            <div class="border-t border-border px-5 py-4">
                <div class="mb-2 flex items-center justify-between text-xs">
                    <span class="text-muted">Budget utilization</span>
                    <span class="font-medium text-title">73.8%</span>
                </div>
                <div class="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div class="h-full w-[73.8%] rounded-full bg-primary"></div>
                </div>
            </div>
        </div>

        <!-- Campaign List -->
        <div class="overflow-hidden rounded-xl bg-white">

            <div class="border-b border-border p-4">
                <div class="flex items-center justify-between gap-4">
                    <div>
                        <h2 class="font-semibold text-title">Campaigns</h2>
                        <p class="mt-1 text-sm text-muted">
                            Track and manage your marketing campaigns.
                        </p>
                    </div>

                    <div class="flex flex-col gap-2 sm:flex-row">
                        <div class="relative">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                            <input v-model="search" type="text" placeholder="Search campaigns..."
                                class="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary sm:w-64" />
                        </div>

                        <button
                            class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-body hover:bg-gray-50">
                            <CalendarDays class="size-4" />
                            Date Range
                        </button>
                    </div>
                </div>

                <div class="mt-4 flex gap-5 overflow-x-auto">
                    <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                        class="whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition" :class="activeTab === tab
                            ? 'border-primary text-primary'
                            : 'border-transparent text-muted hover:text-title'">
                        {{ tab }}
                    </button>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50/70">
                        <tr class="text-xs font-medium uppercase tracking-wide text-muted">
                            <th class="px-5 py-3">Campaign</th>
                            <th class="px-5 py-3">Channel</th>
                            <th class="px-5 py-3">Duration</th>
                            <th class="px-5 py-3">Budget</th>
                            <th class="px-5 py-3">Impressions</th>
                            <th class="px-5 py-3">Conversions</th>
                            <th class="px-5 py-3">Status</th>
                            <th class="px-5 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">
                        <tr v-for="campaign in filteredCampaigns" :key="campaign.id"
                            class="transition hover:bg-gray-50/70">
                            <td class="px-5 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex size-10 items-center justify-center rounded-lg"
                                        :class="campaign.color">
                                        <Megaphone class="size-5" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-title">{{ campaign.name }}</p>
                                        <p class="mt-0.5 text-xs text-muted">{{ campaign.id }} · {{ campaign.type }}</p>
                                    </div>
                                </div>
                            </td>

                            <td class="px-5 py-4">
                                <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-body">
                                    {{ campaign.channel }}
                                </span>
                            </td>

                            <td class="px-5 py-4">
                                <p class="text-sm text-body">{{ campaign.startDate }}</p>
                                <p class="mt-1 text-xs text-muted">To {{ campaign.endDate }}</p>
                            </td>

                            <td class="px-5 py-4">
                                <p class="text-sm font-medium text-title">{{ formatCurrency(campaign.budget) }}</p>
                                <p class="mt-1 text-xs text-muted">Spent {{ formatCurrency(campaign.spent) }}</p>
                            </td>

                            <td class="px-5 py-4 text-sm text-body">
                                {{ formatNumber(campaign.impressions) }}
                            </td>

                            <td class="px-5 py-4 text-sm font-medium text-title">
                                {{ formatNumber(campaign.conversions) }}
                            </td>

                            <td class="px-5 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="{
                                        'bg-emerald-50 text-emerald-700': campaign.status === 'Active',
                                        'bg-blue-50 text-blue-700': campaign.status === 'Scheduled',
                                        'bg-gray-100 text-gray-600': campaign.status === 'Completed' || campaign.status === 'Draft',
                                    }">
                                    <span class="size-1.5 rounded-full" :class="{
                                        'bg-emerald-500': campaign.status === 'Active',
                                        'bg-blue-500': campaign.status === 'Scheduled',
                                        'bg-gray-400': campaign.status === 'Completed' || campaign.status === 'Draft',
                                    }" />
                                    {{ campaign.status }}
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
                                    <button class="rounded-lg p-2 text-muted hover:bg-gray-100 hover:text-title"
                                        title="More">
                                        <MoreHorizontal class="size-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr v-if="filteredCampaigns.length === 0">
                            <td colspan="8" class="px-5 py-12 text-center">
                                <Megaphone class="mx-auto size-8 text-muted" />
                                <p class="mt-3 text-sm font-medium text-title">No campaigns found</p>
                                <p class="mt-1 text-xs text-muted">Try another search or filter.</p>
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
                    <span class="font-medium text-title">{{ filteredCampaigns.length }}</span>
                    of
                    <span class="font-medium text-title">{{ campaigns.length }}</span>
                    campaigns
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
    </div>
</template>
