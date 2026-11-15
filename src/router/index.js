import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/products/index.vue"),
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("@/views/orders/index.vue"),
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("@/views/customers/index.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("@/views/stores/index.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("@/views/categories/index.vue"),
    },
    {
      path: "/brands",
      name: "brands",
      component: () => import("@/views/brands/index.vue"),
    },
    {
      path: "/subscription",
      name: "subscription",
      component: () => import("@/views/subscription/index.vue"),
    },
    {
      path: "/marketing",
      name: "marketing",
      component: () => import("@/views/marketing/index.vue"),
    },
    {
      path: "/analytics",
      name: "analytics",
      component: () => import("@/views/analytics/index.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/settings/index.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("@/views/support/index.vue"),
    },
  ],
});

export default router;
