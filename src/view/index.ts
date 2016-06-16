import {Stream} from 'xstream';
import {div, VNode} from '@cycle/dom';

import renderTHead from './thead';
import renderTBody from './tbody';

import {Model} from '../model/index';

function view(state$: Stream<Model>) {
  return state$.map(({tableHeight, rowHeight, columns, rowCount, visibleIndices}) =>
    div('#app-container',
      [
        div('#static-header-table',
          {
            style: {
              border: '1px solid black',
              borderBottom: 'none',
              width: 900 + 'px',
            }
          },
          [renderTHead(columns)]
        ),
        div('#scroll-table-container',
          {
            style: {
              position: 'relative',
              overflowX: 'hidden',
              border: '1px solid black',
              width: 900 + 'px',
              height: tableHeight + 'px',
            }
          },
          [div('#scroll-table',
            {
              style: {
                height: rowCount * rowHeight + 'px',
                width: 900 + 'px'
              }
            },
            [renderTBody(rowHeight, visibleIndices)]
          )]
        )
      ]
    )
  );
}

export default view;
