import xs, {Stream} from 'xstream';
import dropRepeats from 'xstream/extra/dropRepeats';

function makeVisibleIndices$(
    tableHeight$ : Stream<number>,
    rowHeight$ : Stream<number>,
    rowCount$ : Stream<number>,
    scrollTop$ : Stream<number>
  ) {
  let firstVisibleRow$ = xs.combine(scrollTop$, rowHeight$)
    .map(([scrollTop, rowHeight]) => Math.max(0, Math.floor(scrollTop / rowHeight) - 10))
    .compose(dropRepeats<number>());

  let visibleRows$ = xs.combine(tableHeight$, rowHeight$)
    .map(([tableHeight, rowHeight]) => Math.ceil(tableHeight / rowHeight)
  );

  let visibleIndices$ = xs.combine(rowCount$, visibleRows$, firstVisibleRow$)
    .map(([rowCount, visibleRows, firstVisibleRow]) => {
      let visibleIndices : number[] = [];
      let lastRow = Math.min(rowCount, (firstVisibleRow + visibleRows + 20));

      if (lastRow > rowCount) {
        firstVisibleRow -= lastRow - rowCount;
      }

      for (let i = firstVisibleRow; i <= lastRow; i++) {
        visibleIndices.push(i);
      }

      return visibleIndices;
    }
  );

  return visibleIndices$;
}

export default makeVisibleIndices$;
