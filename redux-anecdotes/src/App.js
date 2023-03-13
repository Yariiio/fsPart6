import CreateAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <CreateAnecdote />
    </div>
  )
}

export default App