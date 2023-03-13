import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {getAll, update} from './requests'
import {useQuery, useMutation} from 'react-query'
import { useQueryClient } from 'react-query'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const [notification, notificationDispatch] = useContext(NotificationContext)

  const handleNotification = (message) => {
      notificationDispatch({type: 'ADD_NOTIFICATION', payload: message})
      setTimeout(() => {
          notificationDispatch({type: 'REMOVE_NOTIFICATION', payload: ''})
      }, 5000)
  }

  const updateAnecdoteMutation = useMutation(update, {
      onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
      }
  })

  const handleVote = (anecdote) => {
      updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
      handleNotification(`anecdote '${anecdote.content}' voted`)
  }

const result = useQuery('anecdotes', getAll)
const anecdotes = result.data

if(result.isLoading) return <div>loading...</div>
if(result.isError) return <div>problem in server...</div>

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
