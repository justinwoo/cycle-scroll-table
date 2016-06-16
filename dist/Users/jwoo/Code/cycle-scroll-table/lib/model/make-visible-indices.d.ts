import xs, { Stream } from 'xstream';
declare function makeVisibleIndices$(tableHeight$: Stream<number>, rowHeight$: Stream<number>, rowCount$: Stream<number>, scrollTop$: Stream<number>): xs<number[]>;
export default makeVisibleIndices$;
