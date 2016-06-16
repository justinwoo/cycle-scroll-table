import xs, {Stream} from 'xstream';

import makeVisibleIndices$ from './make-visible-indices';

export interface Model {
  tableHeight: number,
  rowHeight: number,
  columns: string[],
  rowCount: number,
  visibleIndices: number[]
}

function model(action$ : Stream<number>) : Stream<Model> {
  let tableHeight$ = xs.of(500);
  let rowHeight$ = xs.of(30);
  let columns$ = xs.of(['ID', 'ID * 10', 'Random Number']);
  let rowCount$ = xs.of(10000);
  let scrollTop$ = action$.startWith(0);
  let visibleIndices$ = makeVisibleIndices$(
    tableHeight$, rowHeight$, rowCount$, scrollTop$
  );
  let state$ = xs.combine(
    tableHeight$, rowHeight$, columns$, rowCount$, visibleIndices$
  ).map(([tableHeight, rowHeight, columns, rowCount, visibleIndices]) =>
    ({ tableHeight, rowHeight, columns, rowCount, visibleIndices }));
  return state$;
}

export default model;
