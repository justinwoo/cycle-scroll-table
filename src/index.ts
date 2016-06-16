import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';

import intent from './intent';
import model from './model';
import view from './view';

function main({DOM}) {
  let actions = intent(DOM);
  let state$ = model(actions);
  let vtree$ = view(state$);
  return { DOM: vtree$ };
}

run(main, {
  DOM: makeDOMDriver('#app')
});
