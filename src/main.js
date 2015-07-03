import Cycle from '@cycle/core';
import CycleWeb from '@cycle/web';

import intent from './intent';
import model from './models/main-model';
import view from './views/main-view';

function main({DOM}) {
  let actions = intent(DOM);
  let state$ = model(actions);
  let vtree$ = view(state$);
  return { DOM: vtree$ };
}

let drivers = {
  DOM: CycleWeb.makeDOMDriver('#app')
};

Cycle.run(main, drivers);
