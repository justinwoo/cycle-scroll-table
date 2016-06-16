import { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Model } from '../model/index';
declare function view(state$: Stream<Model>): Stream<VNode>;
export default view;
