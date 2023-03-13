import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import {addMessage, removeMessage} from "../reducers/notificationReducer"

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const newAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(anecdote))
        dispatch(addMessage(`you added new anecdote '${anecdote}'`))
        setTimeout(() => {
            dispatch(removeMessage())
        }, 5000)
      }

      return (
        <div>
          <h2>create new</h2>
          <form onSubmit={newAnecdote}>
            <div><input name='anecdote' type='text'/></div>
            <button>create</button>
          </form>
        </div>
      )
}

export default CreateAnecdote