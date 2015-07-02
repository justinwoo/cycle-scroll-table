import Cycle from '@cycle/core';
import CycleWeb from '@cycle/web';

import {scrollTopBehavior} from './values';

import MainView from './views/main-view';

function main({DOM}) {
  var scrollTableNodeStream = DOM.get('#scroll-table-container', 'scroll').subscribe(
    e => scrollTopBehavior.onNext(e.srcElement.scrollTop)
  );

  return {
    DOM: MainView
  };
}

let drivers = {
  DOM: CycleWeb.makeDOMDriver('#app')
};

Cycle.run(main, drivers);
