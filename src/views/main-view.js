import Cycle from '@cycle/core';
import CycleWeb from '@cycle/web';

import getTHead from './thead';
import getTBody from './tbody';

import {
  tableHeightBehavior,
  rowHeightBehavior,
  columnsBehavior,
  rowCountBehavior
} from '../values';

import visibleIndicesStream from '../streams/visible-indices-stream';

var MainView = Cycle.Rx.Observable.combineLatest(
  tableHeightBehavior,
  rowHeightBehavior,
  columnsBehavior,
  rowCountBehavior,
  visibleIndicesStream,
  (
    tableHeight,
    rowHeight,
    columns,
    rowCount,
    visibleIndices
  ) => {
    return CycleWeb.h(
      'div#app-container',
      [
        CycleWeb.h(
          'table#static-header-table',
          {
            style: {
              overflowX: 'hidden',
              borderBottom: '1px solid black'
            }
          },
          getTHead(columns)
        ),
        CycleWeb.h(
          'div#scroll-table-container',
          {
            style: {
              position: 'relative',
              overflowX: 'hidden',
              borderBottom: '1px solid black',
              height: tableHeight + 'px',
            }
          },
          CycleWeb.h(
            'table#scroll-table',
            {
              style: {
                height: rowCount * rowHeight + 'px'
              }
            },
            getTBody(rowHeight, visibleIndices)
          )
        )
      ]
    );
  }
);

export default MainView;
