import {h} from '@cycle/web';

var getTHead = (columns) => {
  var thStyle = {width: (window.innerWidth / 3) + 'px'};
  var nodes = columns.map(value => h('th', {style: thStyle}, value));

  return h('thead', nodes);
}

export default getTHead;
