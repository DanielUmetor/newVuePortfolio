import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import EducationView from '../views/EducationView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/education', name: 'Education', component: EducationView },
  { path: '/projects', name: 'Projects', component: ProjectsView },         
  { path: '/contact', name: 'Contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
