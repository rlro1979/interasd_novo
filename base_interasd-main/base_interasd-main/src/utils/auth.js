// utils/api/auth.js
import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // ou a URL do backend
})

export async function loginUsuario(email, senha) {
    try {
        const response = await API.post('/login', {
            no_email: email,
            no_senha: senha,
        })
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro no login')
    }
}
