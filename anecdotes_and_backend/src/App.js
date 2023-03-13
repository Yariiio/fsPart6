import { useEffect } from 'react'
import CreateAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeAnecdotes())
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <Anecdotes />
      <CreateAnecdote />
    </div>
  )
}

export default App