import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//credentials would need to be inserted. see: https://experienceleague.adobe.com/docs/analytics/implementation/js/overview.html?lang=en

window.dataLayer = {
  events: [],
  page: {},
  component: {},
  user: {}
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
