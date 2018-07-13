import {
  applyMiddleware,
  createStore,
} from 'redux';
import {
  composeWithDevTools,
} from 'redux-devtools-extension/logOnlyInProduction';
import fsaValidator from 'redux-middleware-fsa-validator';

import reducers from '../reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(fsaValidator)),
);

export default store;
