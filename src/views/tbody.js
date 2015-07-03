import {h} from '@cycle/web';

function renderTBody(rowHeight, visibleIndices) {
  let nodes = visibleIndices.map(index => {
    // hack to get tables to look nice by setting col width
    let tdStyle = {width: (window.innerWidth / 3) + 'px'};
    let top = index * rowHeight;
    return h(
      'tr',
      {
        style: {
          position: 'absolute',
          top: top + 'px',
          width: '100%',
          borderBottom: '1px solid grey'
        }
      },
      [
        h('td', {style: tdStyle}, String(index)),
        h('td', {style: tdStyle}, String(index * 10)),
        h('td', {style: tdStyle}, String(Math.floor(Math.random() * 100)))
      ]
    );
  });

  return h('tbody', nodes);
};

export default renderTBody;
