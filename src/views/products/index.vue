<script setup>
import { ref, computed } from 'vue'
import {
    Plus, Search, SlidersHorizontal, Download, Upload,
    Package, PackageCheck, AlertTriangle, Ban,
    Eye, Pencil, Trash2,
    ChevronLeft, ChevronRight, ArrowUpDown, X,
    Image
} from '@lucide/vue'

const search = ref('')
const category = ref('')
const status = ref('')
const perPage = ref(10)
const currentPage = ref(1)

const products = ref([
    { id: 1, name: 'Wireless Bluetooth Headphone', sku: 'WH-001', category: 'Electronics', brand: 'Sony', price: 2500, stock: 125, status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' },
    { id: 2, name: 'Premium Cotton T-Shirt', sku: 'TS-002', category: 'Fashion', brand: 'Nike', price: 850, stock: 240, status: 'Active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100' },
    { id: 3, name: 'Smart Watch Series 9', sku: 'SW-003', category: 'Electronics', brand: 'Apple', price: 4500, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100' },
    { id: 4, name: 'Leather Office Bag', sku: 'LB-004', category: 'Accessories', brand: 'Generic', price: 1850, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100' },
    { id: 5, name: 'Running Sports Shoes', sku: 'RS-005', category: 'Footwear', brand: 'Adidas', price: 3200, stock: 56, status: 'Active', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100' },
    { id: 6, name: 'Wireless Gaming Mouse', sku: 'GM-006', category: 'Electronics', brand: 'Logitech', price: 1200, stock: 5, status: 'Active', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=100' },
    { id: 7, name: 'Stainless Steel Water Bottle', sku: 'WB-007', category: 'Home & Living', brand: 'Generic', price: 450, stock: 95, status: 'Inactive', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100' },
    { id: 8, name: 'Premium Sunglasses', sku: 'SG-008', category: 'Accessories', brand: 'Ray-Ban', price: 1500, stock: 32, status: 'Active', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100' },
])

const categories = ['Electronics', 'Fashion', 'Accessories', 'Footwear', 'Home & Living']

const filteredProducts = computed(() => {
    return products.value.filter(product => {
        const keyword = search.value.toLowerCase()

        return (
            (!keyword || product.name.toLowerCase().includes(keyword) ||
                product.sku.toLowerCase().includes(keyword) ||
                product.brand.toLowerCase().includes(keyword)) &&
            (!category.value || product.category === category.value) &&
            (!status.value || product.status === status.value)
        )
    })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / perPage.value)))

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    return filteredProducts.value.slice(start, start + perPage.value)
})

const totalStock = computed(() => products.value.reduce((sum, p) => sum + p.stock, 0))
const lowStock = computed(() => products.value.filter(p => p.stock > 0 && p.stock <= 10).length)
const outOfStock = computed(() => products.value.filter(p => p.stock === 0).length)

const formatPrice = price => '৳ ' + price.toLocaleString('en-BD')

const clearFilters = () => {
    search.value = ''
    category.value = ''
    status.value = ''
    currentPage.value = 1
}

const deleteProduct = id => {
    if (confirm('Are you sure you want to delete this product?')) {
        products.value = products.value.filter(p => p.id !== id)
    }
}
</script>

<template>
    <div class="space-y-4">
        <section class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-title">
                    Products
                </h1>
                <p class="mt-1 text-sm text-muted">
                    Manage your marketplace products and inventory.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button
                    class="flex h-10 items-center gap-2 rounded-lg border border-border bg-white px-3 text-sm font-medium text-body transition hover:bg-surface">
                    <Download :size="16" />
                    <span class="hidden sm:inline">Export</span>
                </button>

                <button
                    class="flex h-10 items-center gap-2 rounded-lg border border-border bg-white px-3 text-sm font-medium text-body transition hover:bg-surface">
                    <Upload :size="16" />
                    <span class="hidden sm:inline">Import</span>
                </button>
            </div>
        </section>

        <!-- Statistics -->
        <section class="grid grid-cols-2 gap-3 xl:grid-cols-4">

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Total Products</p>
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Package :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-title">{{ products.length }}</h3>
                <p class="text-xs text-muted">Products in catalog</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Active Products</p>
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <PackageCheck :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-title">
                    {{products.filter(p => p.status === 'Active').length}}
                </h3>
                <p class="text-xs text-muted">Currently published</p>
            </div>

            <div class="rounded-xl  bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Low Stock</p>
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <AlertTriangle :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-title">{{ lowStock }}</h3>
                <p class="text-xs text-muted">Needs restocking</p>
            </div>

            <div class="rounded-xl bg-white p-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-muted">Out of Stock</p>
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                        <Ban :size="19" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-title">{{ outOfStock }}</h3>
                <p class="text-xs text-muted">Currently unavailable</p>
            </div>

        </section>

        <!-- Product Table -->
        <section class="overflow-hidden rounded-x bg-white">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4">
                <div>
                    <h2 class="text-base font-semibold text-title">All Products</h2>
                    <p class="mt-0.5 text-xs text-muted">
                        Manage and monitor your product catalog.
                    </p>
                </div>

                <div class="flex items-center gap-4">
                    <select v-model="category" @change="currentPage = 1"
                        class="h-10 rounded-lg border border-border bg-white px-3 text-sm text-body outline-none focus:border-primary">
                        <option value="">All Categories</option>
                        <option v-for="item in categories" :key="item" :value="item">
                            {{ item }}
                        </option>
                    </select>

                    <select v-model="status" @change="currentPage = 1"
                        class="h-10 rounded-lg border border-border bg-white px-3 text-sm text-body outline-none focus:border-primary">
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr
                            class="border-b border-border bg-surface/60 text-xs font-semibold uppercase tracking-wide text-muted">
                            <th class="px-4 py-3.5">
                                <button class="flex items-center gap-1.5">
                                    Product
                                    <ArrowUpDown :size="13" />
                                </button>
                            </th>
                            <th class="px-4 py-3.5">SKU</th>
                            <th class="px-4 py-3.5">Category</th>
                            <th class="px-4 py-3.5">Brand</th>
                            <th class="px-4 py-3.5">Price</th>
                            <th class="px-4 py-3.5">Stock</th>
                            <th class="px-4 py-3.5">Status</th>
                            <th class="px-5 py-3.5 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-border">

                        <tr v-for="product in paginatedProducts" :key="product.id"
                            class="transition hover:bg-surface/50">

                            <td class="px-4 py-3">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
                                        <img :src="product.image" :alt="product.name"
                                            class="h-full w-full object-cover" />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="truncate text-sm font-semibold text-title">
                                            {{ product.name }}
                                        </p>
                                        <p class="mt-0.5 text-xs text-muted">ID: #{{ product.id }}</p>
                                    </div>
                                </div>
                            </td>

                            <!-- SKU -->
                            <td class="px-4 py-3">
                                <span class="text-sm font-medium text-body">{{ product.sku }}</span>
                            </td>

                            <!-- Category -->
                            <td class="px-4 py-3">
                                <span class="text-sm text-body">{{ product.category }}</span>
                            </td>

                            <!-- Brand -->
                            <td class="px-4 py-3">
                                <span class="text-sm text-body">{{ product.brand }}</span>
                            </td>

                            <!-- Price -->
                            <td class="px-4 py-3">
                                <span class="whitespace-nowrap text-sm font-semibold text-title">
                                    {{ formatPrice(product.price) }}
                                </span>
                            </td>

                            <!-- Stock -->
                            <td class="px-4 py-3">
                                <div class="flex items-center gap-2">
                                    <span class="h-2 w-2 rounded-full"
                                        :class="product.stock === 0 ? 'bg-rose-500' : product.stock <= 10 ? 'bg-amber-500' : 'bg-emerald-500'"></span>
                                    <span class="text-sm font-medium"
                                        :class="product.stock === 0 ? 'text-rose-600' : product.stock <= 10 ? 'text-amber-600' : 'text-body'">
                                        {{ product.stock }} units
                                    </span>
                                </div>
                            </td>

                            <!-- Status -->
                            <td class="px-4 py-3">
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                                    :class="{
                                        'bg-emerald-50 text-emerald-700': product.status === 'Active',
                                        'bg-slate-100 text-slate-600': product.status === 'Inactive',
                                        'bg-rose-50 text-rose-700': product.status === 'Out of Stock'
                                    }">
                                    <span class="h-1.5 w-1.5 rounded-full bg-current"></span>
                                    {{ product.status }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-5 py-3 text-right">
                                <div class="flex items-center justify-end gap-1">
                                    <button title="View Product"
                                        class="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-blue-50 hover:text-blue-600">
                                        <Eye :size="16" />
                                    </button>

                                    <button title="Edit Product"
                                        class="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-amber-50 hover:text-amber-600">
                                        <Pencil :size="16" />
                                    </button>

                                    <button @click="deleteProduct(product.id)" title="Delete Product"
                                        class="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-rose-50 hover:text-rose-600">
                                        <Trash2 :size="16" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- Empty State -->
                        <tr v-if="paginatedProducts.length === 0">
                            <td colspan="9" class="px-5 py-16 text-center">
                                <div
                                    class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-muted">
                                    <Package :size="24" />
                                </div>
                                <h3 class="mt-3 text-sm font-semibold text-title">No products found</h3>
                                <p class="mt-1 text-xs text-muted">
                                    Try changing your search or filters.
                                </p>
                                <button @click="clearFilters" class="mt-3 text-sm font-semibold text-primary">
                                    Clear filters
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="flex flex-wrap items-center justify-between gap-4 border-t border-border px-4 py-4">

                <div class="flex items-center gap-2 text-sm text-muted">
                    <span>Showing</span>
                    <select v-model.number="perPage" @change="currentPage = 1"
                        class="h-8 rounded-md border border-border bg-white px-2 text-sm text-body outline-none">
                        <option :value="5">5</option>
                        <option :value="10">10</option>
                        <option :value="25">25</option>
                    </select>
                    <span>of {{ filteredProducts.length }} products</span>
                </div>

                <div class="flex items-center gap-1">
                    <button @click="currentPage = Math.max(1, currentPage - 1)" :disabled="currentPage === 1"
                        class="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40">
                        <ChevronLeft :size="17" />
                    </button>

                    <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                        class="flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-semibold transition"
                        :class="currentPage === page ? 'bg-primary text-white' : 'text-body hover:bg-surface'">
                        {{ page }}
                    </button>

                    <button @click="currentPage = Math.min(totalPages, currentPage + 1)"
                        :disabled="currentPage === totalPages"
                        class="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40">
                        <ChevronRight :size="17" />
                    </button>
                </div>

            </div>

        </section>
    </div>
</template>
