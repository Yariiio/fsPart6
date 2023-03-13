import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll =  async () => {
    return axios.get(baseUrl).then(res => res.data)
}

export const create = (newAnecdote) => {
    return axios.post(baseUrl, newAnecdote).then(res => res.data)
}

export const update = (anecdote) =>{
    return axios.put(`${baseUrl}/${anecdote.id}`, anecdote).then(res => res.data)
}