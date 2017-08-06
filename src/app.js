import Regular from 'regularjs';
import restate from 'regular-state';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// view
import Index from './container/index/index';
import Detail from './container/detail/index';

import tmp from './app.html';
import './main.scss';

const App = Regular.extend({
  template: tmp,
  init() {
  }
});

const routes = {
  app: {
    url: '',
    view: App
  },
  'app.index': {
    url: '',
    view: Index
  },
  'app.detail': {
    url: '/detail',
    view: Detail
  }
  // 'app.blog': {
  //   view: Blog
  // },
  // 'app.chat': {
  //   view: Chat
  // }
};

restate()
    .state(routes) // 完成路由节点注册
    .start({ // 启动路由
      view: document.getElementById('app') // 顶层容器节点
    });
