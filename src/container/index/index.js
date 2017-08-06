import Regular from 'regularjs';
import tmp from './index.html';
import data from '../../mock/index';


const Index = Regular.extend({
  template: tmp,
  data
});

export default Index;
