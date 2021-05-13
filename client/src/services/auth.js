import axios from 'axios'

let apiUrl
const apiUrls = {
  development: "http://localhost:3000",
  production: "https://vast-headland-60759.herokuapp.com/"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
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

export const getAllUsers = async () => {
  const res = await api.get('/users')
  return res.data
}

export const getUser = async (id) => {
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

export const getProduct = async (id) => {
  const res = await api.get(`/products/${id}`)
  const product = res.data
  return product
}

export const createNewProduct = async (formData) => {
  const res = await api.post(`/products`, { product: formData })
  return res.data
}

export const updateProduct = async (id, formData) => {
  const res = await api.put(`/products/${id}`, { product: formData })
  return res.data
}

export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`)
  return res.data
}

export const createNewReview = async (id, formData) => {
  const res = await api.post(`/products/${id}/reviews`, { review: formData })
  return res.data
}