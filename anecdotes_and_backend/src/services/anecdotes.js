import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    //I have owerwritten the id the backend created  with the function 'getId' just so it looks the same
    const anecdote = {content, id: getId(), votes: 0}
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const update = async (object) => {
    const response = await axios.put(`${baseUrl}/${object.id}`, object)
    return response.data
}

export default { getAll, create, update }