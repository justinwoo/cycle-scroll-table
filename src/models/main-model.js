import {Rx} from '@cycle/core';

import makeVisibleIndices$ from './visible-indices-stream';

function model(actions) {
  let tableHeight$ = Rx.Observable.just(500);
  let rowHeight$ = Rx.Observable.just(30);
  let columns$ = Rx.Observable.just(['ID', 'ID * 10', 'Random Number']);
  let rowCount$ = Rx.Observable.just(10000);
  let scrollTop$ = actions.userScrolled$.startWith(0);
  let visibleIndices$ = makeVisibleIndices$(
    tableHeight$, rowHeight$, rowCount$, scrollTop$
  );
  let state$ = Rx.Observable.combineLatest(
    tableHeight$, rowHeight$, columns$, rowCount$, visibleIndices$,
    (tableHeight, rowHeight, columns, rowCount, visibleIndices) =>
      ({tableHeight, rowHeight, columns, rowCount, visibleIndices})
  );
  return state$;
}

export default model;