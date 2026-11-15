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
  ],
});

export default router;
