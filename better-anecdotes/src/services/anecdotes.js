import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (object) => {
    const response = await axios.post(baseUrl, object)
    return response.data
}

const anecdoteServise =  {getAll, createAnecdote}
export default anecdoteServise