<script setup>
import { ref, computed } from 'vue'
import {
    Search,
    Plus,
    Download,
    Pencil,
    Trash2,
    ChevronDown,
    ChevronRight,
    FolderTree,
    Layers3,
    Package,
    CircleCheck,
    MoreHorizontal,
    ImagePlus,
} from '@lucide/vue'

const search = ref('')
const filter = ref('All Categories')
const expanded = ref([1, 2])
const currentPage = ref(1)

const tabs = ['All Categories', 'Active', 'Inactive']

const categories = ref([
    {
        id: 1,
        name: 'Electronics',
        slug: 'electronics',
        description: 'Electronic devices and accessories',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=120',
        products: 245,
        status: 'Active',
        children: [
            { id: 11, name: 'Mobile Phones', slug: 'mobile-phones', products: 85, status: 'Active' },
            { id: 12, name: 'Laptops & Computers', slug: 'laptops-computers', products: 64, status: 'Active' },
            { id: 13, name: 'Accessories', slug: 'accessories', products: 96, status: 'Active' },
        ],
    },
    {
        id: 2,
        name: 'Fashion & Apparel',
        slug: 'fashion-apparel',
        description: 'Clothing, fashion and lifestyle',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=120',
        products: 186,
        status: 'Active',
        children: [
            { id: 21, name: 'Mens Clothing', slug: 'mens-clothing', products: 72, status: 'Active' },
            { id: 22, name: 'Womens Clothing', slug: 'womens-clothing', products: 84, status: 'Active' },
            { id: 23, name: 'Shoes & Footwear', slug: 'shoes-footwear', products: 30, status: 'Inactive' },
        ],
    },
    {
        id: 3,
        name: 'Home & Living',
        slug: 'home-living',
        description: 'Furniture and home essentials',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=120',
        products: 128,
        status: 'Active',
        children: [
            { id: 31, name: 'Furniture', slug: 'furniture', products: 78, status: 'Active' },
            { id: 32, name: 'Home Decor', slug: 'home-decor', products: 50, status: 'Active' },
        ],
    },
    {
        id: 4,
        name: 'Grocery & Food',
        slug: 'grocery-food',
        description: 'Daily essentials and food products',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=120',
        products: 98,
        status: 'Inactive',
        children: [],
    },
    {
        id: 5,
        name: 'Health & Beauty',
        slug: 'health-beauty',
        description: 'Healthcare and personal care products',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=120',
        products: 76,
        status: 'Active',
        children: [],
    },
])

const filteredCategories = computed(() => {
    const keyword = search.value.toLowerCase()

    return categories.value.filter(category => {
        const matchesSearch =
            category.name.toLowerCase().includes(keyword) ||
            category.slug.toLowerCase().includes(keyword) ||
            category.children.some(child =>
                child.name.toLowerCase().includes(keyword)
            )

        const matchesFilter =
            filter.value === 'All Categories' ||
            category.status === filter.value

        return matchesSearch && matchesFilter
    })
})

const toggleExpand = id => {
    expanded.value = expanded.value.includes(id)
        ? expanded.value.filter(item => item !== id)
        : [...expanded.value, id]
}

const statusClass = status => status === 'Active'
    ? 'bg-emerald-50 text-emerald-700'
    : 'bg-gray-100 text-gray-600'

const totalSubcategories = computed(() =>
    categories.value.reduce((total, category) => total + category.children.length, 0)
)

const totalProducts = computed(() =>
    categories.value.reduce((total, category) => total + category.products, 0)
)
</script>

<template>
    <div class="space-y-5">

        <!-- Header -->
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h1 class="text-xl font-semibold text-title">Categories</h1>
                <p class="mt-1 text-sm text-muted">
                    Organize your marketplace products with category hierarchy.
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
                    Add Category
                </button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Categories</span>
                    <div class="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <FolderTree :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{ categories.length }}
                </h3>
                <p class="text-xs text-muted">Parent categories</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Subcategories</span>
                    <div class="rounded-lg bg-violet-50 p-2 text-violet-600">
                        <Layers3 :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{ totalSubcategories }}
                </h3>
                <p class="text-xs text-muted">Child categories</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Total Products</span>
                    <div class="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                        <Package :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-semibold text-title">
                    {{ totalProducts.toLocaleString('en-BD') }}
                </h3>
                <p class="text-xs text-muted">Products in categories</p>
            </div>

            <div class="rounded-xl border border-border bg-white p-4">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-muted">Active Categories</span>
                    <div class="rounded-lg bg-amber-50 p-2 text-amber-600">
                        <CircleCheck :size="19" />
                    </div>
                </div>
                <h3 class=" text-2xl font-semibold text-title">
                    {{categories.filter(c => c.status === 'Active').length}}
                </h3>
                <p class="text-xs text-muted">Currently visible</p>
            </div>

        </div>

        <!-- Category Table -->
        <div class="overflow-hidden rounded-xl border border-border bg-white">

            <!-- Tabs -->
            <div class="overflow-x-auto border-b border-border px-4">
                <div class="flex min-w-max items-center gap-6">
                    <button v-for="tab in tabs" :key="tab" @click="filter = tab"
                        class="relative py-4 text-sm font-medium transition" :class="filter === tab
                            ? 'text-primary'
                            : 'text-muted hover:text-title'">
                        {{ tab }}

                        <span v-if="filter === tab"
                            class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"></span>
                    </button>
                </div>
            </div>

            <!-- Search & Actions -->
            <div class="flex flex-col justify-between gap-3 border-b border-border p-4 sm:flex-row sm:items-center">
                <div class="relative w-full sm:max-w-sm">
                    <Search :size="17" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />

                    <input v-model="search" type="text" placeholder="Search category or subcategory..."
                        class="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-body outline-none transition placeholder:text-muted focus:border-primary" />
                </div>

                <div class="flex items-center gap-2">
                    <button @click="expanded = expanded.length === categories.length ? [] : categories.map(c => c.id)"
                        class="rounded-lg border border-border px-3 py-2.5 text-sm text-body transition hover:bg-gray-50">
                        {{ expanded.length === categories.length ? 'Collapse All' : 'Expand All' }}
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full text-left">

                    <thead class="bg-gray-50/70">
                        <tr class="border-b border-border">
                            <th class="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Category
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Slug
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Subcategories
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Products
                            </th>
                            <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted">
                                Status
                            </th>
                            <th class="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <template v-for="category in filteredCategories" :key="category.id">
                            <!-- Parent Category -->
                            <tr class="border-b border-border transition hover:bg-gray-50/70">
                                <td class="px-5 py-3.5">
                                    <div class="flex items-center gap-3">
                                        <button v-if="category.children.length" @click="toggleExpand(category.id)"
                                            class="flex size-7 shrink-0 items-center justify-center rounded-md text-muted hover:bg-gray-100 hover:text-title">
                                            <ChevronDown v-if="expanded.includes(category.id)" :size="16" />
                                            <ChevronRight v-else :size="16" />
                                        </button>

                                        <div v-else class="size-7 shrink-0"></div>

                                        <img :src="category.image" :alt="category.name"
                                            class="size-10 rounded-lg border border-border object-cover" />

                                        <div>
                                            <p class="text-sm font-semibold text-title">
                                                {{ category.name }}
                                            </p>
                                            <p class="mt-0.5 text-xs text-muted">
                                                Parent category
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-4 py-3.5 text-sm text-muted">
                                    {{ category.slug }}
                                </td>

                                <td class="px-4 py-3.5 text-sm text-body">
                                    {{ category.children.length }}
                                </td>

                                <td class="px-4 py-3.5">
                                    <span class="text-sm font-semibold text-title">
                                        {{ category.products }}
                                    </span>
                                </td>

                                <td class="px-4 py-3.5">
                                    <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                        :class="statusClass(category.status)">
                                        {{ category.status }}
                                    </span>
                                </td>

                                <td class="px-5 py-3.5">
                                    <div class="flex justify-end gap-1">
                                        <button title="Edit category"
                                            class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-primary">
                                            <Pencil :size="15" />
                                        </button>

                                        <button title="Delete category"
                                            class="rounded-lg border border-border p-2 text-muted transition hover:bg-red-50 hover:text-red-600">
                                            <Trash2 :size="15" />
                                        </button>

                                        <button title="More actions"
                                            class="rounded-lg border border-border p-2 text-muted transition hover:bg-gray-50 hover:text-title">
                                            <MoreHorizontal :size="15" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <!-- Child Categories -->
                            <template v-if="expanded.includes(category.id)">
                                <tr v-for="child in category.children" :key="child.id"
                                    class="border-b border-border bg-gray-50/40 transition hover:bg-gray-50">
                                    <td class="px-5 py-3">
                                        <div class="flex items-center gap-3 pl-10">
                                            <div class="h-8 w-5 shrink-0 border-b border-l border-border rounded-bl-md">
                                            </div>

                                            <div
                                                class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-muted">
                                                <FolderTree :size="16" />
                                            </div>

                                            <div>
                                                <p class="text-sm font-medium text-body">
                                                    {{ child.name }}
                                                </p>
                                                <p class="mt-0.5 text-xs text-muted">
                                                    Child category
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-3 text-sm text-muted">
                                        {{ child.slug }}
                                    </td>

                                    <td class="px-4 py-3 text-sm text-muted">—</td>

                                    <td class="px-4 py-3">
                                        <span class="text-sm font-medium text-body">
                                            {{ child.products }}
                                        </span>
                                    </td>

                                    <td class="px-4 py-3">
                                        <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-medium"
                                            :class="statusClass(child.status)">
                                            {{ child.status }}
                                        </span>
                                    </td>

                                    <td class="px-5 py-3">
                                        <div class="flex justify-end gap-1">
                                            <button title="Edit subcategory"
                                                class="rounded-lg border border-border bg-white p-2 text-muted transition hover:text-primary">
                                                <Pencil :size="15" />
                                            </button>

                                            <button title="Delete subcategory"
                                                class="rounded-lg border border-border bg-white p-2 text-muted transition hover:bg-red-50 hover:text-red-600">
                                                <Trash2 :size="15" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </template>

                        <!-- Empty State -->
                        <tr v-if="!filteredCategories.length">
                            <td colspan="6" class="px-5 py-14 text-center">
                                <FolderTree :size="30" class="mx-auto text-muted" />
                                <p class="mt-2 text-sm font-medium text-title">
                                    No categories found
                                </p>
                                <p class="mt-1 text-xs text-muted">
                                    Try changing your search or filter.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Footer -->
            <div
                class="flex flex-col justify-between gap-3 border-t border-border px-4 py-3.5 sm:flex-row sm:items-center">
                <p class="text-sm text-muted">
                    Showing
                    <span class="font-medium text-title">{{ filteredCategories.length }}</span>
                    of
                    <span class="font-medium text-title">{{ categories.length }}</span>
                    parent categories
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

                    <button class="rounded-lg border border-border p-2 text-muted hover:bg-gray-50">
                        <ChevronRight :size="16" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
