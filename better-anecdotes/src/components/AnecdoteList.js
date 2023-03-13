import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {addMessage, removeMessage} from "../reducers/notificationReducer"

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      if(state.filter === '') return state.anecdotes
      return state.anecdotes.filter(a => a.content.includes(state.filter))
    })

    const vote = (id) => {
        dispatch(addVote(id))
        anecdotes.find(a => {
            if(a.id === id) {
                dispatch(addMessage(`you voted '${a.content}'`))
                setTimeout(() => {
                    dispatch(removeMessage())
                }, 5000)
            }
        })
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Anecdotes