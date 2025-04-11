import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import {store} from './store/Store.jsx' // ✅ Fix: Import the store
import './index.css'
// window.store = Store;

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* ✅ Fix: Now store is defined */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
