import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Customers",
    component: () => import("../views/Customers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
