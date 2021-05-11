import axios from 'axios'

const baseUrl = "http://localhost:3000"

const api = axios.create({
  baseURL: baseUrl,
})

export const registerUser = async (formData) => {
  const res = await api.post("/users", formData)
  return res.data
}

export const loginUser = async (formData) => {
  const res = await api.post("api/v1/auth", formData)
  localStorage.setItem("authToken", res.data.token)
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get("/api/v1/auth")
    return res.data
  }
  return false
}

export const getUser = async (id) => {
  console.log(id)
  const res = await api.get(`/users/${id}`)
  const user = res.data
  return user
}

export const updateUser = async (id, formData) => {
  const res = await api.put(`/users/${id}`, { user: formData })
  return res.data
}

export const getAllProducts = async () => {
  const res = await api.get('/products')
  return res.data
}