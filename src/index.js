import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://74d3c93b7c744490972440eb91698c6a@bug.lo.agency/32",
//   integrations: [new Integrations.BrowserTracing()],


//   tracesSampleRate: 1.0,
// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
