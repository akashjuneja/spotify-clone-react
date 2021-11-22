import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { DataLayer } from './data layer/Data';
import { initialState } from './data layer/reducer';
import {reducer} from './data layer/reducer'

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById("root")
);

serviceWorker.unregister();
