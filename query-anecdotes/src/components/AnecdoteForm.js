import { useMutation, useQueryClient } from "react-query"
import { create } from '../requests'
import { useContext } from "react"
import NotificationContext from "../NotificationContext"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const [notification, notificationDispatch] = useContext(NotificationContext)

  const handleNotification = (message) => {
    notificationDispatch({type: 'ADD_NOTIFICATION', payload: message})
    setTimeout(() => {
        notificationDispatch({type: 'REMOVE_NOTIFICATION', payload: ''})
    }, 5000)
}

  const newAnecdoteMutation = useMutation(create, {
      onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
      },
      onError: (error) => {
          handleNotification(error.response.data.error)
      }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
    handleNotification(`anecdote '${content}' has been added`)

}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
