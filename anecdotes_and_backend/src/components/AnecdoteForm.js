import { useDispatch } from "react-redux";
import {handleMessage} from "../reducers/notificationReducer"
import { createAnecdote } from "../reducers/anecdoteReducer";

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        dispatch(createAnecdote(content))
        dispatch(handleMessage(`you added new anecdote '${content}'`, 5))
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