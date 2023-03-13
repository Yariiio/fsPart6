import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdotesSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        addVote(state, action) {
          const id = action.payload.id
          return state.map(a => a.id !== id ? a : action.payload)
        },
        addAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload.sort( (a, b) => b.votes - a.votes)
        }
    }
})

export const {addAnecdote, addVote, setAnecdotes} = anecdotesSlice.actions

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.create(content)
        dispatch(addAnecdote(newAnecdote))
    }
}

export const voteAnecdote = (anecdote) => {
    return async (dispatch) => {
        const updatedAnecdote = await anecdoteService.update({...anecdote, votes: anecdote.votes + 1})
        dispatch(addVote(updatedAnecdote))
    }
}
export default anecdotesSlice.reducer