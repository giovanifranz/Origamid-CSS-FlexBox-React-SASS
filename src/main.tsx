import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.scss'
import App from '@/App'
import { Header, Footer } from '@/components'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
