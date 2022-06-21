import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from '../components/App/App';

ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
</BrowserRouter>
, document.getElementById('app'));