import Stream from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
declare function intent(DOM: DOMSource): Stream<number>;
export default intent;
