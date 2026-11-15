<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    Pencil,
    Trash2,
    Eye,
    MoreHorizontal,
    SlidersHorizontal,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Tag,
    Package,
    BadgeCheck,
    Star,
    ImagePlus,
} from '@lucide/vue'

const search = ref('')
const filter = ref('All Brands')
const currentPage = ref(1)

const tabs = ['All Brands', 'Active', 'Inactive', 'Featured']

const brands = ref([
    {
        id: 'BRD-001',
        name: 'Samsung',
        slug: 'samsung',
        description: 'Consumer electronics and technology',
        logo: 'https://logo.clearbit.com/samsung.com',
        category: 'Electronics',
        products: 245,
        featured: true,
        status: 'Active',
        created: 'Nov 12, 2026',
    },
    {
        id: 'BRD-002',
        name: 'Apple',
        slug: 'apple',
        description: 'Premium technology and devices',
        logo: 'https://logo.clearbit.com/apple.com',
        category: 'Electronics',
        products: 186,
        featured: true,
        status: 'Active',
        created: 'Nov 10, 2026',
    },
    {
        id: 'BRD-003',
        name: 'Nike',
        slug: 'nike',
        description: 'Sportswear and footwear',
        logo: 'https://logo.clearbit.com/nike.com',
        category: 'Fashion & Apparel',
        products: 320,
        featured: true,
        status: 'Active',
        created: 'Nov 08, 2026',
    },
    {
        id: 'BRD-004',
        name: 'Adidas',
        slug: 'adidas',
        description: 'Sports clothing and accessories',
        logo: 'https://logo.clearbit.com/adidas.com',
        category: 'Fashion & Apparel',
        products: 156,
        featured: false,
        status: 'Active',
        created: 'Nov 07, 2026',
    },
    {
        id: 'BRD-005',
        name: 'Sony',
        slug: 'sony',
        description: 'Electronics and entertainment',
        logo: 'https://logo.clearbit.com/sony.com',
        category: 'Electronics',
        products: 98,
        featured: false,
        status: 'Inactive',
        created: 'Nov 05, 2026',
    },
    {
        id: 'BRD-006',
        name: 'Puma',
        slug: 'puma',
        description: 'Sportswear and lifestyle',
        logo: 'https://logo.clearbit.com/puma.com',
        category: 'Fashion & Apparel',
        products: 112,
        featured: false,
        status: 'Active',
        created: 'Nov 03, 2026',
    },
])

const filteredBrands = computed(() => {
    const keyword = search.value.toLowerCase()

    return brands.value.filter(brand => {
        const matchesSearch = [
            brand.id,
            brand.name,
            brand.slug,
            brand.category,
        ].some(value => value.toLowerCase().includes(keyword))

        const matchesFilter =
            filter.value === 'All Brands' ||
            (filter.value === 'Featured' && brand.featured) ||
            brand.status === filter.value

        return matchesSearch && matchesFilter
    })
})

const totalProducts = computed(() =>
    brands.value.reduce((total, brand) => total + brand.products, 0)
)

const formatNumber = value =>
    new Intl.NumberFormat('en-BD').format(value)

const statusClass = status => status === 'Active'
    ? 'bg-emerald-50 text-emerald-700'
    : 'bg-gray-100 text-gray-600'
</script>

<template>
    <div class="space-y-5">

        <!-- Header -->
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h1 class="text-xl font-semibold text-title">Brands</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage product brands and their marketplace visibility.
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
                    Add Brand
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Brands</span>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Tag :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{ brands.length }}
                </h3>
                <p class="text-xs text-muted">Registered brands</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Active Brands</span>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <BadgeCheck :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{brands.filter(b => b.status === 'Active').length}}
                </h3>
                <p class="text-xs text-muted">Currently visible</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Featured Brands</span>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <Star :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{brands.filter(b => b.featured).length}}
                </h3>
                <p class="text-xs text-muted">Featured on marketplace</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Brand Products</span>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Package :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{ formatNumber(totalProducts) }}
                </h3>
                <p class="text-xs text-muted">Products across all brands</p>
            </div>

        </div>

        <!-- Brand Table -->
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
            <div class="flex flex-col justify-between gap-3 border-b border-border p-4 sm:flex-row sm:items-center">

                <div class="relative w-full sm:max-w-sm">
                    <Search :size="17" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />

                    <input v-model="search" type="text" placeholder="Search brand name or category..."
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
                                Brand
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Slug
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Category
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Products
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Featured
                            </th>

                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Status
                            </th>

                            <th class="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">
                        <tr v-for="brand in filteredBrands" :key="brand.id" class="transition hover:bg-gray-50/70">
                            <!-- Checkbox -->
                            <td class="px-5 py-4">
                                <input type="checkbox" class="size-4 rounded border-border accent-primary" />
                            </td>

                            <!-- Brand -->
                            <td class="px-4 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                                        <img :src="brand.logo" :alt="brand.name" class="size-full object-contain" />
                                    </div>

                                    <div>
                                        <p class="text-sm font-semibold text-title">
                                            {{ brand.name }}
                                        </p>
                                        <p class="mt-0.5 text-xs text-muted">
                                            {{ brand.id }}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <!-- Slug -->
                            <td class="px-4 py-4 text-sm text-muted">
                                {{ brand.slug }}
                            </td>

                            <!-- Category -->
                            <td class="px-4 py-4">
                                <span class="text-sm text-body">
                                    {{ brand.category }}
                                </span>
                            </td>

                            <!-- Products -->
                            <td class="px-4 py-4">
                                <span class="text-sm font-semibold text-title">
                                    {{ formatNumber(brand.products) }}
                                </span>
                            </td>

                            <!-- Featured -->
                            <td class="px-4 py-4">
                                <button class="inline-flex items-center gap-1.5 text-xs font-medium transition" :class="brand.featured
                                    ? 'text-amber-600'
                                    : 'text-muted'">
                                    <Star :size="16" :fill="brand.featured ? 'currentColor' : 'none'" />
                                    {{ brand.featured ? 'Featured' : 'Not Featured' }}
                                </button>
                            </td>

                            <!-- Status -->
                            <td class="px-4 py-4">
                                <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                    :class="statusClass(brand.status)">
                                    {{ brand.status }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-5 py-4">
                                <div class="flex justify-end gap-1">
                                    <button title="View brand"
                                        class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-primary">
                                        <Eye :size="16" />
                                    </button>

                                    <button title="Edit brand"
                                        class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-primary">
                                        <Pencil :size="15" />
                                    </button>

                                    <button title="Delete brand"
                                        class="rounded-lg border border-border p-2 text-muted transition hover:bg-red-50 hover:text-red-600">
                                        <Trash2 :size="15" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- Empty State -->
                        <tr v-if="!filteredBrands.length">
                            <td colspan="8" class="px-5 py-14 text-center">
                                <Tag :size="30" class="mx-auto text-muted" />
                                <p class="mt-2 text-sm font-medium text-title">
                                    No brands found
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
                        {{ filteredBrands.length }}
                    </span>
                    of
                    <span class="font-medium text-title">
                        {{ brands.length }}
                    </span>
                    brands
                </p>

                <div class="flex items-center gap-1">
                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50">
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
