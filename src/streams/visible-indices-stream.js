import {Rx} from '@cycle/core';

import {
  tableHeightBehavior,
  rowHeightBehavior,
  rowCountBehavior,
  scrollTopBehavior
} from '../values';

var firstVisibleRowStream  = Rx.Observable.combineLatest(
  scrollTopBehavior,
  rowHeightBehavior,
  (scrollTop, rowHeight) => Math.floor(scrollTop / rowHeight)
).distinctUntilChanged();

var visibleRowsStream = Rx.Observable.combineLatest(
  tableHeightBehavior,
  rowHeightBehavior,
  (tableHeight, rowHeight) => Math.ceil(tableHeight / rowHeight)
);

var visibleIndicesStream = Rx.Observable.combineLatest(
  rowCountBehavior,
  visibleRowsStream,
  firstVisibleRowStream,
  (rowCount, visibleRows, firstVisibleRow) => {
    var visibleIndices = [];
    var lastRow = firstVisibleRow + visibleRows + 1;

    if (lastRow > rowCount) {
      firstVisibleRow -= lastRow - rowCount;
    }

    for (var i = 0; i <= visibleRows; i++) {
      visibleIndices.push(i + firstVisibleRow);
    }
    return visibleIndices;
  }
);

export default visibleIndicesStream;
