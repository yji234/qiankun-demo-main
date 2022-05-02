import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'Main',
  routes: [
    { path: '/login', component: '@/pages/login/index' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/index',
          name: 'Index',
          component: '@/pages/index',
        },
        {
          path: '/react-demo',
          name: '这是demo',
          microApp: 'react-demo',
        },
        {
          path: '/react-demo/article',
          name: '这是article',
          microApp: 'react-demo',
        },
        {
          path: '/react-demo2',
          name: '这是demo2',
          microApp: 'react-demo2',
        },
        {
          path: '/react-demo2/about',
          name: '这是demo2的about',
          microApp: 'react-demo2',
        },
        {
          path: '/vue2-demo',
          name: '这是vue的demo',
          microApp: 'vue2-demo',
        },
        {
          path: '/vue2-demo/note',
          name: '这是vue的demo-note',
          microApp: 'vue2-demo',
        },
        {
          path: '/blog',
          name: 'Blog',
          component: '@/pages/blog/index',
        },
        {
          path: '/life',
          name: 'Life',
          component: '@/pages/life/index',
        },
        {
          path: '/note',
          name: 'Note',
          component: '@/pages/note/index',
        },
        {
          path: '/resume',
          name: 'Resume',
          component: '@/pages/resume/index',
        }
      ]
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'react-demo', // 唯一 id
          // entry: '//localhost:8083/', // html entry
          entry: '//umijsapp.yji234.xyz/', // html entry
        },
        {
          name: 'react-demo2',
          // entry: '//localhost:3000/',
          entry: '//createreactapp.yji234.xyz/',
        },
        {
          name: 'vue2-demo',
          // entry: '//localhost:8082/',
          entry: '//vuetwo.yji234.xyz/',
        }
      ],
    },
  },
  fastRefresh: {},
});
