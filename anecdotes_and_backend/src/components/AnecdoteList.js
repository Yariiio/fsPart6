import { useDispatch, useSelector } from "react-redux";
import {voteAnecdote} from '../reducers/anecdoteReducer'
import { handleMessage } from "../reducers/notificationReducer"

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      if(state.filter === '') return state.anecdotes
      return state.anecdotes.filter(a => a.content.includes(state.filter))
    })

    const vote = async (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(handleMessage(`you voted '${anecdote.content}'`, 10))
    }

    return(
      <div>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Anecdotes