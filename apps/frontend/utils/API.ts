import axios from 'axios'

export const API_URL =
  (process.env.NEXT_PUBLIC_NODE_ENV === 'staging' ||
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:3333/api') ?? 'http://localhost:3333/api'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(
  (config) => {
    console.log(
      '\u001B[36m%s\u001B[0m',
      `${config.method?.toUpperCase() || ''} - ${config.baseURL || ''}/${
        config.url || ''
      }`
    )
    delete api.defaults.headers.common.Authorization
    return config
  },
  (error) => Promise.reject(error)
)
