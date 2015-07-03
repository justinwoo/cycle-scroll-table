import Cycle from '@cycle/core';
import {h} from '@cycle/web';

import renderTHead from './thead';
import renderTBody from './tbody';

function view(state$) {
  return state$.map(({tableHeight, rowHeight, columns, rowCount, visibleIndices}) =>
    h(
      'div#app-container',
      [
        h(
          'table#static-header-table',
          {
            style: {
              overflowX: 'hidden',
              borderBottom: '1px solid black'
            }
          },
          renderTHead(columns)
        ),
        h(
          'div#scroll-table-container',
          {
            style: {
              position: 'relative',
              overflowX: 'hidden',
              borderBottom: '1px solid black',
              height: tableHeight + 'px',
            }
          },
          h(
            'table#scroll-table',
            {
              style: {
                height: rowCount * rowHeight + 'px'
              }
            },
            renderTBody(rowHeight, visibleIndices)
          )
        )
      ]
    )
  );
}

export default view;
