import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App';
import { robots } from './robots';
// eslint-disable-next-line
import Cardlist from './Cardlist';
// eslint-disable-next-line
import SearchBox from './SearchBox';

//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App robots={robots}/>,document.getElementById('root'));

//registerServiceWorker();
