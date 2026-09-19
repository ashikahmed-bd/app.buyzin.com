<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'

const sidebar = ref(false)

const navigation = [
  {
    label: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    to: '/',
    active: true,
  },

  {
    label: 'Products',
    icon: 'i-lucide-package',
    children: [
      {
        label: 'All Products',
        to: '/products',
      },
      {
        label: 'Add Product',
        to: '/products/create',
      },
      {
        label: 'Categories',
        to: '/products/categories',
      },
      {
        label: 'Brands',
        to: '/products/brands',
      },
      {
        label: 'Inventory',
        to: '/products/inventory',
      },
    ],
  },

  {
    label: 'Orders',
    icon: 'i-lucide-shopping-cart',
    children: [
      {
        label: 'All Orders',
        to: '/orders',
      },
      {
        label: 'Pending',
        to: '/orders/pending',
      },
      {
        label: 'Processing',
        to: '/orders/processing',
      },
      {
        label: 'Shipped',
        to: '/orders/shipped',
      },
      {
        label: 'Delivered',
        to: '/orders/delivered',
      },
      {
        label: 'Cancelled',
        to: '/orders/cancelled',
      },
    ],
  },

  {
    label: 'Quotes',
    icon: 'i-lucide-file-text',
    children: [
      {
        label: 'All Quotes',
        to: '/quotes',
      },
      {
        label: 'Pending',
        to: '/quotes/pending',
      },
      {
        label: 'Accepted',
        to: '/quotes/accepted',
      },
      {
        label: 'Rejected',
        to: '/quotes/rejected',
      },
    ],
  },

  {
    label: 'Customers',
    icon: 'i-lucide-users',
    children: [
      {
        label: 'All Customers',
        to: '/customers',
      },
      {
        label: 'Customer Groups',
        to: '/customers/groups',
      },
    ],
  },

  {
    label: 'Messages',
    icon: 'i-lucide-message-square',
    count: 12,
    to: '/messages',
  },

  {
    label: 'Returns',
    icon: 'i-lucide-rotate-ccw',
    children: [
      {
        label: 'All Returns',
        to: '/returns',
      },
      {
        label: 'Pending Returns',
        to: '/returns/pending',
      },
      {
        label: 'Approved',
        to: '/returns/approved',
      },
      {
        label: 'Rejected',
        to: '/returns/rejected',
      },
    ],
  },

  {
    label: 'Payouts',
    icon: 'i-lucide-wallet',
    children: [
      {
        label: 'Overview',
        to: '/payouts',
      },
      {
        label: 'Transactions',
        to: '/payouts/transactions',
      },
      {
        label: 'Bank Account',
        to: '/payouts/bank-account',
      },
    ],
  },

  {
    label: 'Analytics',
    icon: 'i-lucide-chart-column',
    children: [
      {
        label: 'Overview',
        to: '/analytics',
      },
      {
        label: 'Sales Analytics',
        to: '/analytics/sales',
      },
      {
        label: 'Product Analytics',
        to: '/analytics/products',
      },
      {
        label: 'Customer Analytics',
        to: '/analytics/customers',
      },
    ],
  },

  {
    label: 'Marketing',
    icon: 'i-lucide-megaphone',
    children: [
      {
        label: 'Overview',
        to: '/marketing',
      },
      {
        label: 'Promotions',
        to: '/marketing/promotions',
      },
      {
        label: 'Coupons',
        to: '/marketing/coupons',
      },
      {
        label: 'Flash Deals',
        to: '/marketing/flash-deals',
      },
    ],
  },

  {
    label: 'Settings',
    icon: 'i-lucide-settings',
    children: [
      {
        label: 'General',
        to: '/settings',
      },
      {
        label: 'Profile',
        to: '/settings/profile',
      },
      {
        label: 'Shipping',
        to: '/settings/shipping',
      },
      {
        label: 'Payment',
        to: '/settings/payment',
      },
      {
        label: 'Notifications',
        to: '/settings/notifications',
      },
    ],
  },
]

const openMenus = ref({})

const toggleMenu = (label) => {
  openMenus.value[label] = !openMenus.value[label]
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Transition name="fade">
      <div
        v-if="sidebar"
        class="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
        @click="sidebar = false"
      />
    </Transition>

    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0"
      :class="sidebar ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex items-center border-b border-slate-100 px-4 py-2.5">
        <RouterLink to="/">
          <img src="/logo.svg" alt="Logo" class="h-12 w-auto" />
        </RouterLink>
      </div>

      <nav class="flex-1 overflow-y-auto scrollbar px-3 py-3">
        <div class="space-y-1">
          <div v-for="item in navigation" :key="item.label">
            <button
              v-if="item.children?.length"
              type="button"
              class="group flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition"
              :class="
                openMenus[item.label]
                  ? 'bg-slate-50 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              "
              @click="toggleMenu(item.label)"
            >
              <UIcon :name="item.icon" class="size-4 shrink-0" />

              <span class="flex-1 text-left">
                {{ item.label }}
              </span>

              <span
                v-if="item.count"
                class="rounded-full bg-blue-50 px-2 py-0.5 text-sm font-semibold text-blue-600"
              >
                {{ item.count }}
              </span>

              <UIcon
                name="i-lucide-chevron-right"
                class="size-4 shrink-0 text-slate-400 transition-transform duration-200"
                :class="{
                  'rotate-90': openMenus[item.label],
                }"
              />
            </button>

            <RouterLink
              v-else
              :to="item.to || '#'"
              class="group flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition"
              :class="
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              "
            >
              <UIcon :name="item.icon" class="size-4 shrink-0" />

              <span class="flex-1">
                {{ item.label }}
              </span>

              <span
                v-if="item.count"
                class="rounded-full bg-blue-50 px-2 py-0.5 text-sm font-semibold text-primary"
              >
                {{ item.count }}
              </span>
            </RouterLink>

            <div
              v-if="item.children?.length && openMenus[item.label]"
              class="ml-5 space-y-0.5 border-l border-border"
            >
              <RouterLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="group flex min-h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-primary"
                active-class="bg-blue-50/70 text-blue-600"
              >
                <span
                  class="size-1.5 shrink-0 rounded-full bg-slate-300 transition group-hover:bg-primary"
                />

                <span class="truncate">
                  {{ child.label }}
                </span>
              </RouterLink>
            </div>
          </div>
        </div>

        <RouterLink
          to="/store"
          class="flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <UIcon name="i-lucide-store" class="size-4" />
          <span class="flex-1"> My Store </span>
          <UIcon name="i-lucide-external-link" class="size-4 text-slate-400" />
        </RouterLink>

        <RouterLink
          to="/seller/store"
          class="ml-10 mt-0 block text-sm text-slate-400 hover:text-primary"
        >
          View Store
        </RouterLink>
      </nav>

      <div class="p-3">
        <div
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/20 hover:shadow-md"
        >
          <div class="absolute -right-10 -top-10 size-24 rounded-full bg-primary/5 blur-2xl" />

          <div class="relative flex items-start gap-3.5">
            <div
              class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10"
            >
              <UIcon name="i-lucide-crown" class="size-5" />
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <p class="text-sm font-semibold text-slate-900">Upgrade to Plus</p>

                <span
                  class="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
                >
                  Pro
                </span>
              </div>
            </div>
          </div>
          <p class="mt-1 text-sm leading-5 text-slate-500">
            Unlock premium tools and grow your business faster.
          </p>
          <button
            type="button"
            class="relative mt-4 flex w-full items-center justify-between rounded bg-primary px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            <span>Upgrade Now</span>

            <span class="flex size-6 items-center justify-center rounded-lg bg-white/15">
              <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
            </span>
          </button>
        </div>
      </div>
    </aside>

    <div class="lg:pl-64">
      <Header v-model:sidebar="sidebar" />

      <slot />
    </div>
  </div>
</template>

<style scoped></style>
