import Regular from 'regularjs';
import tmp from './index.html';
import mock from '../../mock/detail';


const Detail = Regular.extend({
  template: tmp,
  enter(option) { // 进入路由节点的钩子函数
    const name = option.param.name;
    console.log(name);
    this.data.details = mock[name];
  },
  config() {
    console.log(123);
  },
  init() {
    console.log(321);
  }

});

export default Detail;
