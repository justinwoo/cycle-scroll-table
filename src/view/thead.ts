import {div, VNode} from '@cycle/dom';

function renderTHead(columns : string[]) {
  let cellStyle = {display: 'inline-block', width: (900 / 3) + 'px'};
  let nodes = columns.map(value => div({style: cellStyle}, value));
  return div(nodes);
}

export default renderTHead;
