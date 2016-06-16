import Stream from 'xstream';

import {DOMSource} from '@cycle/dom/xstream-typings';

function intent(DOM : DOMSource) {
  return DOM.select('#scroll-table-container')
    .events('scroll', {useCapture: true})
    .map(e => (<Element>e.target).scrollTop)
}

export default intent;