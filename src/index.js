import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/EffectHook';
// import App from './components/useState';
// import App from './components/useEffect';
// import App from './components/useContext';
// import App from './components/useReducer';
// import App from './components/useRef';
// import App from './components/useImperativeHandle';
// import App from './components/useDebugValue';
import App from './components/';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
