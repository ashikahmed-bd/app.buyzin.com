import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register.vue'),
      meta: { guest: true },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
      meta: { guest: true },
    },

    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/auth/forgot.vue'),
      meta: { guest: true },
    },

    // Dashboard
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
      meta: { auth: true },
    },

    // Products
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/products/create',
      name: 'products-create',
      component: () => import('../views/products/create.vue'),
      meta: { auth: true },
    },
    {
      path: '/products/:product/pricing',
      name: 'products-pricing',
      component: () => import('../views/products/pricing.vue'),
      meta: { auth: true },
    },

    {
      path: '/products/:product/variants',
      name: 'products-variants',
      component: () => import('../views/products/variants.vue'),
      meta: { auth: true },
    },

    {
      path: '/products/:product/media',
      name: 'products-media',
      component: () => import('../views/products/media.vue'),
      meta: { auth: true },
    },

    {
      path: '/products/:product/seo',
      name: 'products-seo',
      component: () => import('../views/products/seo.vue'),
      meta: { auth: true },
    },
    {
      path: '/products/inventory',
      name: 'products-inventory',
      component: () => import('../views/products/inventory.vue'),
      meta: { auth: true },
    },

    // Orders
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/orders/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/orders/pending',
      name: 'orders-pending',
      component: () => import('../views/orders/pending.vue'),
      meta: { auth: true },
    },
    {
      path: '/orders/processing',
      name: 'orders-processing',
      component: () => import('../views/orders/processing.vue'),
      meta: { auth: true },
    },
    {
      path: '/orders/shipped',
      name: 'orders-shipped',
      component: () => import('../views/orders/shipped.vue'),
      meta: { auth: true },
    },
    {
      path: '/orders/delivered',
      name: 'orders-delivered',
      component: () => import('../views/orders/delivered.vue'),
      meta: { auth: true },
    },
    {
      path: '/orders/cancelled',
      name: 'orders-cancelled',
      component: () => import('../views/orders/cancelled.vue'),
      meta: { auth: true },
    },

    // Quotes
    {
      path: '/quotes',
      name: 'quotes',
      component: () => import('../views/quotes/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/quotes/pending',
      name: 'quotes-pending',
      component: () => import('../views/quotes/pending.vue'),
      meta: { auth: true },
    },
    {
      path: '/quotes/accepted',
      name: 'quotes-accepted',
      component: () => import('../views/quotes/accepted.vue'),
      meta: { auth: true },
    },
    {
      path: '/quotes/rejected',
      name: 'quotes-rejected',
      component: () => import('../views/quotes/rejected.vue'),
      meta: { auth: true },
    },

    // Customers
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/customers/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/customers/groups',
      name: 'customers-groups',
      component: () => import('../views/customers/groups.vue'),
      meta: { auth: true },
    },

    // Messages
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/messages/index.vue'),
      meta: { auth: true },
    },

    // Returns
    {
      path: '/returns',
      name: 'returns',
      component: () => import('../views/returns/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/returns/pending',
      name: 'returns-pending',
      component: () => import('../views/returns/pending.vue'),
      meta: { auth: true },
    },
    {
      path: '/returns/approved',
      name: 'returns-approved',
      component: () => import('../views/returns/approved.vue'),
      meta: { auth: true },
    },
    {
      path: '/returns/rejected',
      name: 'returns-rejected',
      component: () => import('../views/returns/rejected.vue'),
      meta: { auth: true },
    },

    // Subscriptions
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('../views/subscription/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/subscription/plans',
      name: 'subscription-plans',
      component: () => import('../views/subscription/plans.vue'),
      meta: { auth: true },
    },
    {
      path: '/subscription/billing',
      name: 'subscription-billing',
      component: () => import('../views/subscription/billing.vue'),
      meta: { auth: true },
    },
    {
      path: '/subscription/invoices',
      name: 'subscription-invoices',
      component: () => import('../views/subscription/invoices.vue'),
      meta: { auth: true },
    },
    {
      path: '/subscription/commission',
      name: 'subscription-commission',
      component: () => import('../views/subscription/commission.vue'),
      meta: { auth: true },
    },

    // Analytics
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/analytics/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/analytics/sales',
      name: 'analytics-sales',
      component: () => import('../views/analytics/sales.vue'),
      meta: { auth: true },
    },
    {
      path: '/analytics/products',
      name: 'analytics-products',
      component: () => import('../views/analytics/products.vue'),
      meta: { auth: true },
    },
    {
      path: '/analytics/customers',
      name: 'analytics-customers',
      component: () => import('../views/analytics/customers.vue'),
      meta: { auth: true },
    },

    // Marketing
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('../views/marketing/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/marketing/promotions',
      name: 'marketing-promotions',
      component: () => import('../views/marketing/promotions.vue'),
      meta: { auth: true },
    },
    {
      path: '/marketing/coupons',
      name: 'marketing-coupons',
      component: () => import('../views/marketing/coupons.vue'),
      meta: { auth: true },
    },
    {
      path: '/marketing/flash-deals',
      name: 'marketing-flash-deals',
      component: () => import('../views/marketing/flash-deals.vue'),
      meta: { auth: true },
    },

    // Settings
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings/index.vue'),
      meta: { auth: true },
    },
    {
      path: '/settings/profile',
      name: 'settings-profile',
      component: () => import('../views/settings/profile.vue'),
      meta: { auth: true },
    },
    {
      path: '/settings/shipping',
      name: 'settings-shipping',
      component: () => import('../views/settings/shipping.vue'),
      meta: { auth: true },
    },
    {
      path: '/settings/payment',
      name: 'settings-payment',
      component: () => import('../views/settings/payment.vue'),
      meta: { auth: true },
    },
    {
      path: '/settings/notifications',
      name: 'settings-notifications',
      component: () => import('../views/settings/notifications.vue'),
      meta: { auth: true },
    },
  ],
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()

  if (!auth.user) {
    await auth.getUser()
  }

  if (to.meta.auth && !auth.loggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.meta.guest && auth.loggedIn) {
    return '/'
  }
})

export default router
