import {h} from '@cycle/web';

function renderTHead(columns) {
  let thStyle = {width: (window.innerWidth / 3) + 'px'};
  let nodes = columns.map(value => h('th', {style: thStyle}, value));
  return h('thead', nodes);
}

export default renderTHead;
