import { Stream } from 'xstream';
export interface Model {
    tableHeight: number;
    rowHeight: number;
    columns: string[];
    rowCount: number;
    visibleIndices: number[];
}
declare function model(action$: Stream<number>): Stream<Model>;
export default model;
