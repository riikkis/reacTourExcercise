import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3001',
  headers: {
    "Content-Type": "application/json"
  }
}

const client = axios.create(config)

export const getWriters = (that) => {
  client.get('/writers')
    .then((resp) => that.setState({writers: resp.data}))
}

export const updateWriter = (writer) => {
  client.put(`/writers/${writer.id}`, writer)
    .then((resp) => console.log(resp))
}

export const getPosts = (that) => {
  client.get('/posts')
    .then((resp) => that.setState({posts: resp.data}))
}