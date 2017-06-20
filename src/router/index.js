import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Blog from '@/components/Blog';
import Post from '@/components/Post';
import Talks from '@/components/Talks';
import Talk from '@/components/Talk';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:postId',
      name: 'Post',
      component: Post,
    },
    {
      path: '/talks',
      name: 'Talks',
      component: Talks,
    },
    {
      path: '/talks/:postId',
      name: 'Talk',
      component: Talk,
    },
  ],
});