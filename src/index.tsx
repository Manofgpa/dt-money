import React from 'react'
import { render } from 'react-dom'
import { createServer } from 'miragejs'
import App from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date(),
        },
      ]
    })
  },
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
