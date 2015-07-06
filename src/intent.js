import logObservablesObject from 'log-observables-object';

import {scrollTop$} from './intents/user-scroll';

function intent() {
  let actions = {
    scrollTop$
  };

  logObservablesObject(actions, {
    debounceAllStreams: true
  });

  return actions;
}

export default intent;
