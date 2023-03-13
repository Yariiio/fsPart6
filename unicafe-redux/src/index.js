import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
    return (
      <div>
        <div>
            <button onClick={() => store.dispatch({type: 'GOOD'})}>good</button>
            <button onClick={() => store.dispatch({type: 'OK'})}>ok</button>
            <button onClick={() => store.dispatch({type: 'BAD'})}>bad</button>
            <button onClick={() => store.dispatch({type: 'RESET'})}>reset stats</button>
        </div>
        <div>
          {console.log(store.getState())}
            <p>good {store.getState().good}</p>
            <p>ok {store.getState().ok}</p>
            <p>bad {store.getState().bad}</p>
        </div>
      </div>

    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))

  const renderApp = () => {
    root.render(<App />)
  }

  renderApp()
  store.subscribe(renderApp)
  