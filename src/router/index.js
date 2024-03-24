import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Layout from "../views/Layout.vue";
import ItemList from "../views/ItemList.vue";
import AboutView from "@/views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/:id",
        component: ItemList,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
