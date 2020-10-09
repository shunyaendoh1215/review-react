import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// for redux
import { Provider as ReduxProvider } from "react-redux";
import { store as reduxStore } from "./redux/store";

// for react hooks
import { HooksProvider } from "./hooks/provider";
import {useReducer} from 'react';
import reducer, {initState} from './hooks/reducer';

const Root = () => {
  // you should call useReducer in root.
  const hooksStore = useReducer(reducer, initState);
  return (
    <React.StrictMode>
      <ReduxProvider store={reduxStore}>
        <HooksProvider value={hooksStore}>
          <App />
        </HooksProvider>
      </ReduxProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
serviceWorker.unregister();
