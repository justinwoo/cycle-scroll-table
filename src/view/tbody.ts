import {div, VNode} from '@cycle/dom';

function renderTBody(rowHeight : number, visibleIndices : number[]) {
  let nodes = visibleIndices.map(index => {
    let cellStyle = {display: 'inline-block', width: (900 / 3) + 'px'};
    let top = index * rowHeight;
    return div({
        style: {
          position: 'absolute',
          top: top + 'px',
          width: '100%',
          borderBottom: '1px solid grey'
        }
      },
      [
        div({style: cellStyle}, [String(index)]),
        div({style: cellStyle}, [String(index * 10)]),
        div({style: cellStyle}, [String(Math.floor(Math.random() * 100))])
      ]
    );
  });

  return div(nodes);
};

export default renderTBody;
